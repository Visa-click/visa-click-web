import styled from '@emotion/styled';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollTop } from '@components/route';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  display: block;
`;
