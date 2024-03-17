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
  }, []);

  return (
    <>
      <Background />
    </>
  );
}