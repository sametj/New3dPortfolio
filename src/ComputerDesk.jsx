import { useEffect, useRef, useState } from "react";
import {
  CameraControls,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import Welcome from "./screens/Welcome";
import { useFrame, useThree } from "@react-three/fiber";
import { log } from "three/examples/jsm/nodes/Nodes.js";
// import { screenContext } from "./App";

export default function ComputerDesk(props) {
  const { nodes, materials } = useGLTF("/Computer_Station.glb");
  const [activeScreen, setActiveScreen] = useState();
  const [active, setActive] = useState(false);
  const cameraRef = useRef();
  const RightTopMonitorScreen = useRef();
  const MiddleTopMonitorScreen = useRef();
  const LeftTopMonitorScreen = useRef();
  const LeftBottomMonitorScreen = useRef();
  const RightBottomMonitorScreen = useRef();

  const doSomething = (ref) => {
    setActiveScreen(ref.current);
    setActive(true);
  };
  const { camera } = useThree();

  useFrame(() => {
    if (!active) {
      return;
    } else {
      cameraRef.current?.fitToBox(activeScreen, true, {
        paddingLeft: 0.3,
        paddingRight: 0.3,
      });
    }
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        // camera.position.set(0, 3, 5);
        cameraRef.current?.reset(true);
        // cameraRef.current?.moveTo(0, 3, 5);
        setActive(false);
      }
    };

    console.log(cameraRef.current);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <CameraControls
        maxDistance={4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        ref={cameraRef}
      />

      <group {...props} dispose={null}>
        <group name="Scene">
          <group
            name="screenflip"
            position={[-3.142, 2.906, -2.867]}
            rotation={[-1.241, 0.035, 2.232]}
            scale={0.153}
          />
          <group
            name="screenflip001"
            position={[-3.452, 2.213, -2.557]}
            rotation={[0.014, 0, 0]}
            scale={0.155}
          >
            <group
              name="screen"
              position={[-1.661, 1.74, -1.843]}
              rotation={[1.568, -0.009, -0.655]}
              scale={0.716}
            >
              <mesh
                name="Cube012"
                castShadow
                receiveShadow
                geometry={nodes.Cube012.geometry}
                material={materials["aluminium.001"]}
              />
              <mesh
                name="Cube012_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube012_1.geometry}
                material={materials["matte.002"]}
              />
            </group>
          </group>
          <mesh
            name="keyboard"
            castShadow
            receiveShadow
            geometry={nodes.keyboard.geometry}
            material={materials["keys.001"]}
            position={[-3.341, 2.162, -2.685]}
            rotation={[0, 0.655, 0]}
            scale={0.111}
          />
          <group
            name="base"
            position={[-3.502, 2.151, -2.569]}
            rotation={[0, 0.655, 0]}
            scale={0.111}
          >
            <mesh
              name="Cube014"
              castShadow
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials["aluminium.001"]}
            />
            <mesh
              name="Cube014_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube014_1.geometry}
              material={materials["trackpad.001"]}
            />
          </group>
          <mesh
            name="touchbar"
            castShadow
            receiveShadow
            geometry={nodes.touchbar.geometry}
            material={materials["touchbar.001"]}
            position={[-3.65, 2.159, -2.761]}
            rotation={[0, 0.655, 0]}
            scale={0.111}
          />
          <group name="Table" position={[0, 1.877, -2.974]}>
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials.oak_veneer_01}
            />
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials["Table LEG"]}
            />
          </group>
          <mesh
            name="MonitorStand"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand.geometry}
            material={materials["Material.001"]}
            position={[-0.203, 2.171, -3.654]}
          />
          <mesh
            onClick={(ref) => doSomething(LeftBottomMonitorScreen)}
            ref={LeftBottomMonitorScreen}
            name="LeftBottomMonitor"
            castShadow
            receiveShadow
            geometry={nodes.LeftBottomMonitor.geometry}
            material={materials["Material.001"]}
            position={[-1.402, 2.995, -3.679]}
            rotation={[1.507, 0.004, -0.166]}
          >
            <Html>
              <div>Hello</div>
            </Html>
          </mesh>
          <mesh
            onClick={(ref) => doSomething(RightBottomMonitorScreen)}
            ref={RightBottomMonitorScreen}
            name="RightBottomMonitor"
            castShadow
            receiveShadow
            geometry={nodes.RightBottomMonitor.geometry}
            material={materials["Material.001"]}
            position={[0.967, 2.995, -3.713]}
            rotation={[1.507, -0.008, 0.125]}
          >
            <Html>
              <div>Hello</div>
            </Html>
          </mesh>
          <mesh
            onClick={(ref) => doSomething(RightTopMonitorScreen)}
            ref={RightTopMonitorScreen}
            name="RightTopMonitor"
            castShadow
            receiveShadow
            geometry={nodes.RightTopMonitor.geometry}
            material={materials["Material.001"]}
            position={[3.591, 4.526, -3.628]}
            rotation={[Math.PI / 2, 0, 0.175]}
          >
            <Html>
              <div>Hello</div>
            </Html>
          </mesh>
          <mesh
            onClick={(ref) => doSomething(LeftTopMonitorScreen)}
            ref={LeftTopMonitorScreen}
            name="LeftTopMonitor"
            castShadow
            receiveShadow
            geometry={nodes.LeftTopMonitor.geometry}
            material={materials["Material.001"]}
            position={[-3.946, 4.54, -3.651]}
            rotation={[Math.PI / 2, 0, -0.141]}
          >
            <Html>
              <div>Hello</div>
            </Html>
          </mesh>
          <mesh
            onClick={(ref) => doSomething(MiddleTopMonitorScreen)}
            ref={MiddleTopMonitorScreen}
            name="MiddleTopMonitor"
            castShadow
            receiveShadow
            geometry={nodes.MiddleTopMonitor.geometry}
            material={materials["Material.001"]}
            position={[-0.164, 4.528, -3.865]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <Html>
              <Welcome />
            </Html>
          </mesh>
          <mesh
            name="MousePad"
            castShadow
            receiveShadow
            geometry={nodes.MousePad.geometry}
            material={materials.MousePad}
            position={[-0.296, 2.122, -2.689]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
          />
          <mesh
            name="Mouse"
            castShadow
            receiveShadow
            geometry={nodes.Mouse.geometry}
            material={materials.MousePad}
            position={[0.448, 2.178, -2.663]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
          />
          <mesh
            name="Keyboard"
            castShadow
            receiveShadow
            geometry={nodes.Keyboard.geometry}
            material={materials.RigMaterial}
            position={[-0.735, 2.168, -2.925]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
          >
            <mesh
              name="KeyCaps"
              castShadow
              receiveShadow
              geometry={nodes.KeyCaps.geometry}
              material={materials.KeYBOARD}
              position={[-0.037, 0.106, -0.688]}
              rotation={[0, 0, 0.086]}
            />
          </mesh>
          <mesh
            name="HeadphoneSTAND"
            castShadow
            receiveShadow
            geometry={nodes.HeadphoneSTAND.geometry}
            material={materials["Material.001"]}
            position={[3.245, 2.179, -3.414]}
          />
          <mesh
            name="DeskHeadphone"
            castShadow
            receiveShadow
            geometry={nodes.DeskHeadphone.geometry}
            material={materials.Headphones}
            position={[3.241, 2.448, -3.108]}
            rotation={[-2.914, 1.52, 2.931]}
          />
          <group
            name="Book"
            position={[-2.689, 2.198, -2.891]}
            scale={[1, 0.367, 1]}
          >
            <mesh
              name="Cube"
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              material={materials.MousePad}
            />
            <mesh
              name="Cube_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube_1.geometry}
              material={materials.Paper}
            />
          </group>
          <group
            name="Book001"
            position={[-2.375, 2.213, -2.891]}
            rotation={[0.006, 0.006, -0.152]}
            scale={[0.96, 0.424, 1]}
          >
            <mesh
              name="Cube001"
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials.Book1}
            />
            <mesh
              name="Cube001_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube001_1.geometry}
              material={materials.Paper}
            />
          </group>
          <group name="Plane" position={[2.037, 2.142, -2.549]}>
            <mesh
              name="Plane022"
              castShadow
              receiveShadow
              geometry={nodes.Plane022.geometry}
              material={materials.Screen}
            />
            <mesh
              name="Plane022_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_1.geometry}
              material={materials["Iphone Gold"]}
            />
            <mesh
              name="Plane022_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_2.geometry}
              material={materials["Iphone BACK"]}
            />
          </group>
          <mesh
            name="MonitorStand001"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand001.geometry}
            material={materials["Material.001"]}
            position={[-0.203, 2.171, -3.654]}
          />
          <mesh
            name="MonitorStand002"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand002.geometry}
            material={materials["Material.001"]}
            position={[-0.203, 2.171, -3.654]}
          />
          <mesh
            name="MonitorStand003"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand003.geometry}
            material={materials["Material.001"]}
            position={[-0.203, 2.171, -3.654]}
          />
          <mesh
            name="MonitorStand004"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand004.geometry}
            material={materials["Material.001"]}
            position={[-0.203, 2.171, -3.654]}
          />
          <mesh
            name="MonitorStand005"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand005.geometry}
            material={materials["Material.001"]}
            position={[-0.203, 2.171, -3.654]}
          />
          <mesh
            name="MonitorStand006"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand006.geometry}
            material={materials["Material.001"]}
            position={[2.402, 2.171, -3.632]}
          />
          <mesh
            name="MonitorStand007"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand007.geometry}
            material={materials["Material.001"]}
            position={[-2.837, 2.171, -3.632]}
          />
          <group
            name="PcCase"
            position={[3.501, 0.608, -2.969]}
            rotation={[0, 1.57, 0]}
          >
            <mesh
              name="Cube002"
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials.PcCase}
            />
            <mesh
              name="Cube002_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials.TransparentMaterial}
            />
            <mesh
              name="Cube002_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_2.geometry}
              material={materials["Waterpump MATERIAL"]}
            />
            <mesh
              name="Cube002_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_3.geometry}
              material={materials.EmissionLight1}
            />
            <mesh
              name="Cube002_4"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_4.geometry}
              material={nodes.Cube002_4.material}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/Computer_Station.glb");
