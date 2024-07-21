import React from "react";
import Spring from "../utils/Spring";
import "../styles/card_stylesheet.css";
import "../styles/global_stylesheet.css";

interface ExperienceData {
  id: number;
  image: string;
  techStackImage: string;
  employerImage: string;
  dates: string;
  title: string;
  description: string;
}

type ExperienceProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowExperience: (show: boolean) => void;
  data: ExperienceData[];
};

export const Experience: React.FC<ExperienceProps> = ({ s, changeShow, changeTimer, changeShowExperience, data }) => {
  const fromTransform = s ? "translateY(450px)" : "translateY(0px)";
  const toTransform = s ? "translateY(0px)" : "translateY(450px)";

  const cards = data.map((exp) => (
    <div className="card-design" key={exp.id}>
      <div
        style={{
          borderRadius: "10px 10px 0 0",
          width: "325px",
          height: "150px",
          backgroundImage: `url('${exp.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
        }}
      />
      <img className="tech-stack" src={exp.techStackImage} alt={"techstack"} />
      <img className="employer" src={exp.employerImage} alt={"employer"} />
      <p className="job-dates">{exp.dates}</p>
      <p className="job-title">{exp.title}</p>
      <p className="job-description">{exp.description}</p>
    </div>
  ));

  return (
    <Spring fromTransform={fromTransform} toTransform={toTransform}>
      <div className="noselect experience-container">
        {cards}
        <div
          className="card-back-button"
          onClick={() => {
            changeShow(true);
            changeTimer(100);
            changeShowExperience(false);
          }}
        >
          <p> back </p>
        </div>
      </div>
    </Spring>
  );
};