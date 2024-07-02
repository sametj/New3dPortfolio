import { CameraControls, useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Project from "../pages/Projects";
import SimScreen from "../pages/SimScreen";

export default function Room(props) {
	const { nodes, materials } = useGLTF("/models/Room.glb");
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
		} else {
			cameraRef.current?.fitToBox(activeScreen, true);

			const onRest = () => {
				if (cameraRef.current) {
					cameraRef.current.enabled = false;
				}
				cameraRef.current.removeEventListener("rest", onRest);
				cameraRef.current.addEventListener("rest", onRest);
			};
		}
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
				maxDistance={10}
				minPolarAngle={Math.PI / 3}
				maxPolarAngle={Math.PI / 2}
				minAzimuthAngle={-Math.PI / 6}
				maxAzimuthAngle={Math.PI / 6}
				ref={cameraRef}
			/>

			<group
				{...props}
				dispose={null}>
				<group name='Scene'>
					<group
						name='DeskChair'
						position={[-30.515, -2.896, 21.031]}
						rotation={[0, 0.817, -1.521]}
						scale={[0.86, 1, 1]}>
						<mesh
							name='Plane003'
							geometry={nodes.Plane003.geometry}
							material={materials.ChisonMaterial}
						/>
						<mesh
							name='Plane003_1'
							geometry={nodes.Plane003_1.geometry}
							material={materials.MainCushionMaterial}
						/>
						<mesh
							name='Plane003_2'
							geometry={nodes.Plane003_2.geometry}
							material={materials.ChairBaseMaterial}
						/>
					</group>
					<mesh
						name='CenterMonitor'
						geometry={nodes.CenterMonitor.geometry}
						material={materials.MonitorMaterial}
						position={[-23.391, 7.852, -11.467]}
						rotation={[-Math.PI / 2, 1.57, 0]}
					/>
					<mesh
						name='LeftMonitor'
						geometry={nodes.LeftMonitor.geometry}
						material={materials.MonitorMaterial}
						position={[-41.191, 2.723, -8.815]}
						rotation={[-Math.PI, 1.165, -Math.PI]}
					/>
					<mesh
						name='RightMonitor'
						geometry={nodes.RightMonitor.geometry}
						material={materials.MonitorMaterial}
						position={[-5.361, 7.852, -9.243]}
						rotation={[0, 1.315, -Math.PI / 2]}
					/>
					<mesh
						name='Keyboard'
						geometry={nodes.Keyboard.geometry}
						material={materials.SBW_KeyboardBase}
						position={[-25.6, 2.95, -5.324]}
						rotation={[0, 1.571, 0]}>
						<group
							name='KeyCaps'
							position={[-0.266, 0.755, -4.906]}
							rotation={[0, 0, 0.086]}>
							<mesh
								name='Plane008'
								geometry={nodes.Plane008.geometry}
								material={materials.KeyCapsMaterial1}
							/>
							<mesh
								name='Plane008_1'
								geometry={nodes.Plane008_1.geometry}
								material={materials.KeyCapsMaterial2}
							/>
						</group>
					</mesh>
					<group
						name='MousePad'
						position={[-22.474, 2.621, -3.633]}
						rotation={[0, 1.571, 0]}>
						<mesh
							name='Plane009'
							geometry={nodes.Plane009.geometry}
							material={materials.MousePad}
						/>
						<mesh
							name='Plane009_1'
							geometry={nodes.Plane009_1.geometry}
							material={materials.FurnitureMaterial}
						/>
					</group>
					<mesh
						name='Mouse'
						geometry={nodes.Mouse.geometry}
						material={materials.RigMaterial}
						position={[-17.171, 3.022, -3.429]}
						rotation={[0, 1.571, 0]}
					/>
					<group
						name='WheelScreen'
						position={[41.172, -1.201, 12.661]}
						rotation={[Math.PI / 2, 0, Math.PI]}>
						<mesh
							name='Plane012'
							geometry={nodes.Plane012.geometry}
							material={materials.AlarmClock}
						/>
						<mesh
							name='Plane012_1'
							geometry={nodes.Plane012_1.geometry}
							material={materials.Silver}
						/>
						<mesh
							name='Plane012_2'
							geometry={nodes.Plane012_2.geometry}
							material={materials.Concrete}
						/>
						<mesh
							name='Plane012_3'
							geometry={nodes.Plane012_3.geometry}
							material={materials.Blue}
						/>
						<mesh
							name='Plane012_4'
							geometry={nodes.Plane012_4.geometry}
							material={materials.green}
						/>
						<mesh
							name='Plane012_5'
							geometry={nodes.Plane012_5.geometry}
							material={materials.TVWallFrame}
						/>
						<mesh
							name='Plane012_6'
							geometry={nodes.Plane012_6.geometry}
							material={materials.Black}
						/>
						<mesh
							name='Plane012_7'
							geometry={nodes.Plane012_7.geometry}
							material={materials.WheelBaseMaterial}
						/>
						<mesh
							name='Plane012_8'
							geometry={nodes.Plane012_8.geometry}
							material={materials.FurnitureMaterial}
						/>
						<mesh
							name='Plane012_9'
							geometry={nodes.Plane012_9.geometry}
							material={materials.RigMaterial}
						/>
						<mesh
							name='Plane012_10'
							geometry={nodes.Plane012_10.geometry}
							material={materials.RigChariMaterial}
						/>
					</group>
					<group
						name='PcCase'
						position={[14.218, 3.357, -5.685]}
						rotation={[0, 1.571, 0]}>
						<mesh
							name='Cube002'
							geometry={nodes.Cube002.geometry}
							material={materials.PcCase}
						/>
						<mesh
							name='Cube002_1'
							geometry={nodes.Cube002_1.geometry}
							material={materials.TransparentMaterial}
						/>
						<mesh
							name='Cube002_2'
							geometry={nodes.Cube002_2.geometry}
							material={materials.EmissionLight1}
						/>
						<mesh
							name='Cube002_3'
							geometry={nodes.Cube002_3.geometry}
							material={materials["Waterpump MATERIAL"]}
						/>
						<mesh
							name='Cube002_4'
							geometry={nodes.Cube002_4.geometry}
							material={materials["EmissionLight1.001"]}
						/>
					</group>
					<group
						name='DeskHeadphone'
						position={[-4.429, 3.334, -2.571]}
						rotation={[-1.781, Math.PI / 2, 0]}>
						<mesh
							name='Circle'
							geometry={nodes.Circle.geometry}
							material={materials.HeadphoneMaterial}
						/>
						<mesh
							name='Circle_1'
							geometry={nodes.Circle_1.geometry}
							material={materials.HeadphoneCushionMaterial}
						/>
					</group>
					<mesh
						name='WheelHeadphone'
						geometry={nodes.WheelHeadphone.geometry}
						material={materials.WheelBaseMaterial}
						position={[33.816, -5.666, 8.418]}
						rotation={[0, -0.242, 0]}
					/>
					<group
						name='WallLedLights009'
						position={[5.91, 14.523, -12.51]}
						rotation={[Math.PI / 2, 1.046, Math.PI]}>
						<mesh
							name='Circle015'
							geometry={nodes.Circle015.geometry}
							material={materials.WallLedBaseMaterial}
						/>
						<mesh
							name='Circle015_1'
							geometry={nodes.Circle015_1.geometry}
							material={materials["EmissionLight1.003"]}
						/>
						<mesh
							name='Circle015_2'
							geometry={nodes.Circle015_2.geometry}
							material={materials["EmissionLight1.004"]}
						/>
						<mesh
							name='Circle015_3'
							geometry={nodes.Circle015_3.geometry}
							material={materials["EmissionLight1.009"]}
						/>
						<mesh
							name='Circle015_4'
							geometry={nodes.Circle015_4.geometry}
							material={materials["EmissionLight1.002"]}
						/>
						<mesh
							name='Circle015_5'
							geometry={nodes.Circle015_5.geometry}
							material={materials["EmissionLight1.005"]}
						/>
						<mesh
							name='Circle015_6'
							geometry={nodes.Circle015_6.geometry}
							material={materials["EmissionLight1.006"]}
						/>
						<mesh
							name='Circle015_7'
							geometry={nodes.Circle015_7.geometry}
							material={materials["EmissionLight1.007"]}
						/>
						<mesh
							name='Circle015_8'
							geometry={nodes.Circle015_8.geometry}
							material={materials["EmissionLight1.008"]}
						/>
						<mesh
							name='Circle015_9'
							geometry={nodes.Circle015_9.geometry}
							material={materials["EmissionLight1.010"]}
						/>
						<mesh
							name='Circle015_10'
							geometry={nodes.Circle015_10.geometry}
							material={materials["FloorMaterial.001"]}
						/>
						<mesh
							name='Circle015_11'
							geometry={nodes.Circle015_11.geometry}
							material={materials.FloorMatMaterial}
						/>
						<mesh
							name='Circle015_12'
							geometry={nodes.Circle015_12.geometry}
							material={materials.WallMaterial}
						/>
						<mesh
							name='Circle015_13'
							geometry={nodes.Circle015_13.geometry}
							material={materials["EmissionLight1.011"]}
						/>
						<mesh
							name='Circle015_14'
							geometry={nodes.Circle015_14.geometry}
							material={materials.FurnitureMaterial}
						/>
						<mesh
							name='Circle015_15'
							geometry={nodes.Circle015_15.geometry}
							material={materials.Book2}
						/>
						<mesh
							name='Circle015_16'
							geometry={nodes.Circle015_16.geometry}
							material={materials.Paper}
						/>
						<mesh
							name='Circle015_17'
							geometry={nodes.Circle015_17.geometry}
							material={materials.Book1}
						/>
						<mesh
							name='Circle015_18'
							geometry={nodes.Circle015_18.geometry}
							material={materials.Book6}
						/>
						<mesh
							name='Circle015_19'
							geometry={nodes.Circle015_19.geometry}
							material={materials.Book3}
						/>
						<mesh
							name='Circle015_20'
							geometry={nodes.Circle015_20.geometry}
							material={materials.Book5}
						/>
						<mesh
							name='Circle015_21'
							geometry={nodes.Circle015_21.geometry}
							material={materials.Book4}
						/>
						<mesh
							name='Circle015_22'
							geometry={nodes.Circle015_22.geometry}
							material={materials.Book7}
						/>
					</group>
					<mesh
						name='SimMonitor'
						geometry={nodes.SimMonitor.geometry}
						material={materials.MonitorMaterial}
						position={[41.282, 3.364, 5.709]}
						rotation={[-Math.PI / 2, 1.57, 0]}
					/>
					<mesh
						ref={MiddleMonitorScreen}
						onClick={() => setMonitor(MiddleMonitorScreen)}
						name='CenterMonitorScreen'
						geometry={nodes.CenterMonitorScreen.geometry}
						material={materials.Screen}
						position={[-23.391, 7.852, -11.435]}
						rotation={[-Math.PI / 2, 1.57, 0]}>
						<Html
							scale={0.5}
							occlude='blending'
							rotation-x={Math.PI / 2}
							rotation-z={Math.PI / 2}
							position={[-1.3, -1, 0.02]}
							transform>
							<Welcome
								screenRef={MiddleMonitorScreen}
								setMonitor={setMonitor}
							/>
						</Html>
					</mesh>
					<mesh
						ref={RightMonitorScreen}
						onClick={() => setMonitor(RightMonitorScreen)}
						name='RightMonitorScreen'
						geometry={nodes.RightMonitorScreen.geometry}
						material={materials.Screen}
						position={[-5.361, 7.852, -9.146]}
						rotation={[0, 1.315, -Math.PI / 2]}>
						<Html
							scale={0.5}
							occlude='blending'
							rotation-x={Math.PI / 2}
							rotation-z={Math.PI / 2}
							position={[-1.2, -0.92, 0]}
							transform>
							<Project
								screenRef={RightMonitorScreen}
								setMonitor={setMonitor}
							/>
						</Html>
					</mesh>
					<mesh
						ref={LeftMonitorScreen}
						onClick={() => setMonitor(LeftMonitorScreen)}
						name='LeftMonitorScreen'
						geometry={nodes.LeftMonitorScreen.geometry}
						material={materials.Screen}
						position={[-41.181, 7.852, -7.914]}
						rotation={[-Math.PI, 1.165, Math.PI / 2]}>
						<Html
							scale={0.5}
							occlude='blending'
							rotation-x={Math.PI / 2}
							rotation-z={Math.PI / 2}
							position={[-1.2, -0.9, 0]}
							transform>
							<About
								screenRef={LeftMonitorScreen}
								setMonitor={setMonitor}
							/>
						</Html>
					</mesh>
					<mesh
						ref={SimMontorScreen}
						onClick={() => setMonitor(SimMontorScreen)}
						name='SimMonitorScreen'
						geometry={nodes.SimMonitorScreen.geometry}
						material={materials.Screen}
						position={[41.282, 3.364, 5.791]}
						rotation={[-Math.PI / 2, 1.57, 0]}>
						<Html
							scale={0.5}
							occlude='blending'
							rotation-x={Math.PI / 2}
							rotation-z={Math.PI / 2}
							position={[-1.7, -1, 0.02]}
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

useGLTF.preload("/models/Room.glb");
