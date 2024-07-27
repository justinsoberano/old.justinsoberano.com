import React from "react";
import { BackButton,  
         ContactMeButton, 
         GithubButton, 
         LinkedInButton, 
         ResumeButton 
} from "./styles/ContactStyles";
import { ButtonContainer } from "./styles/GlobalStyles";

const linkedIn = "https://www.linkedin.com/in/justinsoberano/";
const github = "https://github.com/justinsoberano";
const resume = "https://data.justinsoberano.com/resume/resume.pdf";
const email = "mailto:me@justinsoberano.com";

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
    <ButtonContainer>
      <LinkedInButton toggle={toggle} delay={0} onClick={() => openInNewTab(linkedIn)} text="linkedin" />
      <GithubButton toggle={toggle} delay={50} onClick={() => openInNewTab(github)} text="github"/>
      <ResumeButton toggle={toggle} delay={100} onClick={() => openInNewTab(resume)} text="resume" />
      <ContactMeButton toggle={toggle} delay={150} onClick={() => openInNewTab(email)} text="email me!"/>
      <BackButton toggle={toggle} delay={175} onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowContact(false);
        }}
        text="back"/>
    </ButtonContainer>
  );
};