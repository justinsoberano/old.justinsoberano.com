import { createGlobalStyle } from "styled-components";

export const noselect = `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

  ::-webkit-scrollbar {
    height: 12px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece {
    display: none;
  }

  @font-face {
    font-family: "Minecraft";
    src: url("../../fonts/minecraft/minecraftregular-bmg3-webfont.woff") format("woff");
    font-style: normal;
  }

  @font-face {
    font-family: "Minecraft";
    src: url("../../fonts/minecraft/minecraftitalic-r8mo-webfont.woff") format("woff");
    font-style: italic;
  }

  @font-face {
    font-family: "Minecraft";
    src: url("../../fonts/minecraft/minecraftbold-nmk1-webfont.woff") format("woff");
    font-weight: bold;
  }

  @font-face {
    font-family: "Minecraft";
    src: url("../../fonts/minecraft/minecraftbolditalic-1y1e-webfont.woff") format("woff");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "San Francisco";
    font-weight: 100;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff2");
  }

  @font-face {
    font-family: "San Francisco";
    font-weight: 200;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff2");
  }

  @font-face {
    font-family: "San Francisco";
    font-weight: normal;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff2");
  }

  @font-face {
    font-family: "San Francisco";
    font-weight: 500;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff2");
  }

  @font-face {
    font-family: "San Francisco";
    font-weight: bold;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff2");
  }
`;
