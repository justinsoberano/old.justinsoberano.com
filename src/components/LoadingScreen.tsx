import React from "react";
import "./styles/loading_stylesheet.css"

// Define the LoadingScreen as a React Functional Component
export const LoadingScreen: React.FC<{ 
    started: boolean; // Indicates if loading has started 
    onStarted: () => void }> = ({ started, onStarted }) => { // Prop for the function to call when loading starts
    return (
        <>
            <div className={ started ? "loadingScreen--started" : "loadingScreen"} style={{
                position: "absolute",
                top: "0%",
            }}>
                <p className={"top-text"}> Ready Player One? </p>
                <p className={"ready-text"} onClick={onStarted}> {'>'} INSERT COIN {'<'}</p>
                <p style={{
                    position: "absolute",
                    top: "95%",
                    left: "1%",
                    fontSize: "15px",
                    color: "white",
                    fontFamily: "Minecraft",
                    fontStyle: "normal",
                    letterSpacing: "2px",
                }}>
                <a href="https://github.com/justinsoberano/justinsoberano.com"
                target="_blank" style={{color: "white", cursor: "pointer"}}>
                v2.4.3 </a> 
                
                </p>
            </div>
        </>
    );
}