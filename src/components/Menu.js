import { useState } from "react";
import { ContentDisplay } from "./utils/Content";
import { ButtonContainer } from "./content/styles/GlobalStyles";
import { ContactButton, 
         ExperiencesButton, 
         InvolvementButton, 
         ProjectsButton 
} from "./content/styles/MenuStyles";
import { useColorContext } from "../context/ColorContext";
import { withHoverColor } from "./utils/withHoverColor";

// Apply the HOC to each button
const HoverExperiencesButton = withHoverColor(ExperiencesButton);
const HoverProjectsButton = withHoverColor(ProjectsButton);
const HoverInvolvementButton = withHoverColor(InvolvementButton);
const HoverContactButton = withHoverColor(ContactButton);

export const Menu = () => {
  const [timer, setTimer] = useState(2300);
  const [showButtons, setShowButtons] = useState(true);
  const [content, setContent] = useState(null);
  const { setActiveColor } = useColorContext();
  
  const handleContent = (content, color) => {
    setShowButtons(false);
    setContent(content);
    setActiveColor(color);
  };
  
  const handleBack = () => {
    setShowButtons(true);
    setContent(null);
    setActiveColor(null);
  };

  // Define colors
  const experienceColor = "#FFFF00";
  const projectsColor = "#00FFFF";
  const involvementColor = "#A16AE8";
  const contactColor = "#EE47CF";

  return (
    <>
      <ButtonContainer>
        <HoverExperiencesButton 
          toggle={showButtons} 
          delay={timer} 
          onClick={() => handleContent("experience", experienceColor)}
          text="experiences"
          color={experienceColor}
        />
        <HoverProjectsButton 
          toggle={showButtons} 
          delay={timer + 50} 
          onClick={() => handleContent("projects", projectsColor)}
          text="projects"
          color={projectsColor}
        />
        <HoverInvolvementButton 
          toggle={showButtons} 
          delay={timer + 100} 
          onClick={() => handleContent("involvement", involvementColor)}
          text="involvement"
          color={involvementColor}
        />
        <HoverContactButton 
          toggle={showButtons} 
          delay={timer + 150} 
          onClick={() => handleContent("contact", contactColor)}
          text="contact"
          color={contactColor}
        />
      </ButtonContainer>
      <ContentDisplay 
        activeContent={content} 
        setActiveContent={handleBack} 
        timer={timer} 
        setTimer={setTimer}
      />
    </>
  );
};