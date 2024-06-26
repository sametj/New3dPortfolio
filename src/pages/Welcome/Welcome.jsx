import React from "react";
import "./Welcome.css";
import {
	Center,
	Float,
	Html,
	OrbitControls,
	PresentationControls,
	Text,
	Text3D,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Park from "../../models/Park";

function Welcome({ screenRef, setMonitor }) {
	return (
		<div
			className='welcome'
			onClick={() => setMonitor(screenRef)}>
			<Canvas
				camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
				dpr={Math.max(window.devicePixelRatio, 12)}
				id='welcome_canvas'>
				<ambientLight intensity={4} />
				<PresentationControls
					global
					snap={true} // Snap-back to center (can also be a spring config)
					rotation={[0, 0, 0]} // Default rotation
					polar={[0, Math.PI / 4]} // Vertical limits
					azimuth={[-Math.PI / 4, Math.PI / 4]} // Horizontal limits
					config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
				>
					<Center>
						<Park scale={0.8} />
						<Float
							rotationIntensity={0.2}
							floatingRange={[0, 0.5]}>
							<Text
								font='/fonts/press-start-2p-v15-latin-regular.ttf'
								fontSize={0.5}
								maxWidth={9}
								lineHeight={1.3}
								letterSpacing={0.1}
								color={"red"}
								outlineColor={"black"}
								outlineWidth={0.03}
								position={[1.6, 3, 0]}>
								Hey there! I'm Teejay, Welcome to my Portfolio!
							</Text>{" "}
						</Float>
					</Center>
				</PresentationControls>
			</Canvas>
		</div>
	);
}

export default Welcome;
