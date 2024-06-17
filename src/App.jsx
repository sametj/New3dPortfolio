import { useState, useRef, createContext, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import ComputerDesk from "./ComputerDesk";

// export const screenContext = createContext();

import {
	CameraControls,
	Center,
	OrbitControls,
	PresentationControls,
	Stage,
} from "@react-three/drei";

function App() {
	return (
		<>
			<ambientLight intensity={1} />
			<Center>
				<Stage
					environment={"apartment"}
					intensity={1}>
					<ComputerDesk scale={0.5} />
				</Stage>
			</Center>
		</>
	);
}

export default App;
