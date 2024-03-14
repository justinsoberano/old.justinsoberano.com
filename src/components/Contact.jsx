import React from 'react';
import { useSpring, a } from '@react-spring/web';
import './styles/button_stylesheet.css';
import './styles/contact_stylesheet.css';
import PDF from "../resume/resume.pdf"

export const Contact = props => {

    let toggle = props.s

    function ContactSpring() {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(450px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(450px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        })
    }

    function openInNewTab(url) {
        window.open(url, '_blank');
    }

    return (
        <div>

            <a.div className="contact-flex-container" style={{ ...ContactSpring() }}>

                <a.div className="button-design noselect linkedin-blue"
                    onClick={() => openInNewTab("https://www.linkedin.com/in/justinsoberano/")}
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">linkedin</span>
                </a.div>

                <a.div className="button-design noselect github-gray"
                    onClick={() => openInNewTab("https://github.com/justinsoberano")}
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">github</span>
                </a.div>

                <a.div className="button-design noselect light-purple" 
                    onClick={() => openInNewTab(PDF)}
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">resume</span>
                </a.div>

                <a.div className="button-design noselect rainbow"
                    onClick={() => openInNewTab("mailto:me@justinsoberano.com")}
                    style={{ ...ContactSpring() }}>

                    <span className="button-text">email me!</span>
                </a.div>

                <a.div className="contact-back-button"
                    onClick={() => {
                        props.changeShow(true);
                        props.changeTimer(100)
                        props.changeShowContact(true)
                    }}
                    style={{ ...ContactSpring() }}>
                    <span className="contact-button-text">back</span>
                </a.div>

            </a.div>
        </div>
    )
}
