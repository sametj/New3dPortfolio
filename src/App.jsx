import { Center, OrbitControls, Stage } from "@react-three/drei";
import AdrianDesk from "./AdriansDesk";
import { Perf } from "r3f-perf";
import Desk from "./components/NewDesk";

function App() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <Perf />
      <directionalLight intensity={4} position={[2, 2, 2]} />
      <Center>
        <Desk position={[4, 0, 2]} />
      </Center>
    </>
  );
}

export default App;
