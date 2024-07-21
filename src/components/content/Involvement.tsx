import React from "react";
import Spring from "../utils/Spring";
import "../styles/involvement_stylesheet.css";
import "../styles/global_stylesheet.css";

interface InvolvementData {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

type InvolvementProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowInvolvement: (show: boolean) => void;
  data: InvolvementData[];
};

export const Involvement: React.FC<InvolvementProps> = ({ s, changeShow, changeTimer, changeShowInvolvement, data }) => {
  const fromTransform = s ? "translateY(200px)" : "translateY(0px)";
  const toTransform = s ? "translateY(0px)" : "translateY(200px)";

  const cards = data.map((item) => (
    <div className="card-design-involvement" key={item.id}>
      <img className="involvement-image" src={item.image} alt="involvement-image" />
      <p className="involvement-title">{item.title}</p>
      <p className="involvement-description">
        {item.description}
        {item.link && (
          <a href={item.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {item.linkText}
          </a>
        )}
      </p>
    </div>
  ));

  return (
    <Spring fromTransform={fromTransform} toTransform={toTransform}>
      <div className="noselect involvement-container"> {cards}
        <div className="project-back-button"
          onClick={() => {
            changeShow(true);
            changeTimer(100);
            changeShowInvolvement(false);
          }}>
          <p> back </p>
        </div>
      </div>
    </Spring>
  );
};