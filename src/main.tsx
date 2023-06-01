import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import NavigationBar from "./NavigationBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<NavigationBar />
	</React.StrictMode>
);
