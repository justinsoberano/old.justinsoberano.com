import React from "react";
import { useSpring, a } from "@react-spring/web";
import "./styles/project_stylesheet.css";
import "./styles/global_stylesheet.css";

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
  const styles = useSpring({
    from: s
      ? { opacity: 1, transform: "translateY(200px)" }
      : { opacity: 1, transform: "translateY(0px)" },
    to: s
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 1, transform: "translateY(300px)" },
    delay: 0,
    config: { mass: 1, tension: 200, friction: 50 },
  });
  const cards = data.map((project) => (
    <div className="card-design-projects" key={project.id}>
      <img className="portfolio-image" src={project.projectImage} alt="portfolio-image" />
      <img className="portfolio-techstack" src={project.techStackImage} alt="tech stack" />
      <p className="project-title">{project.title}</p>
      <p className="project-description"> {project.description}
        {project.link && (
          <a href={project.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {project.linkText}
          </a>
        )}
      </p>
    </div>
  ));
  return (
    <a.div className="noselect project-container" style={styles}>
      {cards}
      <div
        className="project-back-button"
        onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowProjects(false);
        }}>
        <p> back </p>
      </div>
    </a.div>
  );
};