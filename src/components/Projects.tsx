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

export const Projects = ({s, changeShow, changeTimer, changeShowProjects}: { 
  
    s: any; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowProjects: (arg0: boolean) => void; }) => {

    const [projectsData, setProjectsData] = React.useState<ProjectData[]>([]);

    const styles = useSpring({
			from: !s
				? { opacity: 1, transform: "translateY(200px)" }
				: { opacity: 0, transform: "translateY(0px)" },
			to: !s
				? { opacity: 1, transform: "translateY(0px)" }
				: { opacity: 0, transform: "translateY(300px)" },
			delay: 0,
			config: { mass: 1, tension: 200, friction: 50 },
		});

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/justinsoberano/portfolio-data/main/card_data/projects_data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then((data) => {
                setProjectsData(data as ProjectData[]);
            })
    }, []);

    const cards = projectsData.map((project) => (
        <div className="card-design-projects" key={project.id}>
            <img className="portfolio-image" src={project.projectImage} alt="image" />
            <img className="portfolio-techstack" src={project.techStackImage} alt="tech stack" />
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
    ));

  return (
    <>
        <a.div className="noselect project-container" style={styles} key={s}>
            {cards}
                <div className="project-back-button" onClick={() => {
                    changeShow(true);
                    changeTimer(100);
                    changeShowProjects(true);
              }}>
              <p> back </p>
            </div>
        </a.div>
    </>
  );
};