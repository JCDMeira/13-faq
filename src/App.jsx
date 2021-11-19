/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// # My components from styled-components
import { Conteiner, GlobalStyle } from './global.js';
import { Content } from './components/Content/Content';

// # My components
import { Accordion } from './components/Accordion/index.jsx';

// # mobile images
import mobileIllustration from './assets/images/img-mobile.svg';

// # desktop images
import box from './assets/images/illustration-box-desktop.svg';
import desktopIllustatrion from './assets/images/illustration-woman-online-desktop.svg';
import shadow from './assets/images/bg-pattern-desktop.svg';

// # data, faq question and answer
import { faqs } from './faqs';

function App() {
  const screenSize = window.screen.width;
  const [faqId, setFaqId] = useState(1);

  // @ Ao tentar passar a propriedade key, ocorre erro, ela é apenas uma marca de unidade para
  // @ o iteravel, garantindo que ele é realmente único. Portanto, key não é vista do outro lado
  // @ no componente.
  const Accordions = faqs.map((faq, index) => (
    <Accordion
      question={faq.q}
      answer={faq.a}
      key={index}
      myId={index}
      faqId={faqId}
      setFaqId={setFaqId}
    />
  ));
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content onClick={() => setFaqId(null)}>
          <div className="image">
            <div className="illustration">
              {screenSize > 1200 ? (
                <>
                  <div className="boxContent">
                    <img src={box} alt="red box illustration" />
                  </div>
                  <div className="contentOverflowHidden">
                    <img
                      src={desktopIllustatrion}
                      alt="illustration - woman looking at a screen"
                      className="desktop-illustration"
                    />
                    <img
                      src={shadow}
                      alt="illustration - shadow"
                      className="shadow"
                    />
                  </div>
                </>
              ) : (
                <img
                  src={mobileIllustration}
                  alt="illustration - Woman looking at a screen"
                  className="mobile-illustration"
                />
              )}
            </div>
          </div>
          <div className="faqContent">
            <h1>FAQ</h1>
            {/* <Accordion question={faqs[1].q} answer={faqs[1].a} /> */}
            {Accordions}
          </div>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
