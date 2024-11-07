import { useState, useEffect } from "react";
import { Experience } from "../content/Experience";
import { Contact } from "../content/Contact";
import { Involvement } from "../content/Involvement";
import { Projects } from "../content/Projects";

export const ContentDisplay = ({ activeContent, setActiveContent, timer, setTimer }) => {
  const [experienceData, setExperienceData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [involvementData, setInvolvementData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const experience = await fetch("https://data.justinsoberano.com/info/experiences.json").then((res) => res.json());
      const projects = await fetch("https://data.justinsoberano.com/info/projects.json").then((res) => res.json());
      const involvement = await fetch("https://data.justinsoberano.com/info/involvement.json").then((res) => res.json());
      setExperienceData(experience);
      setProjectsData(projects);
      setInvolvementData(involvement);
      setTimer(0);
    }
    fetchData();
  }, [setTimer]);

  return (
    <>
      {activeContent === "experience" && (
        <Experience
          data={experienceData}
          changeShow={(show) => setActiveContent(show ? "experience" : null)}
          changeTimer={setTimer}
          changeShowExperience={(show) => setActiveContent(show ? "experience" : null)}
          s={activeContent === "experience"}
        />
      )}
      {activeContent === "projects" && (
        <Projects
          data={projectsData}
          changeShow={(show) => setActiveContent(show ? "projects" : null)}
          changeTimer={setTimer}
          changeShowProjects={(show) => setActiveContent(show ? "projects" : null)}
          s={activeContent === "projects"}
        />
      )}
      {activeContent === "involvement" && (
        <Involvement
          data={involvementData}
          changeShow={(show) => setActiveContent(show ? "involvement" : null)}
          changeTimer={setTimer}
          changeShowInvolvement={(show) => setActiveContent(show ? "involvement" : null)}
          s={activeContent === "involvement"}
        />
      )}
      {activeContent === "contact" && (
        <Contact
          changeShow={(show) => setActiveContent(show ? "contact" : null)}
          changeTimer={setTimer}
          changeShowContact={(show) => setActiveContent(show ? "contact" : null)}
          s={activeContent === "contact"}
        />
      )}
    </>
  );
};
