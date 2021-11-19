import styled from 'styled-components';

export const Content = styled.div`
  width: 87.2vw;
  height: 69.66145833333333vh;
  //535px de 768px
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    width: 24rem;
    height: 12rem;
    position: relative;
    margin-bottom: 0rem;
  }

  .illustration {
    .mobile-illustration {
      position: absolute;
      top: -10.8rem;
      right: 0;
      margin-left: 0.2rem;
    }
  }

  .faqContent {
    width: 74.93333333333332vw;
    height: 35.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-weight: 700;
      font-size: 2.4em;
      line-height: 2.6rem;

      color: #000000;

      margin-bottom: 1.5rem;
      margin-left: 0.1rem;
    }
  }

  @media (min-width: 375px) {
    height: 69.66145833333333vh;
    .image {
    position: relative;
    margin-bottom: 1.2rem;
  }

    .faqContent {
    width: 28.1rem;
    height: 35.7rem;

    h1 {
      font-size: 3.2em;
      line-height: 3.6rem;
      margin-bottom: 3.4rem;
    }
    }
  }
  }

  @media(min-width: 1200px) {
    flex-direction: row;
    align-items: initial;
    justify-content: initial;
    width: 920px;
    height: 507px;
    padding-top: 0rem;

    .image{
      width: 460px;

      .illustration{
        display: block;
        position: relative;
        display: flex;
        align-items: center;

        .boxContent{
          position: absolute;
          z-index: 6;
          left: -9.3rem;
          top: 14.1rem;
          margin-top: 6.2rem;
        }
        .contentOverflowHidden{
          overflow: hidden;
          position: relative;
          height: 507px;

          .desktop-illustration{
            position: relative;
            margin-top: 0.5rem;
            margin-left: -8.3rem;
            z-index: 3;
            margin-top: 6.8rem;
          }

          .shadow{
            position: absolute;
            top: -29.8rem;
            right: 0rem;
            width: 250%;
            z-index: 1;
          }

        }
      }
    }

    .faqContent{
      width: 460px;
      align-items: flex-start;
      padding-left: 1.5rem;
      h1 {
      font-size: 3.2em;
      line-height: 3.6rem;
      margin-top: 6.4rem;
      margin-bottom: 3.9rem;
    }
    }
  }
`;
