import { Center, Stage } from "@react-three/drei";
import TeejayDesk from "./models/TeejayDesk";
import { Perf } from "r3f-perf";

function App() {
	return (
		<>
			<Perf />
			<ambientLight intensity={1} />
			<Center>
				<Stage
					castShadow
					preset={"rembrandt"}
					environment={"city"}
					intensity={1}>
					<TeejayDesk
						scale={0.1}
						position={[0, 0, 2]}
					/>
				</Stage>
			</Center>
		</>
	);
}

export default App;
