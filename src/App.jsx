import { useState, useRef, createContext, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import ComputerDesk from "./ComputerDesk";

import { Center, Stage } from "@react-three/drei";
import AdrianDesk from "./AdriansDesk";

function App() {
	const { viewPort } = useThree();

	return (
		<>
			<ambientLight intensity={1} />
			<Center>
				<Stage
					environment={"apartment"}
					intensity={1}>
					{/* <ComputerDesk scale={0.8} /> */}
					<AdrianDesk />
				</Stage>
			</Center>
		</>
	);
}

export default App;
