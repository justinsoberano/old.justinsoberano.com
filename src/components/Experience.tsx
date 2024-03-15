import React from 'react';
import { useSpring, a } from '@react-spring/web';
import './styles/card_stylesheet.css';

export const Experience = (props: { 
    s: any; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowExperience: (arg0: boolean) => void; }) => {

    let toggle = props.s

    function CardSpring() {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(450px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(450px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        })
    }

    return (
        <>
            <a.div className="container noselect" style={{ ...CardSpring() }} key={toggle}>
                
                <div className="card-design">
                    <div className="computer-image">
                        <img style={{ opacity: "0" }} src="https://picsum.photos/325/150" alt="Picsum Filler" />
                    </div>
                    <img className="tech-stack" src={require('../images/experience_images/Tech_2.png')} alt="Tech Stack 2" />
                    <img className="employer" src={require('../images/experience_images/nasa_logo_white.png')} alt="NASA Logo" />
                    <p className="job-dates"> JUN '23 - AUG '23 </p>
                    <p className="job-title">Software Engineering Intern - AI/ML</p>
                    <p className="job-description">Currently under an NDA for this project. I unfortunately cannot disclose the exact 
                    details on the work that I did for this internship in the public domain but I am allowed to speak on it privately! Contact me for more info!</p>
                </div>


                <div className="card-design">
                    <div className="mars-image">
                        <img style={{ opacity: "0" }} src="https://picsum.photos/325/150" alt="Picsum Filler" />
                    </div>
                    <img className="tech-stack" src={require('../images/experience_images/Tech_1.png')} alt="Tech Stack 1" />
                    <img className="employer" src={require('../images/experience_images/nasa_logo_white.png')} alt="NASA Logo" />
                    <p className="job-dates"> AUG '22 - DEC '22 </p>
                    <p className="job-title">Software Engineering Intern - Digital Twins</p>
                    <p className="job-description">In a team of four, we developed digital twins
                        for future space missions. These digital twins will be used to train
                        astronauts for future Artemis missions. Currently being used by 
                        <a href="https://www.nasa.gov/chapea" target="_blank" rel="noreferrer"
                        style={{color: "lightblue",
                                fontWeight: "800"
                            }}> NASA's CHAPEA</a> group!</p>
                </div>

                <div className="card-design">
                    <div className="durham-image">
                        <img style={{ opacity: "0" }} src="https://picsum.photos/325/150" alt="Picsum Filler" />
                    </div>
                    <img className="tech-stack" src={require('../images/experience_images/Tech_3.png')} alt="Tech Stack 3" />
                    <img className="employer" src={require('../images/experience_images/isu.png')} alt="ISU" />
                    <p className="job-dates"> JAN '22 - MAY '22 </p>
                    <p className="job-title">Technical Assistant</p>
                    <p className="job-description">Worked with a team of nine to monitor and administer administration level
                        devices all throughout campus. Helped order IT equipment for various departments when needed. </p>
                </div>

                <div className="card-back-button" onClick={() => {
                    props.changeShow(true);
                    props.changeTimer(100)
                    props.changeShowExperience(true)
                }}>
                    <p> BACK </p>
                </div>

            </a.div>
        </>
    )
}
