/* eslint-disable no-unused-vars */
import React from 'react';
import { AccordionContent } from './style';
import P from 'prop-types';

// # images
import arrow from '../../assets/images/icon-arrow-down.svg';

function Accordion({ question, answer, myId, faqId, setFaqId }) {
  return (
    <AccordionContent arrowPath={arrow} isOpen={myId === faqId}>
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </AccordionContent>
  );
}

Accordion.propTypes = {
  question: P.string.isRequired,
  answer: P.string.isRequired,
  myId: P.number.isRequired,
  faqId: P.number.isRequired,
  setFaqId: P.func.isRequired,
};
export { Accordion };
