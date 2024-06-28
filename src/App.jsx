import { Center, Stage } from "@react-three/drei";
import TeejayDesk from "./models/TeejayDesk";
import { Perf } from "r3f-perf";
import { Stars, MeshReflectorMaterial } from "@react-three/drei";

function App() {
	return (
		<>
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

			<Center>
				<Stage
					castShadow
					preset={"portrait"}
					environment={"city"}
					intensity={1}>
					<TeejayDesk
						scale={0.1}
						position={[0, 0, 2]}
					/>
				</Stage>
			</Center>
			<mesh
				rotation-x={-Math.PI / 2}
				position-y={-2}>
				<planeGeometry args={[100, 40]} />
				{/* <meshBasicMaterial color='#F3D9B1' /> */}
				<MeshReflectorMaterial
					blur={[300, 100]}
					resolution={2048}
					mixBlur={1}
					mixStrength={80}
					roughness={1}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color='#050505'
					metalness={0.5}
				/>
			</mesh>
		</>
	);
}

export default App;
