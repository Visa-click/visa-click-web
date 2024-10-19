import styled from '@emotion/styled';
import { FC, ReactNode, useEffect } from 'react';

import { isNull } from '@bunt/is';
import { useNavigate } from 'react-router-dom';
import { useLockedBody } from '@hooks/useLockedBody';
import { $phoneWidth, fadeIn } from '@styled/helpers';
import { ClickOutside } from '../events';
import { FadeTransition } from '../animation';
import { IconClose } from '../icons';
import { useDialog } from '.';

interface Props {
  children: any;
  overlay?: boolean;
}

export const DialogLayout: FC<Props> = ({ children, overlay = true }) => {
  const control = useDialog();
  const active = control?.useState();
  const [, setLocked] = useLockedBody(false, 'root');
  const navigate = useNavigate();
  useEffect(() => {
    if (overlay) {
      setLocked(active);
    }
  }, [overlay, active]);

  return (
    <>
      {isNull(control) ? (
        <Overlay>
          <ClickOutside onClick={() => navigate(-1)} active={active}>
            <Content>{children}</Content>
          </ClickOutside>
        </Overlay>
      ) : (
        control.portal(
          <FadeTransition in={active}>
            {overlay ? (
              <Overlay>
                <ClickOutside onClick={control.close} active={active}>
                  <Content>{children}</Content>
                </ClickOutside>
              </Overlay>
            ) : (
              children
            )}
          </FadeTransition>,
        )
      )}
    </>
  );
};

export const ModalHead: FC<{ children: ReactNode; noMargin?: boolean }> = ({
  children,
  noMargin,
}) => {
  const dialog = useDialog();
  const navigate = useNavigate();

  return (
    <Wrapper $noMargin={noMargin}>
      <Title>{children}</Title>
      <Close onClick={isNull(dialog) ? () => navigate(-1) : dialog.close}>
        <IconClose />
      </Close>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $noMargin?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div``;

const Close = styled.div`
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
    fill: #fff;
    stroke: #fff;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  z-index: 10;
  animation: ${fadeIn} 0.3s;
  transition: opacity 0.3s, visibility 0.3s;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 43.71%, rgba(0, 0, 0, 0.5) 100%),
      rgba(10, 12, 25, 0.8);
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1rem;
  }
`;

const Content = styled.div`
  position: relative;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
  }
`;
