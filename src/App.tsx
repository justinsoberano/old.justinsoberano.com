import { useEffect } from "react";
import Background from "./components/render_engine/Canvas";

declare const InstallTrigger: any;

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