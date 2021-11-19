import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
   // text - primary
    --desaturated-blue: #1D1E35;
    --soft-red: #F47C57;

    // text - neutral
    --very-dark-grayish-blue: #4A4B5E;
    --dark-grayish-blue:  #787887;

    // background gradient
    --soft-violet: #AF67E9;
    --soft-blue: #6565E7;
    --white: #FFF;

    // dividers
    --light-grayish-blue: #E7E7E9;
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
  background: linear-gradient(
    179.96deg,
    var(--soft-violet) 20.33%,
    var(--soft-blue) 99.97%
  );
  padding-top: 14.8rem;
  display: flex;
  justify-content: center;
`;
