/* eslint-disable no-unused-vars */
import React from 'react';
import { AccordionContent } from './style';

// # images
import arrow from '../../assets/images/icon-arrow-down.svg';

// function Accordion(question, asnser, key, myId, faqId, setFaqId) {
function Accordion() {
  return (
    <AccordionContent arrowPath={arrow} isOpen={false}>
      <p className="question">How many team members can I invite?</p>
      <p className="answer">
        You can invite up to 2 additional users on the Free plan. There is no
        limit on team members for the Premium plan.
      </p>
    </AccordionContent>
  );
}

export { Accordion };
