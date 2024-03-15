import React from "react";
import "./styles/project_stylesheet.css";
import { useSpring, a } from "@react-spring/web";
import projectsData from "./data/card_data/projects_data.json";

export const Projects = (props: { 
    s: any; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowProjects: (arg0: boolean) => void; }) => {
  let toggle = props.s;

  function CardSpring() {
    return useSpring({
      from: !toggle ? { opacity: 1, transform: "translateY(200px)" } : { opacity: 0, transform: "translateY(0px)" },
      to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(300px)" },
      delay: 0,
      config: { mass: 1, tension: 200, friction: 50 }
    });
  }

  return (
    <>
      <a.div className="noselect project-container" style={{...CardSpring()}} key={Math.random()}>
        {projectsData.map((project) => (
          <div className="card-design-projects" key={project.id}>
            <img className="portfolio-image" src={require(`${project.projectImage}`)} alt="image" />
            <img className="portfolio-techstack" src={require(`${project.techStackImage}`)} alt="tech stack" />
            <p className="project-title">{project.title}</p>
            <p className="project-description">
              {project.description}
              {project.link && (
                <a href={project.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }}>
                  {project.linkText}
                </a>
              )}
            </p>
          </div>
        ))}
        <div className="project-back-button" onClick={() => {
          props.changeShow(true);
          props.changeTimer(100);
          props.changeShowProjects(true);
        }}>
          <p> BACK </p>
        </div>
      </a.div>
    </>
  );
};