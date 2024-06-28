import React from "react";
import "./Welcome.css";
import {
	Stage,
	PresentationControls,
	Stars,
	MeshReflectorMaterial,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Layout from "../../layout/Main";

import Cloud from "../../models/Cloud";

function Welcome({ screenRef, setMonitor }) {
	return (
		<Layout>
			<section
				className='welcome'
				onClick={() => setMonitor(screenRef)}>
				<Canvas
					camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 2, 5] }}
					dpr={Math.max(window.devicePixelRatio, 5)}
					id='welcome_canvas'>
					<ambientLight intensity={3} />
					<Stars
						radius={100}
						depth={50}
						count={5000}
						factor={4}
						saturation={0}
						fade
						speed={1}
					/>

					<Stage intensity={1}>
						<PresentationControls
							global
							snap={true} // Snap-back to center (can also be a spring config)
							rotation={[0, 0, 0]} // Default rotation
							polar={[0, 0]} // Vertical limits
							azimuth={[-Math.PI / 4, Math.PI / 4]} // Horizontal limits
							config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
						>
							<Cloud
								rotation-y={-1.5}
								position-y={-1}
								position-z={1}
							/>
						</PresentationControls>
					</Stage>

					<fog
						attach='fog'
						args={["#A594F9", 20, 40]}
					/>
					<color
						attach='background'
						args={["#A594F9"]}
					/>

					<mesh
						rotation-x={-Math.PI / 2}
						position-y={-1.5}>
						<planeGeometry args={[120, 100]} />
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
				</Canvas>
			</section>
		</Layout>
	);
}

export default Welcome;
