import { Center, Stage } from "@react-three/drei";
import AdrianDesk from "./models/AdriansDesk";
import TeejaysDesk from "./models/TeejaysDesk";

function App() {
	return (
		<>
			<ambientLight intensity={1} />
			<Center>
				<Stage
					environment={"apartment"}
					intensity={1}>
					{/* <AdrianDesk scale={1} /> */}
					<TeejaysDesk scale={0.2} />
				</Stage>
			</Center>
		</>
	);
}

export default App;
