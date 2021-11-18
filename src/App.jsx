import { Conteiner, Content, GlobalStyle } from './global.js';
import React from 'react';

// # mobile images
import mobileIllustration from './assets/images/img-mobile.svg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content>
          <div>
            <img
              src={mobileIllustration}
              alt="illustration - Woman looking at a screen"
              className="mobile-illustration"
            />
          </div>
          <div className="faqContet">
            <h1>FAQ</h1>
          </div>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
