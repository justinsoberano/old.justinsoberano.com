import { useState } from "react";
import { ContentDisplay } from "./utils/Content";
import Button from "./utils/Button";
import "./styles/button_stylesheet.css";
import "./styles/card_stylesheet.css";
import "./styles/global_stylesheet.css";

export const Menu: React.FC = () => {
  const [timer, setTimer] = useState<number>(2300);
  const [showButtons, setShowButtons] = useState<boolean>(true);
  const [activeContent, setActiveContent] = useState<string | null>(null);

  const handleContentClick = (content: string) => {
    setShowButtons(false);
    setActiveContent(content);
  };

  const handleBackClick = () => {
    setShowButtons(true);
    setActiveContent(null);
  };

  return (
    <div>
        <div className="noselect button-container">
          <Button
            toggle={showButtons}
            delay={timer}
            className="button-design yellow"
            onClick={() => handleContentClick("experience")}
            text="experiences"
          />
          <Button
            toggle={showButtons}
            delay={timer + 50}
            className="button-design aqua"
            onClick={() => handleContentClick("projects")}
            text="projects"
          />
          <Button
            toggle={showButtons}
            delay={timer + 100}
            className="button-design purple"
            onClick={() => handleContentClick("involvement")}
            text="involvement"
          />
          <Button
            toggle={showButtons}
            delay={timer + 150}
            className="button-design pink"
            onClick={() => handleContentClick("contact")}
            text="contact"
          />
        </div>
        <ContentDisplay
          activeContent={activeContent}
          setActiveContent={handleBackClick}
          timer={timer}
          setTimer={setTimer}
        />
    </div>
  );
};