import * as Three from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

import vertexShader from './shaders/vertexShader';
import fragmentShader from './shaders/fragmentShader';

const MovingPlane = () => {
  const mesh = useRef<Three.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe
      />
    </mesh>
  );
};

function App() {
  return (
    <Canvas camera={{ position: [1.0, 1.5, 1.0] }}>
      <MovingPlane />
      <axesHelper />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
