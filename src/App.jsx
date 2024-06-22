import { useThree } from "@react-three/fiber";
import ComputerDesk from "./ComputerDesk";

import { Center, Stage } from "@react-three/drei";
import AdrianDesk from "./AdriansDesk";

function App() {
  const { viewPort } = useThree();

  return (
    <>
      <ambientLight intensity={1} />
      <Center>
        <Stage environment={"apartment"} intensity={1}>
          {/* <ComputerDesk scale={0.8} /> */}
          <AdrianDesk scale={1.3} />
        </Stage>
      </Center>
    </>
  );
}

export default App;
