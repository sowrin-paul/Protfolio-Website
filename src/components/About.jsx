import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px]
                        rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt="web-dev" className="w-16 h-16 object-contain" />
                
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px]
                            max-w-3xl leading-[30px]" 
            >
                I am a passionate Computer Science and Engineering student 
                with a strong foundation in web development and programming. 
                I specialize in creating dynamic, responsive web applications 
                using HTML, CSS, JavaScript, and React, and 
                I have hands-on experience in backend development with Python. 
                Through my projects, I've honed my skills in building efficient, 
                user-centric solutions that combine creativity with technical 
                expertise. I'm always eager to learn new technologies and take 
                on challenging problems, aiming to grow as a developer and contribute 
                to innovative projects.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                    {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(About, "about");