import React from "react";
import "./styles/loading_stylesheet.css"

export const LoadingScreen = ({started, onStarted}) => {
    return (
        <>
            <div className={ started ? "loadingScreen--started" : "loadingScreen"} style={{
                position: "absolute",
                top: "0%",
            }}>
                <p className={"top-text"}>Ready Player One?</p>
                <p className={"ready-text"} onClick={onStarted}> {'>'} INSERT COIN {'<'}</p>
                <p style={{
                    position: "absolute",
                    top: "70%",
                    color: "yellow",
                    fontSize: "15px",
                    fontFamily: "Minecraft",
                    fontStyle: "normal",
                    letterSpacing: "2px",
                    fontWeight: "bold",

                }}> !! Work in progress !! </p>
            </div>
        </>
    );
}