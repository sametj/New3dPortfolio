import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import LandingPage from "./pages/Landing";
import { Loader } from "@react-three/drei";
import Loading from "./pages/Loading/Loading.jsx";

const cameraSetting = {
	fov: 50,
	near: 0.1,
	far: 1000,
	position: [0, 5, 9],
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Suspense fallback={<Loading />}>
			<LandingPage />
			<Canvas
				linear
				camera={cameraSetting}>
				<App />
			</Canvas>
		</Suspense>
	</>
);
