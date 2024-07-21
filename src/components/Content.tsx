import { useState, useEffect } from "react";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Involvement } from "./Involvement";
import { Projects } from "./Projects";

type ContentDisplayProps = {
  activeContent: string | null;
  setActiveContent: (content: string | null) => void;
  timer: number;
  setTimer: (timer: number) => void;
};

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ activeContent, setActiveContent, timer, setTimer }) => {
  const [experienceData, setExperienceData] = useState<any[]>([]);
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [involvementData, setInvolvementData] = useState<any[]>([]);
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
        <Experience data={experienceData}
          changeShow={(show: boolean) => setActiveContent(show ? "experience" : null)}
          changeTimer={setTimer}
          changeShowExperience={(show: boolean) => setActiveContent(show ? "experience" : null)}
          s={activeContent === "experience"}/>
      )}
      {activeContent === "projects" && (
        <Projects data={projectsData}
          changeShow={(show: boolean) => setActiveContent(show ? "projects" : null)}
          changeTimer={setTimer}
          changeShowProjects={(show: boolean) => setActiveContent(show ? "projects" : null)}
          s={activeContent === "projects"}/>
      )}
      {activeContent === "involvement" && (
        <Involvement data={involvementData}
          changeShow={(show: boolean) => setActiveContent(show ? "involvement" : null)}
          changeTimer={setTimer}
          changeShowInvolvement={(show: boolean) => setActiveContent(show ? "involvement" : null)}
          s={activeContent === "involvement"}/>
      )}
      {activeContent === "contact" && (
        <Contact
          changeShow={(show: boolean) => setActiveContent(show ? "contact" : null)}
          changeTimer={setTimer}
          changeShowContact={(show: boolean) => setActiveContent(show ? "contact" : null)}
          s={activeContent === "contact"}/>
      )}
    </>
  );
};