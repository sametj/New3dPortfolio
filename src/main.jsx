import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";

const cameraSetting = {
	fov: 55,
	position: [0, 3, 5],
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Canvas camera={cameraSetting}>
			<App />
		</Canvas>
	</React.StrictMode>
);
