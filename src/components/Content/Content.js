import styled from 'styled-components';

export const Content = styled.div`
  width: 87.2vw;
  height: 69.66145833333333vh; //535px de 768px
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 53.5rem;

  .image {
    width: 24rem;
    height: 12rem;
    position: relative;
    margin-bottom: 1.2rem;
  }

  .illustration {
    .mobile-illustration {
      position: absolute;
      top: -10.8rem;
      right: 0;
      margin-left: 0.2rem;
    }
  }

  .faqContet {
    width: 28.1rem;
    height: 35.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-weight: 700;
      font-size: 3.2em;
      line-height: 3.6rem;

      color: #000000;

      margin-bottom: 3.4rem;
      margin-left: 0.1rem;
    }
  }

  @media (min-width: 375px) {
    .mobile-illustration {
      /* margin-top: -10.8rem; */
    }
  }
`;
