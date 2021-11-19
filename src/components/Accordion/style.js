import styled from 'styled-components';

export const AccordionContent = styled.div`
  width: 74.93333333333332vw;
  border-bottom: 1px solid var(--light-grayish-blue);
  margin-bottom: 1.7rem;
  padding-bottom: 1.7rem;
  padding-left: 0.2rem;
  user-select: none;
  font-size: 1.1rem;

  .question {
    position: relative;
    font-weight: ${(props) => (props.isOpen ? '700' : '400')};
    color: ${(props) =>
      props.isOpen ? 'var(--desaturated-blue)' : 'var(--dark-grayish-blue)'};
    cursor: pointer;

    :hover {
      color: ${(props) =>
        props.isOpen ? 'var(--desaturated-blue)' : 'var(--soft-red)'};
    }

    :after {
      ${(props) => props.isOpen && 'transform: rotate(180deg);'};
      transition: all 0.3s ease-in;
      content: url(${(props) => props.arrowPath});
      position: absolute;
      right: 0;
    }
  }

  .answer {
    /* overflow-wrap: break-word; */
    font-size: 1rem;
    padding-top: 1.1rem;
    padding-right: 0.5rem;
    color: var(--dark-grayish-blue);
    line-height: 1.6rem;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }

  @media (min-width: 375px) {
    width: 28.1rem;
    font-size: 1.31rem;

    .answer {
      /* overflow-wrap: break-word; */
      font-size: 1.2rem;
      padding-right: 1rem;
      line-height: 1.8rem;
    }
  }
`;
