import React from "react";
import Spring from "../utils/Spring";
import { 
  InvolvementCard, 
  InvolvementContainer, 
  InvolvementDesc, 
  InvolvementImg, 
  InvolvementTitle,
  InvolvementBackButton 
} from "./styles/InvolvementStyles";
import { useHorizontalScroll } from "../utils/useHorizontalScroll";
import { useColorContext } from "../../context/ColorContext";

export const Involvement = ({ s, changeShow, changeTimer, changeShowInvolvement, data }) => {
  const scrollRef = useHorizontalScroll();
  const { setActiveColor } = useColorContext();
  const fromTransform = s ? "translateY(200px)" : "translateY(0px)";
  const toTransform = s ? "translateY(0px)" : "translateY(300px)";

  const handleBack = () => {
    changeShow(true);
    changeTimer(100);
    changeShowInvolvement(false);
    setActiveColor(null);
  };

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
        <InvolvementBackButton onClick={handleBack}>back</InvolvementBackButton>
      </InvolvementContainer>
    </Spring>
  );
};