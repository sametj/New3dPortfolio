import { useThree } from "@react-three/fiber";
import {
  CameraControls,
  Center,
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import AdrianDesk from "./AdriansDesk";

function App() {
  return (
    <>
      <ambientLight intensity={1} />
      <Center>
        <Stage environment={"apartment"} intensity={1}>
          <AdrianDesk scale={1} />
        </Stage>
      </Center>
    </>
  );
}

export default App;
