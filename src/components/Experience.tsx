import React from 'react';
import { useSpring, a } from '@react-spring/web';
import './styles/card_stylesheet.css';
import experienceData from "./data/card_data/experiences_data.json";

export const Experience = (props: { 
    s: any; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowExperience: (arg0: boolean) => void; }) => {

    let toggle = props.s;

    function CardSpring() {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(450px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(450px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        });
    }

    return (
        <>
            <a.div className="container noselect" style={{ ...CardSpring() }} key={toggle}>

                {experienceData.map((exp) => (

                    <div className="card-design" key={exp.id}>
                        <div className={exp.cssImageClass}>
                            <img className="background-image" style={{ opacity: "0" }} src="https://picsum.photos/325/150" alt="Background" />
                        </div>
                            <img className="tech-stack" src={require(`${exp.techStackImage}`)} alt="Tech Stack" />
                            <img className="employer" src={require(`${exp.employerImage}`)} alt="Employer" />
                        <p className="job-dates">{exp.dates}</p>
                        <p className="job-title">{exp.title}</p>
                        <p className="job-description">{exp.description}</p>
                    </div>

                ))}

                <div className="card-back-button" onClick={() => {
                    props.changeShow(true);
                    props.changeTimer(100);
                    props.changeShowExperience(true);
                }}>
                    <p> BACK </p>
                </div>
                
            </a.div>
        </>
    );
};
