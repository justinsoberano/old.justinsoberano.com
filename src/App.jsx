import React, { Suspense, useEffect, useState } from "react";
import Background from "./components/render_engine/Canvas.tsx";

/* Remove styles whenever finished with website */

var styles = {
  div: {
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  h2: {
    background: "rgb(255,200,255)",
    padding: '10px 20px',
    borderRadius: '10px',
    fontWeight: 'bold',
    border: '5px solid black',
  },
  p: {
    fontFamily: 'Monospace',
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'white',
  }
}

export default function App() {

  useEffect(() => {
    /* Checks for Firefox */
    const isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
      alert("This website is not optimized for Firefox. Currently working on a fix :)")
    }
    
    /* Checks for Safari on iPad */
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    const isiPad = /iPad|Macintosh/.test(platform) && navigator.maxTouchPoints > 1;

    if (isSafari && isiPad) {
      alert("This website is not optimized for Safari on iPad. Currently working on a fix :)")
    }

  }, []);

  return (
    <>
      <Background />
    </>
  );
}