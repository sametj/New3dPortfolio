import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import LandingPage from "./pages/Landing";

const cameraSetting = {
	fov: 55,
	position: [0, 5, 9],
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<LandingPage />

		<Canvas
			linear
			className='main_canvas'
			camera={cameraSetting}>
			<App />
		</Canvas>
	</React.StrictMode>
);
