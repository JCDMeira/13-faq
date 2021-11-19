import React, { useState } from 'react';

// # My components from styled-components
import { Conteiner, GlobalStyle } from './global.js';
import { Content } from './components/Content/Content';

// # My components
import { Accordion } from './components/Accordion/index.jsx';

// # mobile images
import mobileIllustration from './assets/images/img-mobile.svg';

// # data, faq question and answer
import { faqs } from './faqs';

function App() {
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
          <div>
            <img
              src={mobileIllustration}
              alt="illustration - Woman looking at a screen"
              className="mobile-illustration"
            />
          </div>
          <div className="faqContet">
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
