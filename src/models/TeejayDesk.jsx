import { Suspense, useEffect, useRef, useState } from "react";
import { CameraControls, useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Project from "../pages/Projects";
import SimScreen from "../pages/SimScreen";

export default function TeejaysDesk(props) {
	const { nodes, materials } = useGLTF("/models/IsoRoom.glb");
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
	}, [activeScreen]);

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
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.WallRoof.geometry}
					material={materials["FloorMaterial.001"]}
					position={[33.971, 23.368, -11.411]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cabinet.geometry}
					material={materials.FurnitureMaterial}
					position={[13.457, -13.286, -5.75]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<group
					ref={ChairRef}
					position={[-30.515, -1.105, 21.031]}
					rotation={[0, 0.817, -1.521]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane003.geometry}
						material={materials.ChisonMaterial}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane003_1.geometry}
						material={materials.MainCushionMaterial}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane003_2.geometry}
						material={materials.ChairBaseMaterial}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.CenterMonitor.geometry}
					material={materials.MonitorMaterial}
					position={[-23.391, 7.852, -11.467]}
					rotation={[-Math.PI / 2, Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.LeftMonitor.geometry}
					material={materials.MonitorMaterial}
					position={[-41.191, 2.723, -8.815]}
					rotation={[-Math.PI, 1.165, -Math.PI]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.RightMonitor.geometry}
					material={materials.MonitorMaterial}
					position={[-5.361, 7.852, -9.243]}
					rotation={[0, 1.315, -Math.PI / 2]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Keyboard.geometry}
					material={materials.SBW_KeyboardBase}
					position={[-25.6, 2.95, -5.324]}
					rotation={[0, Math.PI / 2, 0]}>
					<group
						position={[-0.266, 0.755, -4.906]}
						rotation={[0, 0, 0.086]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Plane008.geometry}
							material={materials.KeyCapsMaterial1}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Plane008_1.geometry}
							material={materials.KeyCapsMaterial2}
						/>
					</group>
				</mesh>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.MousePad.geometry}
					material={materials.MousePad}
					position={[-22.474, 2.621, -3.633]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Mouse.geometry}
					material={materials.RigMaterial}
					position={[-17.171, 3.022, -3.429]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<group
					position={[41.172, -1.341, 12.661]}
					rotation={[Math.PI / 2, 0, Math.PI]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012.geometry}
						material={materials.AlarmClock}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012_1.geometry}
						material={materials.Silver}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012_2.geometry}
						material={materials.Concrete}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012_3.geometry}
						material={materials.Blue}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012_4.geometry}
						material={materials.green}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012_5.geometry}
						material={materials.TVWallFrame}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012_6.geometry}
						material={materials.Black}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane012_7.geometry}
						material={materials.WheelBaseMaterial}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.RigRug.geometry}
					material={materials.FurnitureMaterial}
					position={[41.172, -13.582, 8.718]}
					rotation={[Math.PI, 0, Math.PI]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.RigBase.geometry}
					material={materials.RigMaterial}
					position={[41.172, -13.459, 8.718]}
					rotation={[Math.PI, 0, Math.PI]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.RigChair.geometry}
					material={materials.RigChariMaterial}
					position={[41.828, -9.495, 27.118]}
					rotation={[-1.377, 1.571, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.MonitorStand.geometry}
					material={materials.RigMaterial}
					position={[30.263, -4.318, 5.019]}
					rotation={[Math.PI, 0, Math.PI]}
				/>
				<group
					position={[14.218, 3.357, -5.685]}
					rotation={[0, Math.PI / 2, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube002.geometry}
						material={materials.PcCase}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube002_1.geometry}
						material={materials.TransparentMaterial}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube006.geometry}
						material={materials.EmissionLight1}
						position={[1.949, -0.36, 1.044]}
						rotation={[-Math.PI, 0, 0.215]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube007.geometry}
						material={materials.EmissionLight1}
						position={[4.26, -0.36, 1.044]}
						rotation={[-Math.PI, 0, 0.215]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube012.geometry}
						material={materials.EmissionLight1}
						position={[5.651, 1.637, 0.163]}
						rotation={[Math.PI / 2, 0, -1.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube013.geometry}
						material={materials.EmissionLight1}
						position={[-0.06, -0.36, 1.044]}
						rotation={[-Math.PI, 0, 0.215]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube026.geometry}
						material={materials.EmissionLight1}
						position={[-3.967, -0.268, 1.773]}
						rotation={[1.605, -0.093, 0.236]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube028.geometry}
						material={materials.EmissionLight1}
						position={[-3.967, -2.79, 1.773]}
						rotation={[1.605, -0.093, 0.236]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube030.geometry}
						material={materials.EmissionLight1}
						position={[-3.967, 2.223, 1.773]}
						rotation={[1.605, -0.093, 0.236]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.GPU.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[2.06, -0.756, 1.046]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube008.geometry}
							material={materials.EmissionLight1}
						/>
					</mesh>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.MotherBoard.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[1.792, 0.943, 2.303]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<group
						position={[0.074, -0.004, -2.313]}
						rotation={[Math.PI / 2, 0, 0]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Plane023.geometry}
							material={materials.TransparentMaterial}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Plane023_1.geometry}
							material={materials.PcCase}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFan.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[5.687, 1.718, 0.107]}
						rotation={[0, 1.571, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFan001.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[-5.805, 0.052, -0.034]}
						rotation={[0, 1.571, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFan002.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[-5.805, -2.469, -0.034]}
						rotation={[0, 1.571, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFan003.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[-5.805, 2.543, -0.034]}
						rotation={[0, 1.571, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFan004.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[-3.913, -0.205, 1.795]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFan005.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[-3.913, -2.727, 1.795]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFan006.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[-3.913, 2.286, 1.795]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFanFilter001.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[-5.661, 0.072, -0.032]}
						rotation={[0, 0, -Math.PI / 2]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube019.geometry}
							material={materials.EmissionLight1}
							position={[0.083, -0.166, 0.053]}
							rotation={[-0.431, 1.446, 0.67]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube021.geometry}
							material={materials.EmissionLight1}
							position={[2.604, -0.166, 0.053]}
							rotation={[-0.431, 1.446, 0.67]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube023.geometry}
							material={materials.EmissionLight1}
							position={[-2.408, -0.166, 0.053]}
							rotation={[-0.431, 1.446, 0.67]}
						/>
					</mesh>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PcFanFilter.geometry}
						material={nodes.PcFanFilter.material}
						position={[-3.915, -0.186, 1.94]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.PowerSupply.geometry}
						material={materials["Waterpump MATERIAL"]}
						position={[4.271, -3.308, 0.206]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Ram.geometry}
						material={nodes.Ram.material}
						position={[1.474, 2.254, 1.587]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Ram001.geometry}
						material={nodes.Ram001.material}
						position={[1.268, 2.254, 1.587]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Ram002.geometry}
						material={nodes.Ram002.material}
						position={[1.061, 2.254, 1.587]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Ram003.geometry}
						material={nodes.Ram003.material}
						position={[0.841, 2.254, 1.587]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.RamLed.geometry}
						material={materials.EmissionLight1}
						position={[1.474, 2.254, 1.587]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.RamLed001.geometry}
						material={materials.EmissionLight1}
						position={[1.268, 2.254, 1.587]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.RamLed002.geometry}
						material={materials.EmissionLight1}
						position={[1.061, 2.254, 1.587]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.RamLed003.geometry}
						material={materials.EmissionLight1}
						position={[0.841, 2.254, 1.587]}
					/>
					<group position={[1.871, 4.228, -0.333]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube016.geometry}
							material={materials["Waterpump MATERIAL"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube016_1.geometry}
							material={materials.EmissionLight1}
						/>
					</group>
				</group>
				<group
					position={[-4.429, 3.334, -2.571]}
					rotation={[-1.781, Math.PI / 2, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle.geometry}
						material={materials.HeadphoneMaterial}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle_1.geometry}
						material={materials.HeadphoneCushionMaterial}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.WheelHeadphone.geometry}
					material={materials.WheelBaseMaterial}
					position={[33.816, -5.666, 8.418]}
					rotation={[0, -0.242, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Floor.geometry}
					material={materials["FloorMaterial.001"]}
					position={[-51.086, -15.52, 9.15]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<group
					position={[5.91, 14.523, -12.51]}
					rotation={[Math.PI / 2, 1.046, Math.PI]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015.geometry}
						material={materials.WallLedBaseMaterial}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_1.geometry}
						material={materials["EmissionLight1.003"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_2.geometry}
						material={materials["EmissionLight1.004"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_3.geometry}
						material={materials["EmissionLight1.009"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_4.geometry}
						material={materials["EmissionLight1.002"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_5.geometry}
						material={materials["EmissionLight1.001"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_6.geometry}
						material={materials["EmissionLight1.005"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_7.geometry}
						material={materials["EmissionLight1.006"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_8.geometry}
						material={materials["EmissionLight1.007"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle015_9.geometry}
						material={materials["EmissionLight1.008"]}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.WallQuote.geometry}
					material={materials["EmissionLight1.011"]}
					position={[-49.356, 18.203, -12.886]}
					rotation={[Math.PI / 2, 0, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.DeskRug.geometry}
					material={materials.FloorMatMaterial}
					position={[-23.617, -13.561, 14.316]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Desk.geometry}
					material={materials.FurnitureMaterial}
					position={[-24.661, -0.526, -5.694]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.wall.geometry}
					material={materials.WallMaterial}
					position={[9.465, -4.866, -3.759]}
					rotation={[Math.PI / 2, 0, -1.998]}
				/>
				<group
					position={[9.465, -4.866, -3.759]}
					rotation={[Math.PI / 2, 0, -1.998]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009.geometry}
						material={materials.Book2}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009_1.geometry}
						material={materials.Paper}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009_2.geometry}
						material={materials.Book1}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009_3.geometry}
						material={materials.Book6}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009_4.geometry}
						material={materials.Book3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009_5.geometry}
						material={materials.Book5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009_6.geometry}
						material={materials.Book4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube009_7.geometry}
						material={materials.Book7}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.SimMonitor.geometry}
					material={materials.MonitorMaterial}
					position={[41.282, 3.364, 5.709]}
					rotation={[-Math.PI / 2, Math.PI / 2, 0]}
				/>
				<mesh
					ref={MiddleMonitorScreen}
					onClick={() => setMonitor(MiddleMonitorScreen)}
					castShadow
					receiveShadow
					geometry={nodes.CenterMonitorScreen.geometry}
					material={materials.Screen}
					position={[-23.391, 7.852, -11.435]}
					rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
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
					castShadow
					receiveShadow
					geometry={nodes.RightMonitorScreen.geometry}
					material={materials.Screen}
					position={[-5.361, 7.852, -9.146]}
					rotation={[0, 1.315, -Math.PI / 2]}>
					<Html
						zIndexRange={[10, 1]}
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
					castShadow
					receiveShadow
					geometry={nodes.LeftMonitorScreen.geometry}
					material={materials.Screen}
					position={[-41.181, 7.852, -7.914]}
					rotation={[-Math.PI, 1.165, Math.PI / 2]}>
					<Html
						zIndexRange={[10, 1]}
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
					castShadow
					receiveShadow
					geometry={nodes.SimMonitorScreen.geometry}
					material={materials.Screen}
					position={[41.282, 3.364, 5.791]}
					rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
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
		</>
	);
}

useGLTF.preload("/models/IsoRoom.glb");
