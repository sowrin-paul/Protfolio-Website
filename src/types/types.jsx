import { RigidBody as RigidBodyForge } from "@dimforge/rapier3d-compat";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

interface CardProps { maxSpeed?: number; minSpeed?: number; }

interface RigidBodyType extends RigidBodyForge {
    lerped?: THREE.Vector3;
    setAngvel(vel: Vector, wakeUp?: boolean): void;
    setTranslation(tra: Vector, wakeUp?: boolean): void;
}

interface MeshLineMesh extends THREE.Mesh {
    geometry: MeshLineGeometry;
    material: MeshLineMaterial;
}

interface GLTF {
    nodes: { [key: string]: THREE.Mesh; };
    materials: { [key: string]: THREE.MeshPhysicalMaterial; };
}

interface User {
    firstName: string;
    lastName: string;
    userId: string;
    batch: string;
    batchId: string;
    date: string;
    profilePicture: string;
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        meshLineGeometry: ReactThreeFiber.Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
        meshLineMaterial: ReactThreeFiber.Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
        roundedPlaneGeometry: ReactThreeFiber.Object3DNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>;
    }
}
