import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`;

export const TelaInteira = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContainerMain = styled.div`
  min-height: 25vh;
  width: 100vw;
  display: flex;
`;

export const PaineldeVideo = styled.section`
section{
  padding-left: 20px;
  padding-top: 20px;
  /* flex-grow: 1
  /* display: grid;
  grid-template-columns: repeat(4, 24.8% 0.2%);
  grid-template-rows: repeat(4, 270px 20px); */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;}

`;
