import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, modelPosition }) => {
  const computer = useGLTF("./hero3d/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.3} color="#fff1d6" groundColor="black" />

      <spotLight
        position={[-15, -3, -4]}
        color="rgb(214, 255, 255)"
        angle={34}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize={1024}
      />

      <spotLight
        position={[-18, -3, 3]}
        color="rgb(249, 255, 214)"
        angle={34}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={3} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 3}
        position={modelPosition}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // ✅ POSIÇÃO do modelo por modo (mantido)
  const modelPosition = isMobile ? [-2, -1, -2.2] : [-20, -6, 0];

  // ✅ TARGET responsivo derivado do modelPosition (mantém o giro “parado”)
  // mesma lógica do desktop: mesmo X/Z e Y um pouco mais alto
  const controlsTarget = [
    modelPosition[0],
    modelPosition[1] + 2.5, // "um pouco mais alto" (no desktop era -6 -> -2.5, diferença 3.5)
    modelPosition[2],
  ];

  return (
    <Canvas
      frameloop="always"   // ✅ necessário pro autoRotate funcionar
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={controlsTarget}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.6}
        />
        <Computers isMobile={isMobile} modelPosition={modelPosition} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
