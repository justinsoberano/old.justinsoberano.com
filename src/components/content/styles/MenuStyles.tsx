import styled from "styled-components";
import { button } from "./GlobalStyles";
import Button from "../../utils/Button";

export const ExperiencesButton = styled(Button)`
  ${button}
  border: 5px solid yellow;
  &:hover {
    border: 8px solid yellow;
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active {
    border: 8px solid rgb(178, 178, 28);
    padding: 12px;
  }
`;

export const ProjectsButton = styled(Button)`
  ${button}
  border: 5px solid aqua;
  &:hover {
    border: 8px solid aqua;
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active {
    border: 8px solid rgb(0, 150, 150);
    padding: 12px;
  }
`;

export const InvolvementButton = styled(Button)`
  ${button}
  border: 5px solid rgb(161, 106, 232);
  &:hover {
    border: 8px solid rgb(161, 106, 232);
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active {
    border: 8px solid rgb(105, 69, 151);
    padding: 12px;
  }
`;

export const ContactButton = styled(Button)`
  ${button}
  border: 5px solid rgb(238, 71, 207);
  &:hover {
    border: 8px solid rgb(238, 71, 207);
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active{
    border: 8px solid rgb(150, 44, 131);
    padding: 12px;
  }
`;