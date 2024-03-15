import React from "react";
import "./styles/project_stylesheet.css";
import { useSpring, a } from "@react-spring/web";

export const Projects = (props: { 
    s: boolean; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowProjects: (arg0: boolean) => void; }) => {

    let toggle: boolean = props.s;

    function CardSpring(): any {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(200px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(300px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        });
    }

    return (
        <>
            <a.div className="noselect project-container" style={{...CardSpring()}} key={Math.random()}>

                <div className="card-design-projects">
                    <img className="portfolio-image" src={require('../images/project_images/spinder-project.gif')} alt="image" />
                    <img className="portfolio-techstack" src={require('../images/project_images/spinder-techstack.png')} />
                    <p className="project-title">
                        Spinder App
                    </p>
                    <p className="project-description">
                        In a team of four, we created a music discovery app 
                        based on your top songs on Spotify. You were recommended 
                        new songs to listen to and save to your library by swiping 
                        left or right.  { }
                        <a href="https://github.com/justinsoberano/Spinder"
                            target="_blank"
                            style={{ color: "lightblue", fontWeight: "800" }}>
                            Source code here </a>
                    </p>
                </div>

                <div className="card-design-projects">
                    <img className="portfolio-image" src={require('../images/project_images/website-project.gif')} alt="image" />
                    <img className="portfolio-techstack" src={require('../images/project_images/website-techstack.png')} />
                    <p className="project-title">
                        This website!
                    </p>
                    <p className="project-description">
                        Inspired by 1980s arcades but with a modern twist.
                        Single-handedly designed and created with a mobile-first
                        approach using React and ThreeJS.
                        An excuse to have a domain of my own :D
                    </p>
                </div>

                <div className="card-design-projects">
                    <img className="portfolio-image" src={require('../images/project_images/old-website-project.gif')} />
                    <img className="portfolio-techstack" src={require('../images/project_images/old-website-techstack.png')} />
                    <p className="project-title">
                        Old website
                    </p>
                    <p className="project-description">
                        Inspired by Samsung's T-120 cassette tape cover! Created completely
                        in Javascript and ThreeJS. Doesn't work anymore :( but hey, it looks cool. { }
                        <a href="https://justinsoberano.github.io/v1-justinsoberano.com/"
                            target="_blank"
                            style={{ color: "lightblue", fontWeight: "800" }}>
                            Go check it out! </a>
                    </p>
                </div>

                <div className="card-design-projects">
                    <img className="portfolio-image" src={require('../images/project_images/chatgptwo-project.gif')} alt="image" />
                    <img className="portfolio-techstack" src={require('../images/project_images/chatgptwo-techstack.png')} />
                    <p className="project-title">
                        ChatGPTwo
                    </p>
                    <p className="project-description">
                        Created using Python and OpenAI's GPT-3.5 Turbo model, you can create your own, personal A.I. chatbot!
                        I created it so I could use it when ChatGPT was at capacity. { }
                        <a href="https://github.com/justinsoberano/ChatGPTwo/blob/main/src/chat.py"
                            target="_blank"
                            style={{ color: "lightblue", fontWeight: "800" }}>
                            Source code here. </a>
                    </p>
                </div>

                <div className="card-design-projects">
                    <img className="portfolio-image" src={require('../images/project_images/snippit-project.gif')} alt="image" />
                    <img className="portfolio-techstack" src={require('../images/project_images/snippit-techstack.png')} />
                    <p className="project-title">
                        SnippIt
                    </p>
                    <p className="project-description">
                        A simple Python terminal app that allows you to snip certain sections of a song.
                        You can also download full songs for free, but please don't get me in trouble :) { }
                        <a href="https://github.com/justinsoberano/SnippIt/blob/main/SnippIt.py"
                            target="_blank"
                            style={{ color: "lightblue", fontWeight: "800" }}>
                            Source code here. </a>
                    </p>
                </div>
                
                <div className="project-back-button" onClick={() => {
                    props.changeShow(true);
                    props.changeTimer(100)
                    props.changeShowProjects(true)
                }}>
                    <p> BACK </p>
                </div>
                
            </a.div>
        </>
    )
}
