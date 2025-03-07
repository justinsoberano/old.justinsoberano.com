import React, { useState, useRef, useEffect } from "react";
import Spring from "../utils/Spring";
import { ProjectContainer, 
         ProjectCard, 
         ProjectDesc, 
         ProjectImg, 
         ProjectTech, 
         ProjectTitle,
         ProjectBackButton
} from "./styles/ProjectStyles";
import { useHorizontalScroll } from "../utils/useHorizontalScroll";
import { useColorContext } from "../../context/ColorContext";

export const Projects = ({ s, changeShow, changeTimer, changeShowProjects, data }) => {
  const scrollRef = useHorizontalScroll();
  const { setActiveColor } = useColorContext();
  const [isExiting, setIsExiting] = useState(false);
  
  const timeoutsRef = useRef([]);
  
  const fromTransform = s ? "translateY(200px)" : "translateY(0px)";
  const toTransform = isExiting ? "translateY(300px)" : (s ? "translateY(0px)" : "translateY(300px)");
  
  const fromOpacity = 1;
  const toOpacity = isExiting ? 0 : 1;

  const handleBack = () => {
    setIsExiting(true);
    
    const timeout1 = setTimeout(() => {
      changeShow(true);
      changeTimer(0);
    }, 200);
    timeoutsRef.current.push(timeout1);
    
    const timeout2 = setTimeout(() => {
      changeShowProjects(false);
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

  const cards = data.map((project) => (
    <ProjectCard key={project.id}>
      <ProjectImg src={project.projectImage}/>
      <ProjectTech src={project.techStackImage}/>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDesc>
        {project.description}
        {project.link && (
          <a href={project.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {project.linkText}
          </a>
        )}
      </ProjectDesc>
    </ProjectCard>
  ));

  return (
    <Spring 
      fromTransform={fromTransform} 
      toTransform={toTransform}
      fromOpacity={fromOpacity}
      toOpacity={toOpacity}
      config={{ mass: 1, tension: 200, friction: isExiting ? 20 : 50 }}
    >
      <ProjectContainer ref={scrollRef}>{cards}
        <ProjectBackButton onClick={handleBack}>back</ProjectBackButton>
      </ProjectContainer>
    </Spring>
  );
};