import styled from 'styled-components';

export const AccordionContent = styled.div`
  width: 28.1rem;
  border-bottom: 1px solid var(--light-grayish-blue);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  user-select: none;
  font-size: 12px;

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
    overflow-wrap: break-word;
    padding-top: 1.6rem;
    padding-right: 2rem;
    color: var(--dark-grayish-blue);
    line-height: 1.5rem;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;
