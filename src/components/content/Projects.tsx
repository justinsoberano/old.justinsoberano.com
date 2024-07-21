import React from "react";
import Spring from "../utils/Spring";
import "../styles/project_stylesheet.css";
import "../styles/global_stylesheet.css";

interface ProjectData {
  id: number;
  projectImage: string;
  techStackImage: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

type ProjectsProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowProjects: (show: boolean) => void;
  data: ProjectData[];
};

export const Projects: React.FC<ProjectsProps> = ({ s, changeShow, changeTimer, changeShowProjects, data }) => {
  const fromTransform = s ? "translateY(200px)" : "translateY(0px)";
  const toTransform = s ? "translateY(0px)" : "translateY(300px)";

  const cards = data.map((project) => (
    <div className="card-design-projects" key={project.id}>
      <img className="portfolio-image" src={project.projectImage} alt="portfolio-image" />
      <img className="portfolio-techstack" src={project.techStackImage} alt="tech stack" />
      <p className="project-title">{project.title}</p>
      <p className="project-description">
        {project.description}
        {project.link && (
          <a href={project.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {project.linkText}
          </a>
        )}
      </p>
    </div>
  ));

  return (
    <Spring fromTransform={fromTransform} toTransform={toTransform}>
      <div className="noselect project-container">{cards}
        <div className="project-back-button"
          onClick={() => {
            changeShow(true);
            changeTimer(100);
            changeShowProjects(false);
          }}>
          <p> back </p>
        </div>
      </div>
    </Spring>
  );
};