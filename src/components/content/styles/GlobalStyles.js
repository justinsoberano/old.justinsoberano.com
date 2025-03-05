import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const noselect = `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 5vh;
  ${noselect}
  
  @media (min-width: 768px) {
    bottom: 8vh;
  }
`;

export const button = `
  margin: 10px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  width: 150px;
  align-items: center;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;
