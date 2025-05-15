import * as THREE from "three";
import { RenderTexture, useGLTF, useTexture, Text } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { BallCollider, CuboidCollider, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useRef, useMemo } from "react";
import CardTexture from "./CardTexture";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/card.glb");
useTexture.preload("/band.png");

const segmentProps = { type: "dynamic", canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 };

const IDCard = ({ student: user, animationDuration = 4 }) => {
  const cardRef = useRef(null);
  const animationProgress = useRef(0);
  const startRotation = useRef(0);
  const targetRotation = useRef(0);
  const isRotating = useRef(false);

  const fixedPoint = useRef(null);
  const ropeTop = useRef(null);
  const ropeMiddle = useRef(null);
  const ropeBottom = useRef(null);
  const card = useRef(null);
  const bandLine = useRef(null);

  const { nodes, materials } = useGLTF("/card.glb");
  const texture = useTexture("/band.jpg");
  const { width, height } = useThree((state) => state.size);

  // Rope curve for meshline
  const curve = useMemo(() => {
    const c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 8, 0),
      new THREE.Vector3(0, 5, 0),
      new THREE.Vector3(0, 2, 0),
      new THREE.Vector3(0, -1, 0),
    ]);
    c.curveType = "chordal";
    return c;
  }, []);

  const tempVec = useMemo(() => new THREE.Vector3(), []);
  const tempVec2 = useMemo(() => new THREE.Vector3(), []);
  const cardAngVel = useMemo(() => new THREE.Vector3(), []);
  const cardRot = useMemo(() => new THREE.Vector3(), []);
  const strapTextPos = useRef([0, 0, 0]);
  const clampPos = nodes.clamp.geometry.boundingSphere?.center || new THREE.Vector3(0, 0, 0);
  if (ropeBottom.current) {
    const ropePos = ropeBottom.current.translation();
    ropePos.lerp(clampPos, 0.1);  // smooting factor
    curve.points[0].copy(ropePos);
  }

  useRopeJoint(fixedPoint, ropeTop, [[0, -0.5, 0], [0, 0, 0], 1]);
  useRopeJoint(ropeTop, ropeMiddle, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(ropeMiddle, ropeBottom, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(ropeBottom, card, [[0, 0, 0], [0, 1.45, 0]]);

  useMemo(() => { texture.wrapS = texture.wrapT = THREE.RepeatWrapping; }, [texture]);

  const elasticOut = (t) => {
    const p = .4;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  };

  const triggerRotation = () => {
    card.current?.setAngvel({ x: 0, y: 2, z: 0 }, true);
    const currentPos = card.current?.translation();
    card.current?.setTranslation({
      x: (currentPos?.x || 0) + (Math.random() - 0.5) * 0.6,
      y: (currentPos?.y || 0) - Math.random() * 0.1,
      z: (currentPos?.z || 0) + (Math.random() - 0.5) * 0.1,
    });

    const currentY = cardRef.current?.rotation.y ?? 0;
    startRotation.current = currentY;
    targetRotation.current = Math.round((currentY + Math.PI) / Math.PI) * Math.PI;

    animationProgress.current = 0;
    isRotating.current = true;
  };

  useFrame((_, delta) => {
    if (isRotating.current && cardRef.current) {
      animationProgress.current += delta;
      const progress = animationProgress.current / animationDuration;

      if (progress >= 1) {
        cardRef.current.rotation.y = targetRotation.current;
        isRotating.current = false;
      } else {
        const eased = elasticOut(progress);
        cardRef.current.rotation.y =
          startRotation.current + (targetRotation.current - startRotation.current) * eased;
      }
    }

    if (!fixedPoint.current) return;

    [ropeTop, ropeMiddle].forEach((ref) => {
      const curr = ref.current;
      if (!curr) return;
      const target = curr.translation();
      curr.lerped ??= tempVec.copy(target);
      const dist = curr.lerped.distanceTo(target);
      const t = 1 - Math.exp(-(10 + Math.min(dist, 1) * (50 - 10)) * delta);
      curr.lerped.lerp(target, t);
    });

    //  meshline curve points for the strap
    curve.points[0].copy(ropeBottom.current?.translation() || tempVec2);
    curve.points[1].copy(ropeMiddle.current?.translation() || tempVec2);
    curve.points[2].copy(ropeTop.current?.translation() || tempVec2);
    curve.points[3].copy(fixedPoint.current?.translation() || tempVec2);

    bandLine.current?.geometry.setPoints(curve.getPoints(64));

    const mid = curve.getPoint(0.5);
    strapTextPos.current = [mid.x, mid.y, mid.z + 0.2];

    cardAngVel.copy(card.current?.angvel() || tempVec2);
    cardRot.copy(card.current?.rotation() || tempVec2);
    card.current?.setAngvel({
      x: cardAngVel.x,
      y: cardAngVel.y - cardRot.y * 0.5,
      z: cardAngVel.z,
    });
  });

  return (
    <>
      <group position={[0, -4, 0]}>
        {/* Rope physics chain */}
        <RigidBody ref={fixedPoint} {...segmentProps} type="fixed" position={[0, 9, 0]} />
        <RigidBody ref={ropeTop} {...segmentProps} position={[0, 5, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={ropeMiddle} {...segmentProps} position={[0, 2, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={ropeBottom} {...segmentProps} position={[0, -1, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        {/* Card with clamp and texture */}
        <RigidBody ref={card} {...segmentProps} position={[0, -3.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group scale={3} position={[0, -2.125, -0.05]}>
            <group onClick={triggerRotation} ref={cardRef}>
              {/* Card mesh with RenderTexture */}
              <mesh geometry={nodes.card.geometry}>
                <meshPhysicalMaterial roughness={1} clearcoat={.5} clearcoatRoughness={1} metalness={.3}>
                  <RenderTexture colorSpace={THREE.SRGBColorSpace} attach="map" width={1024} height={1024}>
                    {/* <CardTexture
                      firstName={user?.firstName || ""}
                      lastName={user?.lastName || ""}
                      profilePicture={user?.profilePicture || ""}
                    /> */}
                  </RenderTexture>
                </meshPhysicalMaterial>
              </mesh>
              {/* Clamp model at slot */}
              <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            </group>
            {/* Optional: add a clip or extra clamp part if present in your model */}
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
          </group>
        </RigidBody>
      </group>

      {/* MeshLine strap */}
      <mesh ref={bandLine}>
        <meshLineGeometry />
        <meshLineMaterial
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-3, 1]}
          lineWidth={4}
          transparent={false}
        />
      </mesh>
    </>
  );
};

export default IDCard;
