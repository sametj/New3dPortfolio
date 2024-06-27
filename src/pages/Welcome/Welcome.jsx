import React from "react";
import "./Welcome.css";
import {
	Center,
	Stage,
	PresentationControls,
	Text,
	Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import LandingRoom from "../../models/LandingRoom";

function Welcome({ screenRef, setMonitor }) {
	return (
		<div
			className='welcome'
			onClick={() => setMonitor(screenRef)}>
			<Canvas
				camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0.1, 5] }}
				dpr={Math.max(window.devicePixelRatio, 5)}
				id='welcome_canvas'>
				<ambientLight intensity={1} />
				<Stars
					radius={100}
					depth={50}
					count={5000}
					factor={4}
					saturation={0}
					fade
					speed={1}
				/>
				<fog
					attach='fog'
					args={["#A594F9", 20, 40]}
				/>
				<color
					attach='background'
					args={["#A594F9"]}
				/>

				<PresentationControls
					snap={true} // Snap-back to center (can also be a spring config)
					rotation={[0, 0, 0]} // Default rotation
					polar={[0, Math.PI / 8]} // Vertical limits
					azimuth={[-Math.PI / 8, Math.PI / 8]} // Horizontal limits
					config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
				>
					<Center>
						<Stage
							intensity={0.5}
							preset='rembrandt'
							environment='city'>
							<LandingRoom
								scale={0.8}
								rotation={[0, 0.9, 0.04]}
								position={[-7, 2, 15]}
							/>

							{/* <Text
								font='/fonts/press-start-2p-v15-latin-regular.ttf'
								fontSize={0.7}
								maxWidth={7}
								lineHeight={1.3}
								letterSpacing={0.1}
								color={"red"}
								outlineColor={"black"}
								outlineWidth={0.03}
								position={[0, 3, 8]}>
								Hey there! I'm Teejay
							</Text> */}
						</Stage>
					</Center>
				</PresentationControls>
				<mesh
					rotation-x={-Math.PI / 2}
					position-y={-4}>
					<planeGeometry args={[100, 40]} />
					<meshBasicMaterial color='#F3D9B1' />
				</mesh>
			</Canvas>
		</div>
	);
}

export default Welcome;
