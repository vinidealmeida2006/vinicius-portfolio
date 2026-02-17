import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, modelPosition }) => {
  const computer = useGLTF("/hero3d/scene.opt.glb");

  // ✅ Corrige geometrias com NaN e recomputa bounds (evita sumir/crash no mobile)
  useEffect(() => {
    if (!computer?.scene) return;

    computer.scene.traverse((obj) => {
      if (!obj.isMesh || !obj.geometry) return;

      const geo = obj.geometry;
      const posAttr = geo.attributes?.position;

      if (posAttr) {
        // remove NaN / Infinity no position
        for (let i = 0; i < posAttr.count; i++) {
          const x = posAttr.getX(i);
          const y = posAttr.getY(i);
          const z = posAttr.getZ(i);

          if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
            posAttr.setXYZ(i, 0, 0, 0);
          }
        }
        posAttr.needsUpdate = true;
      }

      // recomputa bounds (onde estourou o erro)
      try {
        geo.computeBoundingBox();
        geo.computeBoundingSphere();
      } catch (e) {
        // fallback: se ainda assim der ruim, desabilita frustum culling desse mesh
        obj.frustumCulled = false;
      }
    });
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.3} color="#fff1d6" groundColor="black" />

      <spotLight
        position={[-15, -3, -4]}
        color="rgb(214, 255, 255)"
        angle={34}
        penumbra={1}
        intensity={50}
        castShadow={!isMobile}
        shadow-mapSize={1024}
      />

      <spotLight
        position={[-18, -3, 3]}
        color="rgb(249, 255, 214)"
        angle={34}
        penumbra={1}
        intensity={10}
        castShadow={!isMobile}
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
  const controlsTarget = [modelPosition[0], modelPosition[1] + 2.5, modelPosition[2]];

  return (
    <Canvas
      frameloop="always" // ✅ necessário pro autoRotate funcionar
      dpr={[1, 1.25]} // ✅ um pouco mais leve no mobile (você pode voltar pra 1.5 depois)
      camera={{ position: [20, 3, 5], fov: 25 }}
      // ✅ remove preserveDrawingBuffer (costuma estourar memória no mobile)
      gl={{ antialias: false, powerPreference: "high-performance" }}
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
