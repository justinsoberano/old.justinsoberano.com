import React from "react";
import "./styles/involvement_stylesheet.css";
import involvementData from "./data/card_data/involvement_data.json";
import { useSpring, a } from "@react-spring/web";

export const Involvement = (props: { 
    s: any; 
    changeShow: (arg0: boolean) => void; 
    changeTimer: (arg0: number) => void; 
    changeShowInvolvement: (arg0: boolean) => void; }) => {
    let toggle = props.s;

    function CardSpring() {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(200px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(200px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        });
    }

    const cards = involvementData.map((item) => (
        <div className="card-design-involvement" key={item.id}>
            <img className="involvement-image" src={require(`${item.image}`)} alt="image" />
            <p className="involvement-title">
                {item.title}
            </p>
            <p className="involvement-description">
                {item.description}
                {item.link && (
                    <a href={item.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }}>
                        {item.linkText}
                    </a>
                )}
            </p>
        </div>
    ));

    return (
        <>
            <a.div className="noselect involvement-container" style={{...CardSpring()}} key={toggle}>
                {cards}
                <div className="project-back-button" onClick={() => {
                    props.changeShow(true);
                    props.changeTimer(100);
                    props.changeShowInvolvement(true);
                }}>
                    <p> BACK </p>
                </div>
            </a.div>
        </>
    );
};