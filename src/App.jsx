import { Center, useHelper } from "@react-three/drei";

import { Perf } from "r3f-perf";

import Desk from "./components/NewDesk2";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

function App() {
  const directionalLight = useRef();
  const directionalLight2 = useRef();
  useHelper(directionalLight, DirectionalLightHelper, "blue");
  useHelper(directionalLight2, DirectionalLightHelper, "blue");

  return (
    <>
      <ambientLight intensity={2} />
      <Perf />
      <directionalLight intensity={5} position={[-5, 10, 20]} />
      <directionalLight intensity={5} position={[5, 10, 20]} />
      <Center>
        <Desk />
      </Center>
    </>
  );
}

export default App;
