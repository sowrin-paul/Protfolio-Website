import React from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Plane, useTexture } from "@react-three/drei";
import * as THREE from "three";

function generateStripedCanvas() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const strapWidth = 16;
  for (let i = 0; i < size / strapWidth; i++) {
    ctx.fillStyle = i % 2 === 0 ? "#0000" : "#fff";
    ctx.fillRect(i * strapWidth, 0, strapWidth, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 6);
  return texture;
}

const IDCard = () => {
  const logoTexture = useTexture("/logo.svg");
  const cardRef = React.useRef();

  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.002;
    }
  });

  const stripeTexture = React.useMemo(() => {
    return generateStripedCanvas();
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {/* Strap with striped texture */}
      <mesh position={[0, 7, 0]}>
        <boxGeometry args={[0.2, 12, 0.05]} />
        <meshStandardMaterial map={stripeTexture} />
      </mesh>

      {/* Hook/Connector */}
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[0.35, 0.08, 16, 100]} />
        <meshStandardMaterial color="#b0b0b0" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ID Card */}
      <mesh ref={cardRef} position={[0, -2, 0]} renderOrder={1}>
        <boxGeometry args={[6, 12, 0.2]} />
        <meshStandardMaterial color="black" />

        {/* Top-left logo */}
        <Plane args={[1.5, 1.5]} position={[-1.5, 4.2, 0.11]}>
          <meshBasicMaterial map={logoTexture} transparent />
        </Plane>

        {/* Name bottom-left */}
        <Text
          fontSize={0.5}
          color="white"
          position={[-2, -4.5, 0.11]}
          anchorX="left"
          anchorY="bottom"
        >
          Sowrin Paul
        </Text>

        {/* Vertical S O P letters */}
        {["W", "E", "B", "D", "E", "V"].map((char, i) => (
          <Text
            key={char}
            fontSize={0.7}
            color="white"
            position={[2, 5 - i * 2, 0.11]}
            rotation={[0, 0, Math.PI / 2]}
            anchorX="center"
            anchorY="middle"
          >
            {char}
          </Text>
        ))}
      </mesh>
    </group>
  );
};

export default IDCard;