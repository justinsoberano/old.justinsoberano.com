import React from "react";
import Spring from "../utils/Spring";
import "../styles/global_stylesheet.css";
import { Back, ExperienceCard, ExperienceContainer, ExperienceDate, ExperienceDesc, ExperienceEmp, ExperienceTech, ExperienceTitle } from "./styles/ExperienceStyles";
import { useHorizontalScroll } from "../utils/useHorizontalScroll";

const backgroundStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
  maskImage: "linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
  borderRadius: "10px 10px 0 0",
  width: "325px",
  height: "150px",
}

export const Experience = ({ s, changeShow, changeTimer, changeShowExperience, data }) => {
  const scrollRef = useHorizontalScroll();
  const fromTransform = s ? "translateY(450px)" : "translateY(0px)";
  const toTransform = s ? "translateY(0px)" : "translateY(450px)";
  const cards = data.map((exp) => (
    <ExperienceCard>
      <div style={{...backgroundStyle, backgroundImage: `url('${exp.image}')`,}}/>
      <ExperienceTech src={exp.techStackImage} />
      <ExperienceEmp src={exp.employerImage} />
      <ExperienceDate>{exp.dates}</ExperienceDate>
      <ExperienceTitle>{exp.title}</ExperienceTitle>
      <ExperienceDesc>{exp.description}</ExperienceDesc>
    </ExperienceCard>
  ));

  return (
    <Spring fromTransform={fromTransform} toTransform={toTransform}>
      <ExperienceContainer ref={scrollRef}>
        {cards}
        <Back onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowExperience(false);
        }}>back</Back>
      </ExperienceContainer>
    </Spring>
  );
};