import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
// import profilepic from "../assets/profilepic1.png";
import resume from "../assets/ahsan.pdf";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mt-40 max-w-[1300px] mx-auto relative" id="home">
      <div className="grid place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto"
        >
          <TypeAnimation
            sequence={["Software Engineer", 1000,"Front End Developer", 1000,]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-2xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-4xl text-3xl tracking-tight mb-4 mt-4"
          >
            Hey! I'm <br />
            <span className="text-purple-500 sm:text-center lg:text-left text-5xl md:text-7xl">Ahsan Naseem</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-xl text-md mb-6 md:text-center"
          >
            Software Engineer from COMSATS Univeristy Lahore, currently working as a front-end developer intern at Savvy Programmers.
          </motion.p>
          <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-xl text-md mb-6 md:text-center" 
          >
          <FiMapPin size={15} color="white" className="inline-block mb-1 mx-2" />Lahore, Pakistan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row justify-center items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-semibold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              <a href={resume} download={resume}>
                Download Resume
              </a>
            </motion.button>

            <div className="flex gap-6 flex-row text-3xl md:text-5xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/ahsannaseem1"
                target="blank"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://pk.linkedin.com/in/ahsan-naseem-779075253"
                target="blank"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/ahsanzart/"
                target="blank"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* <motion.img
          src={profilepic}
          className="w-[100px] md:w-[400px]"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          loading="lazy"
        ></motion.img> */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >

        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={100}/>
      </div>
    </div>
  );
};

export default Home;
