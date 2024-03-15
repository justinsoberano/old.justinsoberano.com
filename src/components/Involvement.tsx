import React from "react";
import "./styles/involvement_stylesheet.css";
import { useSpring, a } from "@react-spring/web";

export const Involvement = (props: { 
    s: any; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowInvolvement: (arg0: boolean) => void; }) => {

    let toggle = props.s

    function CardSpring() {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(200px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(200px)" },
            delay: 0,
            config: { mass: 1, tension : 200, friction: 50 }
        })
    }

    return (
        <>
            <a.div className="noselect involvement-container" style={{...CardSpring()}} key={toggle}>

                <div className="card-design-involvement">
                    <img className="involvement-image" src={require('../images/involvement_images/iowa_state.png')} alt="image" />
                    <p className="involvement-title">
                        Peer Mentor
                    </p>
                    <p className="involvement-description">
                        I am currently a peer mentor for first-year 
                        software engineering students. I help them by being 
                        a resource for them to ask questions and get help. 
                        <a href="https://se.iastate.edu/meet-the-peer-mentors/"
                            target="_blank"
                            style={{ color: "lightblue", fontWeight: "800" }}>
                            Meet the peer mentors. </a>
                    </p>
                </div>

                <div className="card-design-involvement">
                <img className="involvement-image" src={require('../images/involvement_images/iowa_state.png')} alt="image" />
                    <p className="project-title">
                        Undergraduate TA
                    </p>
                    <p className="project-description">
                        I was a Teaching Assistant for a programming course in taught Java. I led weekly labs and office hours
                        for students to get help with their assignments and projects.
                    </p>
                </div>

                <div className="card-design-involvement">
                <img className="involvement-image" src={require('../images/involvement_images/hack_club.png')} alt="image" />
                    <p className="project-title">
                        Hack Club
                    </p>
                    <p className="project-description">
                        I was part of the Hack Club executive team for over a year. I helped
                        organize hackathons and workshops for students to learn how to code. 
                        <a href="https://www.stuorg.iastate.edu/hack"
                            target="_blank"
                            style={{ color: "lightblue", fontWeight: "800" }}>
                            Official club page. </a>
                    </p>
                </div>

                <div className="card-design-involvement">
                    <img className="involvement-image" src={require('../images/involvement_images/devsdogood.png')} alt="image" />
                    <p className="project-title">
                        DevsDoGood
                    </p>
                    <p className="project-description">
                        I was part of a team for DevsDoGood to create 
                        a website for the non-profit West Des Moines Community 
                        School Alumni Association.
                        <a href="https://www.devsdogood.org/"
                            target="_blank"
                            style={{ color: "lightblue", fontWeight: "800" }}>
                            Check out DevsDoGood! </a>
                    </p>
                </div>

                <div className="project-back-button" onClick={() => {
                    props.changeShow(true);
                    props.changeTimer(100)
                    props.changeShowInvolvement(true)
                }}>
                    <p> BACK </p>
                </div>
            </a.div>
        </>
    )
}