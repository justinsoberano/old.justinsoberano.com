import styled from "styled-components";

export const ExperienceContainer = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin-top: -405px;
  position: relative;
  zoom: 0.8;
`;

export const ExperienceCard = styled.div`
  white-space: normal;
  display: inline-block;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.758);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  width: 450px;
  height: 355px;
  border: 4px solid white;
  overflow-wrap: break-word;
`;

export const ExperienceTech = styled.img`
  width: 150px;
  position: inline-block;
  margin-top: -100%;
  margin-bottom: 15px;
  margin-left: 65%;
  z-index: 999;
`;

export const ExperienceEmp = styled.img`
  margin-left: 15px;
  margin-top: -5px;
  margin-bottom: 10px;
  height: 50px;
`;

export const ExperienceDate = styled.p`
  font-family: 'San Francisco';
  font-weight: bold;
  font-size: 16px;
  color: gray;
  text-align: right;
  margin-right: 30px;
  margin-top: -45px;
`;

export const ExperienceTitle = styled.p`
  font-family: 'San Francisco';
  font-weight: 800;
  font-size: 18px;
  color: white;
  text-align: left;
  margin-left: 15px;
  margin-top: 25px;
  word-spacing: 0px;
`;

export const ExperienceDesc = styled.p`
  font-family: 'San Francisco';
  font-weight: 400;
  font-size: 16px;
  color: white;
  text-align: left;
  margin-left: 13.5px;
  margin-right: 13.5px;
  margin-top: -10px;
  word-spacing: 0px;
`;

export const Back = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-family: 'Minecraft';
  padding: 8px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
  display: inline-block;
  color: white;
  background: black;
  text-align: center;
  border-radius: 15px;
  border: 4px solid rgb(164, 32, 32);
  &:hover {
    border: 8px solid rgb(164, 32, 32);
    padding: 4px;
  }
  &:active {
    border: 8px solid rgb(101, 20, 20);
    padding: 4px;
  }
`;

