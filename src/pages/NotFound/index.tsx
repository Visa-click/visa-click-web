import { NotFoundPng, NotFoundWebp } from '@assets/img/pages/notfound';
import { Button } from '@components/form';
import { Picture } from '@components/image';
import { HelmetHead } from '@components/seo';
import styled from '@emotion/styled';
import { Container } from '@styled/com';
import { H2, P1 } from '@styled/com/Text';
import { $primary } from '@styled/helpers';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HelmetHead title="404 Страница не найдена" descr="Страница не найдена" />
      <Wrapper>
        <Picture png={NotFoundPng} webp={NotFoundWebp} alt="Страница не найдена" />
        <Tag>Упс..</Tag>
        <Title>
          Ошибка 404.
          <br /> Страница на найдена <br /> или удалена
        </Title>
        <Descr>
          Проверьте адрес страницы <br />
          или вернитесь назад
        </Descr>
        <Button $fitContent onClick={() => navigate(-1)} $theme={'general'}>
          Вернуться назад
        </Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Container)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  picture {
    img {
      width: 11.88rem;
      height: 11.81rem;
    }
    margin-bottom: 3rem;
  }
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Tag = styled.div`
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  border-radius: 2rem;
  background-color: ${$primary};
  width: fit-content;
`;

const Title = styled(H2)``;

const Descr = styled(P1)`
  color: rgba(255, 255, 255, 0.5);
`;

export default NotFound;
