import Background from "./components/canvas/Canvas";
import { ColorProvider } from "./context/ColorContext";

export default function App() {
  return (
    <ColorProvider>
      <Background />
    </ColorProvider>
  );
}