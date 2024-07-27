import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./components/content/styles/GlobalStyles";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<div style={{ width: "100svw", height: "100svh"}}>
			<GlobalStyles/>
			<App/>
		</div>
	</React.StrictMode>
);
