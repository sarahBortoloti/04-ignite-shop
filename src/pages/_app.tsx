import React from 'react'
import { globalStyles } from '../../styles/global'
import { Container, Header } from '../../styles/pages/app';
import logoSvg from '../assets/logo_shop.svg';
import Image from 'next/image';
globalStyles();
export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoSvg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

