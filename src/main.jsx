import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import "./styles/mainCss.jsx";

const cameraSetting = {
  fov: 30,
  position: [0, 1, 15],
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas dpr={[1, 2]} camera={cameraSetting} gl={{ antialias: true }} linear>
      <App />
    </Canvas>
  </React.StrictMode>
);
