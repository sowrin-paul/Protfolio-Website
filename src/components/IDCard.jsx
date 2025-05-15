import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Plane, useTexture, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function generateStripedCanvas() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const strapWidth = 16;
  for (let i = 0; i < size / strapWidth; i++) {
    ctx.fillStyle = "#0000";
    ctx.fillRect(i * strapWidth, 0, strapWidth, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 6);
  return texture;
}

const IDCard = () => {
  const logoTexture = useTexture("/logo.svg");
  const qrTexture = useTexture("/qrcode.png");
  const cardRef = React.useRef();

  const materials = useMemo(() => [
    new THREE.MeshStandardMaterial({ color: "black" }), // right
    new THREE.MeshStandardMaterial({ color: "black" }), // left
    new THREE.MeshStandardMaterial({ color: "black" }), // top
    new THREE.MeshStandardMaterial({ color: "black" }), // bottom
    new THREE.MeshStandardMaterial({ color: "black" }), // front
    new THREE.MeshStandardMaterial({ color: "white" }), // back
  ], []);

  // useFrame(() => {
  //   if (cardRef.current) {
  //     cardRef.current.rotation.y += 0.002;
  //   }
  // });

  const stripeTexture = React.useMemo(() => {
    return generateStripedCanvas();
  }, []);

  return (
    <group position={[0, -3.5, 0]}>
      {/* Strap with striped texture */}
      <mesh position={[0, 8.5, 0]}>
        <boxGeometry args={[0.7, 7, 0.05]} />
        <meshStandardMaterial map={stripeTexture} />
      </mesh>

      <Text
        fontSize={0.5}
        color="#02a3eb"
        position={[0, 9, 0.05]}
        rotation={[0, 0, Math.PI / 2]}
        anchorX="center"
        anchorY="middle"
      >
        sowrin | portfolio
      </Text>

      {/* Metalic connector */}
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.9, 20]} />
        <meshStandardMaterial color="#d1d5db" metalness={1} roughness={0.2} />
      </mesh>

      {/* Strap below the slot (inside the card) */}
      <mesh position={[0, 4.6, 0.13]}>
        <boxGeometry args={[0.5, 0.5, 0.05]} />
        <meshStandardMaterial map={stripeTexture} />
      </mesh>

      {/* ID Card */}
      <RoundedBox
        ref={cardRef}
        args={[6, 10, 0.2]}
        radius={0.3}
        smoothness={8}
        position={[0, 0, 0]}
        renderOrder={1}
        material={materials}
      >
        <meshStandardMaterial color="black" />

        {/* rectangular hole with rounded corners */}
        <RoundedBox
          args={[1.6, 0.25, 0.25]}
          radius={0.1}
          smoothness={4}
          position={[0, 4.6, 0.13]}
        >
          <meshStandardMaterial color="#222" />
        </RoundedBox>
        {/* Top-left logo */}
        <Plane args={[2, 2.3]} position={[-1.8, 3.7, 0.11]}>
          <meshBasicMaterial map={logoTexture} transparent />
        </Plane>

        {/* Name bottom-left */}
        <Text
          fontSize={0.5}
          color="white"
          position={[-2.1, -4, 0.11]}
          anchorX="left"
          anchorY="bottom"
        >
          Sowrin Paul
        </Text>

        {/* Vertical W E B D E V letters */}
        {["W", "E", "B", "D", "E", "V"].map((char, i) => (
          <Text
            key={char}
            fontSize={0.7}
            color="white"
            position={[2, 4.3 - i * 1.7, 0.11]}
            rotation={[0, 0, Math.PI / 2]}
            anchorX="center"
            anchorY="middle"
          >
            {char}
          </Text>
        ))}
        {/* Subtle border */}
        {/* <RoundedBox
          args={[6.1, 10.1, 0.22]}
          radius={0.32}
          smoothness={8}
          position={[0, 0, 0.12]}
        >
          
        </RoundedBox> */}
        <Plane
          args={[5, 5.7]}
          position={[0, 0, -0.11]}
          rotation={[0, Math.PI, 0]}
        >
          <meshBasicMaterial map={qrTexture} transparent />
        </Plane>
      </RoundedBox>
    </group>
  );
};

export default IDCard;