import { useEffect } from "react";
import Background from "./components/canvas/Canvas";

declare const InstallTrigger: any;

export default function App() {

  useEffect(() => {
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