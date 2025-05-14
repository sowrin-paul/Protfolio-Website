import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Card = () => {
  const cardRef = useRef()
  useFrame(({ mouse }) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = mouse.x * 0.5
      cardRef.current.rotation.x = -mouse.y * 0.3
    }
  })

  const texture = useTexture('');

  return (
    <mesh ref={cardRef}>
      <boxGeometry args={[2, 3, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

const IDCard3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Card />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default IDCard3D
