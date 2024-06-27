import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import "./index.css";

const cameraSetting = {
	fov: 35,
	position: [1, 5, 9],
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Canvas
			linear
			className='main_canvas'
			dpr={[1, 2]}
			camera={cameraSetting}
			gl={{ antialias: true }}>
			<Stars
				radius={100}
				depth={20}
				count={5000}
				factor={4}
				saturation={2}
				fade
				speed={2}
			/>
			<fog
				attach='fog'
				args={["#A594F9", 10, 20]}
			/>
			<color
				attach='background'
				args={["#A594F9"]}
			/>
			<App />
			<mesh
				rotation-x={-Math.PI / 2}
				position-y={-2}>
				<planeGeometry args={[100, 40]} />
				<meshBasicMaterial color='#F3D9B1' />
			</mesh>
		</Canvas>
	</React.StrictMode>
);
