import { Html, useProgress } from "@react-three/drei";
import { progress } from "framer-motion";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span className="canvas-load"></span>
            <p
                style={{
                    fontSize: 14,
                    color: '#f1f1f1',
                    fontWeight: 800,
                    marginTop: '40px',
                }}
            >{progress.toFixed(2)}%</p>
        </Html>
    );
}

export default CanvasLoader;