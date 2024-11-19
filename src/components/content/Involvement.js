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
import { useHorizontalScroll } from "../utils/useHorizontalScroll";

export const Involvement = ({ s, changeShow, changeTimer, changeShowInvolvement, data }) => {
  const scrollRef = useHorizontalScroll();
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
      <InvolvementContainer ref={scrollRef}>{cards}
        <ProjectBackButton onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowInvolvement(false);
        }}>back</ProjectBackButton>
      </InvolvementContainer>
    </Spring>
  );
};