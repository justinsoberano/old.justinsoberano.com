import React from "react";
import Spring from "../utils/Spring";
import { ProjectBackButton } from "./styles/ProjectStyles";
import { 
  InvolvementCard, 
  InvolvementContainer, 
  InvolvementDesc, 
  InvolvementImg, 
  InvolvementTitle 
} from "./styles/InvolvementStyles";

interface InvolvementData {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

type InvolvementProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowInvolvement: (show: boolean) => void;
  data: InvolvementData[];
};

export const Involvement: React.FC<InvolvementProps> = ({ s, changeShow, changeTimer, changeShowInvolvement, data }) => {
  const fromTransform = s ? "translateY(200px)" : "translateY(0px)";
  const toTransform = s ? "translateY(0px)" : "translateY(200px)";

  const cards = data.map((inv) => (
    <InvolvementCard key={inv.id}>
      <InvolvementImg src={inv.image}/>
      <InvolvementTitle>{inv.title}</InvolvementTitle>
      <InvolvementDesc>
        {inv.description}
        {inv.link && (
          <a href={inv.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {inv.linkText}
          </a>
        )}
      </InvolvementDesc>
    </InvolvementCard>
  ));

  return (
    <Spring fromTransform={fromTransform} toTransform={toTransform}>
      <InvolvementContainer>{cards}
        <ProjectBackButton onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowInvolvement(false);
        }}>back</ProjectBackButton>
      </InvolvementContainer>
    </Spring>
  );
};