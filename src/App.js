import React from 'react';
import GlobalStyle from './styles/global';

import { Container } from './styles';
import CenterNav from './components/CenterMenu';
import LeftNav from './components/LeftMenu';
import RightNav from './components/RightMenu';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LeftNav />
        <CenterNav />
        <RightNav />
      </Container>
    </>
  );
}

export default App;
