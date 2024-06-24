import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";

const cameraSetting = {
  fov: 75,
  position: [0, 2, 5],
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas dpr={[1, 2]} camera={cameraSetting} gl={{ antialias: true }}>
      <App />
    </Canvas>
  </React.StrictMode>
);
