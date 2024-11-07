import styled from "styled-components";

const common = `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingScreenContainer = styled.div`
  ${common}
  letter-spacing: 2px;
  text-shadow: 0px 0px 10px white;
  &.start {
    opacity: 0;
    letter-spacing: 10px;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
  }
`;

export const TopText = styled.p`
  color: white;
  font-size: 20px;
  font-family: "Minecraft";
  font-weight: bold;
`;

export const ReadyText = styled.p`
  font-family: "Minecraft";
  font-size: 20px;
  color: white;
  top: 51%;
  cursor: pointer;
  position: absolute;
  letter-spacing: 3.3px;
  &:hover {
    font-weight: bold;
    letter-spacing: 2px;
  }
  &:active {
    color: lightgray;
  }
`;

export const Version = styled.p`
  position: absolute;
  top: 95%;
  left: 1%;
  font-size: 15px;
  color: white;
  font-family: "Minecraft";
  font-style: "normal",
  letter-spacingL 2px,
`;

export const Link = styled.a`
  color: white;
  cursor: "pointer";
`;

