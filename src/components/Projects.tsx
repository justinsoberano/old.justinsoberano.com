import React from "react";
import { useSpring, a } from "@react-spring/web";
import "./styles/project_stylesheet.css";
import "./styles/global_stylesheet.css";

/**
 * ProjectData structure
 */
interface ProjectData {
    id: number; // Identifier for the project
    projectImage: string; // URL of the project image
    techStackImage: string; // URL of the tech stack image 
    title: string; // Title of the project
    description: string; // Description of the project
    link: string; // URL to the project or related resources
    linkText: string; // Text for the project link
}

// Projects component accepting props
export const Projects = ({s, changeShow, changeTimer, changeShowProjects}: { 
  
    s: any; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowProjects: (arg0: boolean) => void; }) => {

    // State to hold the fetched project data, initially an empty array
    const [projectsData, setProjectsData] = React.useState<ProjectData[]>([]);

    // Animation styles using useSpring hook
    const styles = useSpring({
            // animation starting point (when not in focus)
			from: !s
				? { opacity: 1, transform: "translateY(200px)" }
				: { opacity: 0, transform: "translateY(0px)" },
            // animation end point (when in focus)
			to: !s
				? { opacity: 1, transform: "translateY(0px)" }
				: { opacity: 0, transform: "translateY(300px)" },
			delay: 0,
			config: { mass: 1, tension: 200, friction: 50 },
		});
    
    // Hook to fetch project data once the component mounts
    React.useEffect(() => {
        // Fetching project data from GitHub
        fetch('https://raw.githubusercontent.com/justinsoberano/portfolio-data/main/card_data/projects_data.json')
            .then((response) => {
                // Check if response is OK
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                // Parse response data as JSON
                return response.json();
            })
            .then((data) => {
                // Set the fetched data to projectData state
                setProjectsData(data as ProjectData[]);
            })
    }, []); // Empty dependency array for a one-time only run

    // Map through the projectData array to generate project cards
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
        {/* Animated div container for the project cards*/}
        <a.div className="noselect project-container" style={styles} key={s}>
            {cards}
                {/* Back button div */}
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