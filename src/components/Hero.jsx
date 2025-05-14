import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { styles } from "../style";
import IDCard from "./IDCard";



const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10`}
            >
                {/* Left Side - Text */}
                <div className="flex flex-row items-start gap-5">
                    <div className="flex flex-col items-center justify-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#02a3eb]" />
                        <div className="w-1 sm:h-80 h-40 blue-gradient" />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className="text-[#02a3eb]">Sowrin</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I develop web applications, user
                            <br className="sm:block hidden" />
                            interfaces, and tune AI models for various tasks
                        </p>
                    </div>
                </div>

                {/* Right Side - 3D ID Card */}
                <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-10 md:mt-0">
                    <Canvas camera={{ position: [0, 0, 50], fov: 20 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 2, 5]} />
                        <IDCard />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
            </div>

            {/* Scroller */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;