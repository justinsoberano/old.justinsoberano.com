import { useState } from "react";
import { ContentDisplay } from "./utils/Content";
import { ButtonContainer } from "./content/styles/GlobalStyles";
import { ContactButton, 
         ExperiencesButton, 
         InvolvementButton, 
         ProjectsButton 
} from "./content/styles/MenuStyles";

export const Menu = () => {
  const [timer, setTimer] = useState(2300);
  const [showButtons, setShowButtons] = useState(true);
  const [content, setContent] = useState(null);
  
  const handleContent = (content) => {
    setShowButtons(false);
    setContent(content);
  };
  const handleBack = () => {
    setShowButtons(true);
    setContent(null);
  };

  return (
    <>
      <ButtonContainer>
        <ExperiencesButton toggle={showButtons} delay={timer} onClick={() => handleContent("experience")} text="experiences"/>
        <ProjectsButton toggle={showButtons} delay={timer + 50} onClick={() => handleContent("projects")} text="projects"/>
        <InvolvementButton toggle={showButtons} delay={timer + 100} onClick={() => handleContent("involvement")} text="involvement"/>
        <ContactButton toggle={showButtons} delay={timer + 150} onClick={() => handleContent("contact")} text="contact"/>
      </ButtonContainer>
      <ContentDisplay activeContent={content} setActiveContent={handleBack} timer={timer} setTimer={setTimer}
      />
    </>
  );
};