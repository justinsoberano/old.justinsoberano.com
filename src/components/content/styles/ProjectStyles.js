import styled from "styled-components";
import { noselect } from "./GlobalStyles";

export const ProjectContainer = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin-top: -268px;
  zoom: 0.8;
  ${noselect}
`;

export const ProjectCard = styled.div`
  white-space: normal;
  display: inline-block;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.758);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  width: 450px;
  height: 220px;
  position: relative;
  border: 4px solid white;
  overflow-wrap: break-word;
`;

export const ProjectImg = styled.img`
  border-radius: 0px 12px 12px 0;
  width: 170px;
  float: right;
  height: 220px;
  object-fit: cover;
`;

export const ProjectTech = styled.img`
  width: auto;
  height: 40px;
  bottom: 0;
  padding: 14px;
  position: absolute;
`;

export const ProjectTitle = styled.div`
  font-size: 1.4em;
  margin-left: 15px;
  margin-top: 20px;
  font-weight: bold;
  font-family: 'San Francisco';
  color: white;
  text-align: left;
`;

export const ProjectDesc = styled.div`
  font-size: 14px;
  margin-left: 15px;
  font-family: 'San Francisco';
  color: white;
  margin-top: 4px;
  text-align: left;
  margin-right: 200px;
`;

export const ProjectBackButton = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Minecraft';
  padding: 8px;
  width: 100px;
  height: 206px;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: black;
  text-align: center;
  border-radius: 15px;
  border: 4px solid rgb(164, 32, 32);
  vertical-align: top;
  background-color: rgba(0, 0, 0, 0.758);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &:hover {
    border: 8px solid rgb(164, 32, 32);
    padding: 4px;
    font-style: italic;
  }
  &:active {
    border: 8px solid rgb(101, 20, 20);
    padding: 4px;
  }
`;