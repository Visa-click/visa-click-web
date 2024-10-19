import { FC, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Button, Input } from '@components/form';
import { H4, P1 } from '@styled/com/Text';
import {
  $btnBack,
  $phoneWidth,
  $primary,
  $primary10,
  $white100,
  $white50,
  fadeIn,
  infRotate,
} from '@styled/helpers';
import { Condition } from '@components/list';
import { IconLoader } from '@components/icons';
import { useVisaContext } from '../VisaProvider';

export const DragAndDrop: FC = () => {
  const [uploading, setUploading] = useState(false);
  const [fileHovering, setFileHovering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { nextStep } = useVisaContext();

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileHovering(true);
  };

  const handleDragLeave = () => {
    setFileHovering(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileHovering(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  const uploadFile = (file: File) => {
    // TODO: upload file
    setUploading(true);
    setTimeout(() => {
      console.log('Файл загружен:', file);
      setUploading(false);
      nextStep();
    }, 2000);
  };

  return (
    <Wrapper
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      isFileHovering={fileHovering || uploading}>
      <Condition test={uploading}>
        <Loader>
          <IconLoader />
          <b>Идёт обработка</b>
          <span>Мы считываем данные вашего паспорта</span>
        </Loader>
        <>
          <Title>
            Поместите фотографию <br /> вашего заграничного паспорта в эту область
          </Title>
          <Descr>Или выберите файл на устройстве</Descr>
          <Button $fitContent $theme="block" onClick={handleFileInputClick}>
            {uploading ? 'Загрузка файла...' : 'Выбрать файл'}
          </Button>
          <Input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      </Condition>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isFileHovering?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  box-sizing: border-box;
  border: 0.06rem dashed ${$primary};
  border-radius: 1.5rem;
  background: ${({ isFileHovering }) => (isFileHovering ? $primary10 : $btnBack)};
  height: calc(100vh - 38rem);
  margin-bottom: 3rem;
  transition: background 0.3s, border 0.3s;
  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    height: auto;
    padding: 3rem 1.5rem 3rem 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled(H4)``;

const Descr = styled(P1)`
  color: ${$white50};
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
  svg {
    fill: ${$white100};
    width: 1.5rem;
    height: 1.5rem;
    animation: ${infRotate} 2s linear infinite;
  }
  b {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin: 0.75rem 0;
  }
  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    opacity: 0.5;
  }
`;
