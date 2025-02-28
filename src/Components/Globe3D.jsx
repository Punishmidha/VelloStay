import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import earthTexture from "../assets/earth.jpg";

const Globe3D = () => {
  const texture = useLoader(TextureLoader, earthTexture);
  const globeRef = useRef();

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10} />
      <Sphere ref={globeRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </Canvas>
  );
};

export default Globe3D;
