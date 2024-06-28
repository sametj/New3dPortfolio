import React, { useEffect, useRef, useState } from "react";
import { CameraControls, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Projects from "../pages/Projects/Projects";

export default function Desk(props) {
  const { nodes, materials } = useGLTF("/AdrianDesk1.glb");
  const [activeScreen, setActiveScreen] = useState();
  const [active, setActive] = useState(false);
  const cameraRef = useRef();
  const RightMonitorScreen = useRef();
  const MiddleMonitorScreen = useRef();
  const LeftMonitorScreen = useRef();

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
      cameraRef.current?.fitToSphere(activeScreen, true);

      // const onRest = () => {
      //   if (cameraRef.current) {
      //     cameraRef.current.enabled = false;
      //     cameraRef.current.removeEventListener("rest", onRest);
      //   }
      // };
      // cameraRef.current.addEventListener("rest", onRest);
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
        maxDistance={7}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        ref={cameraRef}
      />
      <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="MonitorStand026"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand026.geometry}
            material={materials["Material.001"]}
            position={[-119.454, 2.958, -12.714]}
            scale={1.356}
          />
          <mesh
            name="MonitorStand028"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand028.geometry}
            material={materials["Material.001"]}
            position={[-119.359, 2.549, -12.93]}
            scale={1.065}
          />
          <mesh
            name="Mouse007"
            castShadow
            receiveShadow
            geometry={nodes.Mouse007.geometry}
            material={materials["Material.003"]}
            position={[-118.297, 2.982, -9.547]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
            scale={1.734}
          />
          <mesh
            name="MousePad007"
            castShadow
            receiveShadow
            geometry={nodes.MousePad007.geometry}
            material={materials.MousePad}
            position={[-119.587, 2.885, -9.593]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
            scale={1.734}
          />
          <mesh
            name="Keyboard007"
            castShadow
            receiveShadow
            geometry={nodes.Keyboard007.geometry}
            material={materials.RigMaterial}
            position={[-120.179, 2.968, -9.918]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
            scale={1.428}
          >
            <mesh
              name="KeyCaps007"
              castShadow
              receiveShadow
              geometry={nodes.KeyCaps007.geometry}
              material={materials.KeYBOARD}
              position={[-0.037, 0.106, -0.688]}
              rotation={[0, 0, 0.086]}
            />
          </mesh>
          <group name="Plane007" position={[-119.817, 0.054, -10.81]}>
            <mesh
              name="Plane123"
              castShadow
              receiveShadow
              geometry={nodes.Plane123.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              name="Plane123_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane123_1.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            name="Sword001"
            position={[-116.155, 8.014, -12.936]}
            rotation={[2.49, 0, 1.565]}
            scale={4.777}
          >
            <mesh
              name="Blade001"
              castShadow
              receiveShadow
              geometry={nodes.Blade001.geometry}
              material={materials.Blade}
            />
            <mesh
              name="Dół001"
              castShadow
              receiveShadow
              geometry={nodes.Dół001.geometry}
              material={materials.Dół}
            />
            <mesh
              name="Guard001"
              castShadow
              receiveShadow
              geometry={nodes.Guard001.geometry}
              material={materials.Guard}
            />
            <mesh
              name="Handle001"
              castShadow
              receiveShadow
              geometry={nodes.Handle001.geometry}
              material={materials.Handle}
            />
          </group>
          <group
            name="CenterScreen001"
            position={[-119.372, 4.65, -12.972]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={6.927}
          >
            <mesh
              name="IMG_3854011"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854011.geometry}
              material={materials.IMG_3854}
            />
            <mesh
              name="IMG_3854011_1"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854011_1.geometry}
              material={materials["Material.153"]}
            />
            <mesh
              name="IMG_3854011_2"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854011_2.geometry}
              material={materials["Material.152"]}
            />
            <mesh
              name="IMG_3854011_3"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854011_3.geometry}
              material={materials["Material.151"]}
            />
            <mesh
              name="IMG_3854011_4"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854011_4.geometry}
              material={materials["Screen.002"]}
              ref={MiddleMonitorScreen}
            >
              <Html
                prepend
                rotation-x={-Math.PI / 2}
                position={[0, 0.02, 0]}
                transform
                occlude
                scale={0.02}
              >
                <Welcome
                  setMonitor={setMonitor}
                  screenRef={MiddleMonitorScreen}
                />
              </Html>
            </mesh>
            <mesh
              name="IMG_3854011_5"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854011_5.geometry}
              material={materials.lg}
            />
          </group>
          <group
            name="LeftScreen001"
            position={[-123.586, 4.65, -12.178]}
            rotation={[1.571, 0, -0.349]}
            scale={6.927}
          >
            <mesh
              name="IMG_3854012"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854012.geometry}
              material={materials.IMG_3854}
            />
            <mesh
              name="IMG_3854012_1"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854012_1.geometry}
              material={materials["Material.153"]}
            />
            <mesh
              name="IMG_3854012_2"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854012_2.geometry}
              material={materials["Material.152"]}
            />
            <mesh
              name="IMG_3854012_3"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854012_3.geometry}
              material={materials["Material.151"]}
            />
            <mesh
              name="IMG_3854012_4"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854012_4.geometry}
              material={materials["Screen.002"]}
              ref={LeftMonitorScreen}
            >
              <Html
                prepend
                rotation-x={-Math.PI / 2}
                position={[0, 0.02, 0]}
                transform
                occlude
                scale={0.02}
              >
                <About setMonitor={setMonitor} screenRef={LeftMonitorScreen} />
              </Html>
            </mesh>
            <mesh
              name="IMG_3854012_5"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854012_5.geometry}
              material={materials.lg}
            />
          </group>
          <group
            name="RightScreen001"
            position={[-115.183, 4.65, -12.178]}
            rotation={[1.571, 0, 0.349]}
            scale={6.927}
          >
            <mesh
              name="IMG_3854013"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854013.geometry}
              material={materials.IMG_3854}
            />
            <mesh
              name="IMG_3854013_1"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854013_1.geometry}
              material={materials["Material.153"]}
            />
            <mesh
              name="IMG_3854013_2"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854013_2.geometry}
              material={materials["Material.152"]}
            />
            <mesh
              name="IMG_3854013_3"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854013_3.geometry}
              material={materials["Material.151"]}
            />
            <mesh
              name="IMG_3854013_4"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854013_4.geometry}
              material={materials["Screen.002"]}
              ref={RightMonitorScreen}
            >
              <Html
                prepend
                rotation-x={-Math.PI / 2}
                position={[0, 0.02, 0]}
                transform
                occlude
                scale={0.02}
              >
                <Projects
                  setMonitor={setMonitor}
                  screenRef={RightMonitorScreen}
                />
              </Html>
            </mesh>
            <mesh
              name="IMG_3854013_5"
              castShadow
              receiveShadow
              geometry={nodes.IMG_3854013_5.geometry}
              material={materials.lg}
            />
          </group>
          <mesh
            name="katana_stand_01002"
            castShadow
            receiveShadow
            geometry={nodes.katana_stand_01002.geometry}
            material={materials.katana_stand_01}
            position={[-119.34, 6.492, -13.198]}
            rotation={[-0.031, 0, 0]}
            scale={12.588}
          />
          <group
            name="coffe_table_120001"
            position={[-119.472, 2.824, -10.791]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={8.585}
          >
            <mesh
              name="Cube021"
              castShadow
              receiveShadow
              geometry={nodes.Cube021.geometry}
              material={materials.wood_table_001}
            />
            <mesh
              name="Cube021_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube021_1.geometry}
              material={materials.metal}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/AdrianDesk1.glb");