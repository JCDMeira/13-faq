import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  font-family: 'Kumbh Sans';
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

  padding-top: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'kumhb Sams';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6rem;

    color: #000000;
  }
`;
