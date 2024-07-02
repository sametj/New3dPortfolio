import { CameraControls, useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Project from "../pages/Projects";
import SimScreen from "../pages/SimScreen";

export default function TeejaysRoom(props) {
	const { nodes, materials } = useGLTF("/models/TeejaysRoom.glb");
	const [activeScreen, setActiveScreen] = useState();
	const [active, setActive] = useState(false);
	const cameraRef = useRef();
	const MiddleMonitorScreen = useRef();
	const LeftMonitorScreen = useRef();
	const RightMonitorScreen = useRef();
	const SimMontorScreen = useRef();
	const ChairRef = useRef();

	const setMonitor = (ref) => {
		setActiveScreen(ref.current);
		setActive(true);
		if (cameraRef.current) {
			cameraRef.current.enabled = true;
		}
	};

	useFrame(() => {
		if (!active) {
			return;
		}
		cameraRef.current?.fitToBox(activeScreen, true);

		const onRest = () => {
			if (cameraRef.current) {
				cameraRef.current.enabled = false;
			}
			cameraRef.current.removeEventListener("rest", onRest);
			cameraRef.current.addEventListener("rest", onRest);
		};
	}, [active, activeScreen]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				cameraRef.current?.reset(true);
				setActive(false);
				cameraRef.current.enabled = true;
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<>
			<CameraControls
				restThreshold={0.001}
				minDistance={2}
				maxDistance={8}
				minPolarAngle={Math.PI / 3}
				maxPolarAngle={Math.PI / 2}
				minAzimuthAngle={-Math.PI / 6}
				maxAzimuthAngle={Math.PI / 6}
				ref={cameraRef}
				truckSpeed={0}
			/>
			<group
				{...props}
				dispose={null}>
				<group name='Scene'>
					<group
						name='WallLedLights003'
						position={[-2.438, 3.631, -0.463]}
						rotation={[2.617, 0, Math.PI / 2]}>
						<mesh
							name='Circle005'
							geometry={nodes.Circle005.geometry}
							material={materials.BaseWallLed}
						/>
						<mesh
							name='Circle005_1'
							geometry={nodes.Circle005_1.geometry}
							material={materials.WallLightBeige}
						/>
						<mesh
							name='Circle005_2'
							geometry={nodes.Circle005_2.geometry}
							material={materials.WellLedPurple}
						/>
					</group>
					<group
						name='Plane_Baked'
						position={[-2.378, 1.011, -1.836]}>
						<mesh
							name='Plane011'
							geometry={nodes.Plane011.geometry}
							material={materials.Plane_Baked}
						/>
						<mesh
							name='Plane011_1'
							geometry={nodes.Plane011_1.geometry}
							material={materials.FloorMat_Baked}
						/>
						<mesh
							name='Plane011_2'
							geometry={nodes.Plane011_2.geometry}
							material={materials.Cube_Baked}
						/>
						<mesh
							name='Plane011_3'
							geometry={nodes.Plane011_3.geometry}
							material={materials.Desk_Baked}
						/>
						<mesh
							name='Plane011_4'
							geometry={nodes.Plane011_4.geometry}
							material={materials.MonitorFrame_Baked}
						/>
						<mesh
							name='Plane011_5'
							geometry={nodes.Plane011_5.geometry}
							material={materials.WheelBase_Baked}
						/>
						<mesh
							name='Plane011_6'
							geometry={nodes.Plane011_6.geometry}
							material={materials["Cube.002_Baked"]}
						/>
						<mesh
							name='Plane011_7'
							geometry={nodes.Plane011_7.geometry}
							material={materials.Pedals_Baked}
						/>
						<mesh
							name='Plane011_8'
							geometry={nodes.Plane011_8.geometry}
							material={materials.SimFrame_Baked}
						/>
						<mesh
							name='Plane011_9'
							geometry={nodes.Plane011_9.geometry}
							material={materials["Plane.004_Baked"]}
						/>
						<mesh
							name='Plane011_10'
							geometry={nodes.Plane011_10.geometry}
							material={materials["Books.006_Baked"]}
						/>
					</group>
					<mesh
						name='Chair'
						geometry={nodes.Chair.geometry}
						material={materials["Cube.001_Baked"]}
						position={[2.209, 0.602, -2.333]}
						rotation={[0, 0, 0.001]}
					/>
					<group
						name='RightMonitor_Baked'
						position={[1.781, 2.442, -0.51]}>
						<mesh
							name='Plane018'
							geometry={nodes.Plane018.geometry}
							material={materials.RightMonitor_Baked}
						/>
						<mesh
							name='Plane018_1'
							geometry={nodes.Plane018_1.geometry}
							material={materials.LeftMonitor_Baked}
						/>
						<mesh
							name='Plane018_2'
							geometry={nodes.Plane018_2.geometry}
							material={materials.TopMonitor_Baked}
						/>
						<mesh
							name='Plane018_3'
							geometry={nodes.Plane018_3.geometry}
							material={materials["Plane.013_Baked"]}
						/>
					</group>
					<group
						name='MousePad_Baked'
						position={[1.716, 1.864, -1.232]}
						rotation={[Math.PI, 0, Math.PI]}>
						<mesh
							name='Plane022'
							geometry={nodes.Plane022.geometry}
							material={materials.MousePad_Baked}
						/>
						<mesh
							name='Plane022_1'
							geometry={nodes.Plane022_1.geometry}
							material={materials.Mouse_Baked}
						/>
					</group>
					<mesh
						name='DeskHeadphone_Baked'
						geometry={nodes.DeskHeadphone_Baked.geometry}
						material={materials.DeskHeadphone_Baked}
						position={[0.243, 1.865, -1.323]}
						rotation={[Math.PI, 0, 1.36]}
					/>
					<group
						name='Keyboard_Baked'
						position={[2.636, 1.856, -1.263]}
						rotation={[Math.PI, 0, Math.PI]}>
						<mesh
							name='Plane025'
							geometry={nodes.Plane025.geometry}
							material={materials.Keyboard_Baked}
						/>
						<mesh
							name='Plane025_1'
							geometry={nodes.Plane025_1.geometry}
							material={materials.KeyCaps_Baked}
						/>
					</group>
					<mesh
						name='Silverstone_Circuit001'
						geometry={nodes.Silverstone_Circuit001.geometry}
						material={nodes.Silverstone_Circuit001.material}
						position={[-5.462, 3.561, -1.43]}
						rotation={[-Math.PI, 0, Math.PI / 2]}
					/>
					<mesh
						name='Text001'
						geometry={nodes.Text001.geometry}
						material={materials.White}
						position={[1.481, 4.703, -0.445]}
						rotation={[Math.PI / 2, 0, -Math.PI]}
					/>
					<group
						name='WaterPump001_Baked'
						position={[-1.783, 2.189, -1.107]}
						rotation={[Math.PI, -1.546, Math.PI]}>
						<mesh
							name='Cube014'
							geometry={nodes.Cube014.geometry}
							material={materials.PcCase_Baked}
						/>
						<mesh
							name='Cube014_1'
							geometry={nodes.Cube014_1.geometry}
							material={materials["WaterPump.001_Baked"]}
						/>
					</group>
					<mesh
						ref={LeftMonitorScreen}
						onClick={() => setMonitor(LeftMonitorScreen)}
						name='LeftMonitorScreen001_Baked'
						geometry={nodes.LeftMonitorScreen001_Baked.geometry}
						material={nodes.LeftMonitorScreen001_Baked.material}
						position={[2.995, 2.538, -0.532]}>
						<Html
							scale={0.059}
							occlude='blending'
							rotation-x={Math.PI}
							rotation-z={Math.PI}
							position={[0, 0, -0.01]}
							transform>
							<About
								screenRef={LeftMonitorScreen}
								setMonitor={setMonitor}
							/>
						</Html>
					</mesh>
					<mesh
						ref={RightMonitorScreen}
						onClick={() => setMonitor(RightMonitorScreen)}
						name='RightMonitorScreen001_Baked'
						geometry={nodes.RightMonitorScreen001_Baked.geometry}
						material={nodes.RightMonitorScreen001_Baked.material}
						position={[0.587, 2.538, -0.513]}>
						<Html
							scale={0.059}
							occlude='blending'
							rotation-x={Math.PI}
							rotation-z={Math.PI}
							position={[0, 0, -0.01]}
							transform>
							<Project
								screenRef={RightMonitorScreen}
								setMonitor={setMonitor}
							/>
						</Html>
					</mesh>
					<mesh
						ref={MiddleMonitorScreen}
						onClick={() => setMonitor(MiddleMonitorScreen)}
						name='TopMonitorScreen001_Baked'
						geometry={nodes.TopMonitorScreen001_Baked.geometry}
						material={nodes.TopMonitorScreen001_Baked.material}
						position={[1.72, 3.821, -0.473]}
						rotation={[0, 0, -Math.PI / 2]}>
						<Html
							scale={0.08}
							occlude='blending'
							rotation-x={Math.PI}
							rotation-z={Math.PI / 2}
							position={[0, 0, -0.01]}
							transform>
							<Welcome
								screenRef={MiddleMonitorScreen}
								setMonitor={setMonitor}
							/>
						</Html>
					</mesh>
					<mesh
						name='WheelScreen'
						geometry={nodes.WheelScreen.geometry}
						material={nodes.WheelScreen.material}
						position={[-4.107, 1.58, -2.285]}></mesh>
					<mesh
						ref={SimMontorScreen}
						onClick={() => setMonitor(SimMontorScreen)}
						name='SimMonitorScreen'
						geometry={nodes.SimMonitorScreen.geometry}
						material={materials["Plane.013_Baked"]}
						position={[1.781, 2.442, -0.514]}>
						<Html
							scale={0.05}
							occlude='blending'
							rotation-x={Math.PI}
							rotation-z={Math.PI}
							position={[-5.88, -0.09, -1.54]}
							transform>
							<SimScreen
								screenRef={SimMontorScreen}
								setMonitor={setMonitor}
							/>
						</Html>
					</mesh>
				</group>
			</group>
		</>
	);
}

useGLTF.preload("/models/TeejaysRoom.glb");
