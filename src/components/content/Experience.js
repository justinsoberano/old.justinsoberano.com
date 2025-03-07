import React, { useState, useEffect, useRef } from "react";
import Spring from "../utils/Spring";
import "../global_stylesheet.css";
import { ExperienceCard, ExperienceContainer, ExperienceDate, ExperienceDesc, ExperienceEmp, ExperienceTech, ExperienceTitle, Back } from "./styles/ExperienceStyles";
import { useHorizontalScroll } from "../utils/useHorizontalScroll";
import { useColorContext } from "../../context/ColorContext";

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
  const { setActiveColor } = useColorContext();
  const [isExiting, setIsExiting] = useState(false);
  
  const timeoutsRef = useRef([]);
  
  const fromTransform = s ? "translateY(450px)" : "translateY(0px)";
  const toTransform = isExiting ? "translateY(450px)" : (s ? "translateY(0px)" : "translateY(450px)");
  
  const fromOpacity = 1;
  const toOpacity = isExiting ? 0 : 1;
  
  useEffect(() => {
    setIsExiting(false);
  }, []);
  
  const handleBack = () => {
    setIsExiting(true);
    
    const timeout1 = setTimeout(() => {
      changeShow(true);
      changeTimer(0);
    }, 200);
    timeoutsRef.current.push(timeout1);
    
    const timeout2 = setTimeout(() => {
      changeShowExperience(false);
      setActiveColor(null);
    }, 300);
    timeoutsRef.current.push(timeout2);
  };
  
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timerId) => clearTimeout(timerId));
      timeoutsRef.current = [];
    };
  }, []);
  
  const cards = data.map((exp) => (
    <ExperienceCard key={exp.id}>
      <div style={{...backgroundStyle, backgroundImage: `url('${exp.image}')`,}}/>
      <ExperienceTech src={exp.techStackImage} />
      <ExperienceEmp src={exp.employerImage} />
      <ExperienceDate>{exp.dates}</ExperienceDate>
      <ExperienceTitle>{exp.title}</ExperienceTitle>
      <ExperienceDesc>{exp.description}</ExperienceDesc>
    </ExperienceCard>
  ));

  return (
    <Spring 
      fromTransform={fromTransform} 
      toTransform={toTransform}
      fromOpacity={fromOpacity}
      toOpacity={toOpacity}
      config={{ mass: 1, tension: 200, friction: isExiting ? 25 : 50 }}
    >
      <ExperienceContainer ref={scrollRef}>
        {cards}
        <Back onClick={handleBack}>back</Back>
      </ExperienceContainer>
    </Spring>
  );
};