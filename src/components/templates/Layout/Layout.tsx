import React from 'react';
import Styles from './styles';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import { IChildren } from '../../../interfaces/children';

const Layout = ({ children }: IChildren) => {
  return (
    <>
      <Styles />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
