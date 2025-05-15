import React from "react";
import { Text, Image, RoundedBox } from "@react-three/drei";

const CardTexture = ({ firstName, lastName, profilePicture }) => (
  <group>
    {/* Profile Picture (circle, top-left) */}
    <group position={[-2.2, 4.0, 0]}>
      <mesh>
        <circleGeometry args={[0.9, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <Image
        url={profilePicture}
        scale={[1.7, 1.7]}
        position={[0, 0, 0.01]}
        transparent
      />
    </group>

    {/* Large, bold vertical initials/letters in the center */}
    <Text
      fontSize={2.2}
      color="white"
      position={[0, 1.2, 0]}
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter-Bold.woff"
      letterSpacing={-0.1}
    >
      {firstName?.[0]?.toUpperCase() || "S"}
    </Text>
    <Text
      fontSize={2.2}
      color="white"
      position={[0, -1.2, 0]}
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter-Bold.woff"
      letterSpacing={-0.1}
    >
      {lastName?.[0]?.toUpperCase() || "P"}
    </Text>

    {/* Name at bottom-left */}
    <Text
      fontSize={0.5}
      color="white"
      position={[-2.2, -4.2, 0]}
      anchorX="left"
      anchorY="bottom"
      font="/fonts/Inter-Bold.woff"
    >
      {firstName} {lastName}
    </Text>
  </group>
);

export default CardTexture;