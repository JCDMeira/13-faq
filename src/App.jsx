/* eslint-disable no-unused-vars */
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
  // const [faqId, setFaqId] = useState(null);
  // const Accordions = faqs.map((faq, id) => (
  //   <Accordion
  //     question={faq.q}
  //     asnser={faq.a}
  //     key={id}
  //     myId={id}
  //     faqId={faqId}
  //     setFaqId={setFaqId}
  //   />
  // ));

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
            <Accordion />
          </div>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
