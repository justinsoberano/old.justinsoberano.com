import { useState } from "react";
import { useSpring , a } from "@react-spring/web";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Involvement } from "./Involvement";
import { Projects } from "./Projects";
import "./styles/button_stylesheet.css";
import "./styles/card_stylesheet.css"
import "./styles/global_stylesheet.css"
import { useThree } from "@react-three/fiber";

// Buttons component
export const Buttons = () => {

    // Function to create spring animations for buttons with a specified delay
    function ButtonSprings(delay: number) {
        return useSpring({
            // Animation starting point based on 'showButtons' state
            from: showButtons
                ? { opacity: 0, transform: "translateY(100px)" } // Hidden and shifted down
                : { opacity: 1, transform: "translateY(0px)" }, // Visible and at original position
            // Animation ending point based on 'showButtons' state
            to: showButtons
                ? { opacity: 1, transform: "translateY(0px)" } // Visible and at original position
                : { opacity: 0, transform: "translateY(100px)" }, // Hidden and shifted down
            delay: showButtons ? delay : 0, // Delay before animation starts
            config: showButtons
                ? { mass: 4, tension: 200, friction: 40 } // Animation configuration when buttons are shown
                : { mass: 1, tension: 200, friction: 40 }, // Animation configuration when buttons are hidden
        });
    }

    // State variables to manage visibility and animation timer
    const [timer, setTimer] = useState(2300); // Initial timer state
    const [showButtons, setButtons] = useState(true); // State to show/hide buttons
    const [showExperience, setExperience] = useState(true); // State to show/hide Experience section
    const [showProjects, setProjects] = useState(true); // State to show/hide Projects section
    const [showInvolvement, setInvolvement] = useState(true); // State to show/hide Involvement section
    const [showContact, setContact] = useState(true); // State to show/hide Contact section

    return(
        <div>
            <a.div className="noselect button-container" style={{ ...ButtonSprings(timer)}}>

                <a.div className="button-design yellow" 
                       onClick={() => {setButtons(!showButtons); setExperience(!showExperience);} } 
                       style={{...ButtonSprings(timer + 50)}}>
                    <span className="button-text">experiences</span>
                </a.div>
                
                <a.div className="button-design aqua"
                       onClick={() => { setButtons(!showButtons); setProjects(!showProjects); }} 
                       style={{ ...ButtonSprings(timer + 100) }}>
                    <span className="button-text">projects</span>
                </a.div>

                <a.div className="button-design purple"
                       onClick={() => { setButtons(!showButtons); setInvolvement(!showInvolvement); }}    
                       style={{ ...ButtonSprings(timer + 150) }}>
                    <span className="button-text">involvement</span>
                </a.div>

                <a.div className="button-design pink"
                       onClick={() => { setButtons(!showButtons); setContact(!showContact); }}  
                       style={{ ...ButtonSprings(timer + 200) }}>
                    <span className="button-text">contact</span>
                </a.div>
            </a.div>
            
            {/* Experience component with props to manage visibility and timer */}
            <Experience
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowExperience={showExperience => setExperience(showExperience)}
                s={showExperience}
            />

            {/* Projects component with props to manage visibility and timer */}
            <Projects
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowProjects={showProjects => setProjects(showProjects)}
                s={showProjects}
            />

            {/* Involvement component with props to manage visibility and timer */}
            <Involvement
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowInvolvement={showInvolvement => setInvolvement(showInvolvement)}
                s={showInvolvement}
            />

            {/* Contact component with props to manage visibility and timer */}
            <Contact
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowContact={showContact => setContact(showContact)}
                s={showContact}
            />

        </div>

    );
}