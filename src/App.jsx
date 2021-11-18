import { Conteiner, Content, GlobalStyle } from './global.js';
import React from 'react';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content>
          <h1>FAQ</h1>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
