import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
   // text - primary
    --desaturated-blue: hsl(238, 29%, 16%);
    --soft-red: hsl(14, 88%, 65%);

    // text - neutral
    --very-dark-grayish-blue: hsl(237, 12%, 33%);
    --dark-grayish-blue:  hsl(240, 6%, 50%);

    // background gradient
    --soft-violet: hsl(273, 75%, 66%);
    --soft-blue: hsl(240, 73%, 65%);
    --darker-blue: hsl(260, 73%, 45%);
    --white: #FFF;

    // dividers
    --light-grayish-blue: hsl(240, 5%, 91%);
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  font-family: 'Kumbh Sans', sans-serif;
}
`;

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(179.96deg, #af67e9 20.33%, #6565e7 99.97%);
  padding-top: 14.8rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 87.2vw;
  height: 69.66145833333333vh; //535px de 768px
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  .mobile-illustration {
    margin-top: -11rem;
    margin-bottom: 2.7rem;
  }

  .faqContet {
    h1 {
      font-weight: 700;
      font-size: 3rem;
      line-height: 3.6rem;

      color: #000000;
    }
  }
`;
