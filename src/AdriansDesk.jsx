import { Suspense, useEffect, useRef, useState } from "react";
import { CameraControls, useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Welcome from "./pages/Welcome";
import About from "./pages/About";

export default function AdrianDesk(props) {
	const { nodes, materials } = useGLTF("/Adrians_Station.glb");
	const [activeScreen, setActiveScreen] = useState();
	const [active, setActive] = useState(false);
	const cameraRef = useRef();
	const RightTopMonitorScreen = useRef();
	const MiddleTopMonitorScreen = useRef();
	const LeftTopMonitorScreen = useRef();
	const LeftBottomMonitorScreen = useRef();
	const RightBottomMonitorScreen = useRef();

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
			cameraRef.current?.fitToBox(activeScreen, true, {
				paddingLeft: 0.3,
				paddingRight: 0.3,
			});

			const onRest = () => {
				if (cameraRef.current) {
					cameraRef.current.enabled = false;
					cameraRef.current.removeEventListener("rest", onRest);
				}
			};
			cameraRef.current.addEventListener("rest", onRest);
		}
	}, [activeScreen]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				cameraRef.current?.reset(true);
				setActive(false);
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
				minDistance={3}
				maxDistance={4}
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
					<mesh
						name='MonitorStand008'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand008.geometry}
						material={materials["Material.001"]}
						position={[-18.906, 2.171, -3.654]}
					/>
					<mesh
						ref={LeftBottomMonitorScreen}
						name='LeftBottomMonitor001'
						castShadow
						receiveShadow
						geometry={nodes.LeftBottomMonitor001.geometry}
						material={materials["Material.001"]}
						position={[-20.106, 2.995, -3.679]}
						rotation={[1.507, 0.004, -0.166]}
						onClick={() => setMonitor(LeftBottomMonitorScreen)}>
						<Html
							occlude='blending'
							prepend
							center
							scale={0.98}
							position-y={0.1}
							rotation-x={-Math.PI / 2}
							transform>
							<About />
						</Html>
					</mesh>
					<mesh
						onClick={() => setMonitor(RightBottomMonitorScreen)}
						ref={RightBottomMonitorScreen}
						name='RightBottomMonitor001'
						castShadow
						receiveShadow
						geometry={nodes.RightBottomMonitor001.geometry}
						material={materials["Material.001"]}
						position={[-17.736, 2.995, -3.713]}
						rotation={[1.507, -0.008, 0.125]}>
						<Html
							occlude='blending'
							prepend
							center
							scale={0.98}
							position-y={0.2}
							rotation-x={-Math.PI / 2}
							transform>
							<About />
						</Html>
					</mesh>
					<mesh
						onClick={() => setMonitor(RightTopMonitorScreen)}
						ref={RightTopMonitorScreen}
						name='RightTopMonitor001'
						castShadow
						receiveShadow
						geometry={nodes.RightTopMonitor001.geometry}
						material={materials["Material.001"]}
						position={[-15.112, 4.526, -3.628]}
						rotation={[Math.PI / 2, 0, 0.175]}>
						<Html
							occlude='blending'
							prepend
							center
							scale={0.98}
							position-y={0.2}
							rotation-x={-Math.PI / 2}
							transform>
							<About />
						</Html>
					</mesh>
					<mesh
						onClick={() => setMonitor(LeftTopMonitorScreen)}
						ref={LeftTopMonitorScreen}
						name='LeftTopMonitor001'
						castShadow
						receiveShadow
						geometry={nodes.LeftTopMonitor001.geometry}
						material={materials["Material.001"]}
						position={[-22.65, 4.54, -3.651]}
						rotation={[Math.PI / 2, 0, -0.141]}>
						<Html
							occlude='blending'
							prepend
							center
							scale={0.98}
							position-y={0.2}
							rotation-x={-Math.PI / 2}
							transform>
							<About />
						</Html>
					</mesh>
					<mesh
						ref={MiddleTopMonitorScreen}
						name='MiddleTopMonitor001'
						castShadow
						receiveShadow
						geometry={nodes.MiddleTopMonitor001.geometry}
						material={materials["Material.001"]}
						position={[-18.868, 4.528, -3.865]}
						rotation={[Math.PI / 2, 0, 0]}>
						<Html
							prepend
							rotation-x={-Math.PI / 2}
							position={[0, 0.1, 0]}
							transform
							occlude
							scale={0.2}>
							<Welcome
								setMonitor={setMonitor}
								screenRef={MiddleTopMonitorScreen}
							/>
						</Html>
					</mesh>
					<mesh
						name='MousePad001'
						castShadow
						receiveShadow
						geometry={nodes.MousePad001.geometry}
						material={materials.MousePad}
						position={[-18.999, 2.122, -2.689]}
						rotation={[-Math.PI, 1.568, -Math.PI]}
					/>
					<mesh
						name='Mouse001'
						castShadow
						receiveShadow
						geometry={nodes.Mouse001.geometry}
						material={materials["Material.002"]}
						position={[-18.256, 2.178, -2.663]}
						rotation={[-Math.PI, 1.568, -Math.PI]}
					/>
					<mesh
						name='Keyboard001'
						castShadow
						receiveShadow
						geometry={nodes.Keyboard001.geometry}
						material={materials.RigMaterial}
						position={[-19.438, 2.168, -2.925]}
						rotation={[-Math.PI, 1.568, -Math.PI]}>
						<mesh
							name='KeyCaps001'
							castShadow
							receiveShadow
							geometry={nodes.KeyCaps001.geometry}
							material={materials.KeYBOARD}
							position={[-0.037, 0.106, -0.688]}
							rotation={[0, 0, 0.086]}
						/>
					</mesh>
					<mesh
						name='HeadphoneSTAND001'
						castShadow
						receiveShadow
						geometry={nodes.HeadphoneSTAND001.geometry}
						material={materials["Material.001"]}
						position={[-15.459, 2.179, -3.414]}
					/>
					<group
						name='DeskHeadphone001'
						position={[-15.463, 2.448, -3.108]}
						rotation={[-2.914, 1.52, 2.931]}>
						<mesh
							name='Circle001'
							castShadow
							receiveShadow
							geometry={nodes.Circle001.geometry}
							material={materials.Headphones}
						/>
						<mesh
							name='Circle001_1'
							castShadow
							receiveShadow
							geometry={nodes.Circle001_1.geometry}
							material={materials.Foam}
						/>
					</group>
					<group
						name='Book002'
						position={[-21.392, 2.198, -2.891]}
						scale={[1, 0.367, 1]}>
						<mesh
							name='Cube003'
							castShadow
							receiveShadow
							geometry={nodes.Cube003.geometry}
							material={materials.Redbook}
						/>
						<mesh
							name='Cube003_1'
							castShadow
							receiveShadow
							geometry={nodes.Cube003_1.geometry}
							material={materials.Paper}
						/>
					</group>
					<group
						name='Book003'
						position={[-21.078, 2.213, -2.891]}
						rotation={[0.006, 0.006, -0.152]}
						scale={[0.96, 0.424, 1]}>
						<mesh
							name='Cube004'
							castShadow
							receiveShadow
							geometry={nodes.Cube004.geometry}
							material={materials.Book1}
						/>
						<mesh
							name='Cube004_1'
							castShadow
							receiveShadow
							geometry={nodes.Cube004_1.geometry}
							material={materials.Paper}
						/>
					</group>
					<group
						name='Plane002'
						position={[-16.667, 2.142, -2.549]}>
						<mesh
							name='Plane040'
							castShadow
							receiveShadow
							geometry={nodes.Plane040.geometry}
							material={materials.Screen}
						/>
						<mesh
							name='Plane040_1'
							castShadow
							receiveShadow
							geometry={nodes.Plane040_1.geometry}
							material={materials["Iphone Gold"]}
						/>
						<mesh
							name='Plane040_2'
							castShadow
							receiveShadow
							geometry={nodes.Plane040_2.geometry}
							material={materials["Iphone BACK"]}
						/>
						<mesh
							name='IphoneScreen001'
							castShadow
							receiveShadow
							geometry={nodes.IphoneScreen001.geometry}
							material={materials.Screen}
							position={[0, 0.001, 0]}
							scale={0.973}
						/>
					</group>
					<mesh
						name='MonitorStand009'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand009.geometry}
						material={materials["Material.001"]}
						position={[-18.906, 2.171, -3.654]}
					/>
					<mesh
						name='MonitorStand010'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand010.geometry}
						material={materials["Material.001"]}
						position={[-18.906, 2.171, -3.654]}
					/>
					<mesh
						name='MonitorStand011'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand011.geometry}
						material={materials["Material.001"]}
						position={[-18.906, 2.171, -3.654]}
					/>
					<mesh
						name='MonitorStand012'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand012.geometry}
						material={materials["Material.001"]}
						position={[-18.906, 2.171, -3.654]}
					/>
					<mesh
						name='MonitorStand013'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand013.geometry}
						material={materials["Material.001"]}
						position={[-18.906, 2.171, -3.654]}
					/>
					<mesh
						name='MonitorStand014'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand014.geometry}
						material={materials["Material.001"]}
						position={[-16.302, 2.171, -3.632]}
					/>
					<mesh
						name='MonitorStand015'
						castShadow
						receiveShadow
						geometry={nodes.MonitorStand015.geometry}
						material={materials["Material.001"]}
						position={[-21.541, 2.171, -3.632]}
					/>
					<group
						name='PcCase001'
						position={[-15.202, 0.608, -2.965]}
						rotation={[0, 1.57, 0]}>
						<mesh
							name='Cube005'
							castShadow
							receiveShadow
							geometry={nodes.Cube005.geometry}
							material={materials.PcCase}
						/>
						<mesh
							name='Cube005_1'
							castShadow
							receiveShadow
							geometry={nodes.Cube005_1.geometry}
							material={materials.TransparentMaterial}
						/>
						<mesh
							name='Cube005_2'
							castShadow
							receiveShadow
							geometry={nodes.Cube005_2.geometry}
							material={materials["Waterpump MATERIAL"]}
						/>
						<mesh
							name='Cube005_3'
							castShadow
							receiveShadow
							geometry={nodes.Cube005_3.geometry}
							material={materials.EmissionLight1}
						/>
						<mesh
							name='Cube005_4'
							castShadow
							receiveShadow
							geometry={nodes.Cube005_4.geometry}
							material={materials["Material.001"]}
						/>
						<mesh
							name='Cube005_5'
							castShadow
							receiveShadow
							geometry={nodes.Cube005_5.geometry}
							material={materials.Material}
						/>
					</group>
					<group
						name='screenflip002'
						position={[-21.845, 2.906, -2.867]}
						rotation={[-1.241, 0.035, 2.232]}
						scale={0.153}
					/>
					<group
						name='screenflip003'
						position={[-22.155, 2.213, -2.557]}
						rotation={[0.014, 0, 0]}
						scale={0.155}>
						<group
							name='screen002'
							position={[-1.661, 1.74, -1.843]}
							rotation={[1.568, -0.009, -0.655]}
							scale={0.716}>
							<mesh
								name='Cube006'
								castShadow
								receiveShadow
								geometry={nodes.Cube006.geometry}
								material={materials["aluminium.001"]}
							/>
							<mesh
								name='Cube006_1'
								castShadow
								receiveShadow
								geometry={nodes.Cube006_1.geometry}
								material={materials["matte.002"]}
							/>
						</group>
						<mesh
							name='screen003'
							castShadow
							receiveShadow
							geometry={nodes.screen003.geometry}
							material={materials["matte.002"]}
							position={[-1.661, 1.74, -1.843]}
							rotation={[1.568, -0.009, -0.655]}
							scale={0.716}
						/>
					</group>
					<mesh
						name='keyboard001'
						castShadow
						receiveShadow
						geometry={nodes.keyboard001.geometry}
						material={materials["keys.001"]}
						position={[-22.044, 2.162, -2.685]}
						rotation={[0, 0.655, 0]}
						scale={0.111}
					/>
					<group
						name='base001'
						position={[-22.206, 2.151, -2.569]}
						rotation={[0, 0.655, 0]}
						scale={0.111}>
						<mesh
							name='Cube008'
							castShadow
							receiveShadow
							geometry={nodes.Cube008.geometry}
							material={materials["aluminium.001"]}
						/>
						<mesh
							name='Cube008_1'
							castShadow
							receiveShadow
							geometry={nodes.Cube008_1.geometry}
							material={materials["trackpad.001"]}
						/>
					</group>
					<mesh
						name='touchbar001'
						castShadow
						receiveShadow
						geometry={nodes.touchbar001.geometry}
						material={materials["touchbar.001"]}
						position={[-22.354, 2.159, -2.761]}
						rotation={[0, 0.655, 0]}
						scale={0.111}
					/>
					<mesh
						name='RightBottomScreen001'
						castShadow
						receiveShadow
						geometry={nodes.RightBottomScreen001.geometry}
						material={materials.Screen}
						position={[-17.736, 2.994, -3.706]}
						rotation={[1.507, -0.008, 0.125]}
					/>
					<mesh
						name='LeftBottomScreen001'
						castShadow
						receiveShadow
						geometry={nodes.LeftBottomScreen001.geometry}
						material={materials.Screen}
						position={[-20.106, 2.995, -3.677]}
						rotation={[1.507, 0.004, -0.166]}
					/>
					<mesh
						name='RightTopScreen001'
						castShadow
						receiveShadow
						geometry={nodes.RightTopScreen001.geometry}
						material={materials.Screen}
						position={[-15.112, 4.526, -3.621]}
						rotation={[Math.PI / 2, 0, 0.175]}
					/>
					<mesh
						name='MiddleTopScreen001'
						castShadow
						receiveShadow
						geometry={nodes.MiddleTopScreen001.geometry}
						material={materials.Screen}
						position={[-18.868, 4.528, -3.862]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='LeftTopScreen001'
						castShadow
						receiveShadow
						geometry={nodes.LeftTopScreen001.geometry}
						material={materials.Screen}
						position={[-22.65, 4.54, -3.65]}
						rotation={[Math.PI / 2, 0, -0.141]}
					/>
					<group
						name='Table001_Baked'
						position={[-18.703, 1.877, -2.971]}>
						<mesh
							name='Plane081'
							castShadow
							receiveShadow
							geometry={nodes.Plane081.geometry}
							material={materials.wood_table_001}
						/>
						<mesh
							name='Plane081_1'
							castShadow
							receiveShadow
							geometry={nodes.Plane081_1.geometry}
							material={materials.Tableleg}
						/>
					</group>
				</group>
			</group>
		</>
	);
}

useGLTF.preload("/Adrians_Station.glb");
