import React from "react";
import Button from "../utils/Button";
import "./styles/button_stylesheet.css";
import "./styles/contact_stylesheet.css";
import "./styles/global_stylesheet.css";

type ContactProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowContact: (show: boolean) => void;
};

export const Contact: React.FC<ContactProps> = ({s: toggle, changeShow, changeTimer, changeShowContact}) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="noselect button-container">
      <Button toggle={toggle} delay={0} className="button-design linkedin-blue"
        onClick={() => openInNewTab("https://www.linkedin.com/in/justinsoberano/")}
        text="linkedin" />
      <Button toggle={toggle} delay={50} className="button-design github-gray"
        onClick={() => openInNewTab("https://github.com/justinsoberano")}
        text="github"/>
      <Button toggle={toggle} delay={100} className="button-design light-purple"
        onClick={() => openInNewTab("https://data.justinsoberano.com/resume/resume.pdf")}
        text="resume" />
      <Button toggle={toggle} delay={150} className="button-design rainbow"
        onClick={() => openInNewTab("mailto:me@justinsoberano.com")}
        text="email me!"/>
      <Button toggle={toggle} delay={175} className="contact-back-button"
        onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowContact(false);
        }}
        text="back"/>
    </div>
  );
};