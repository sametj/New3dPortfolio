import { Center, Stage } from "@react-three/drei";
import { Stars, MeshReflectorMaterial } from "@react-three/drei";
import TeejaysRoom from "./models/TeejaysRoom";

function App() {
	return (
		<>
			<Stars
				radius={100}
				depth={50}
				count={5000}
				factor={4}
				saturation={0}
				fade
			/>

			<Center>
				<Stage
					center={false}
					adjustCamera={false}
					preset={"portrait"}
					environment={"city"}
					intensity={1}>
					<TeejaysRoom
						rotation-y={-Math.PI}
						position={[1, 2, 0]}
						scale={1}
					/>
				</Stage>
			</Center>

			<fog
				attach='fog'
				args={["#0f0447", 10, 20]}
			/>
			<color
				attach='background'
				args={["#0f0447"]}
			/>

			<mesh
				rotation-x={-Math.PI / 2}
				position-y={-2.2}>
				<planeGeometry args={[100, 40]} />
				<MeshReflectorMaterial
					blur={[300, 100]}
					resolution={128}
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
