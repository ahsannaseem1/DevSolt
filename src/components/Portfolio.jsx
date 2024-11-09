import React from "react";
import webdev from "../assets/website.jpg";
import mbldev from "../assets/mbl.jpg";
import uiux from "../assets/uiux2.jpg";
import digital from "../assets/digital.jpg";
import ecom from "../assets/e-commerce.png";

import Reveal from "./Reveal";

const projects = [
  {
    img: webdev,
    title: "Web Development",
    description:
      "Our team builds responsive, high-performance websites using a range of technologies, including React.js, Tailwind CSS, and the full MERN stack (MongoDB, Express.js, React, Node.js). We focus on creating fast, intuitive web experiences that are optimized for scalability and cross-device compatibility.",
  },
  {
    img: mbldev,
    title: "App Development",
    description:
      "We develop mobile applications tailored to your needs, using technologies like React Native for cross-platform compatibility, and Flutter for seamless Android and iOS experiences. Our apps are designed to be user-centric, prioritizing functionality and ease of use.",
  },
  {
    img: uiux,
    title: "UI/UX Design",
    description:
      "Our designers use Figma and Adobe XD to craft visually engaging, user-friendly interfaces. With a focus on intuitive design principles, we ensure that each project offers an exceptional user experience, balancing aesthetics with seamless navigation.",
  },
  {
    img: ecom,
    title: "E-Commerce Websites",
    description:
      "We create e-commerce platforms that drive conversions, utilizing Shopify for streamlined storefronts and the MERN stack for fully customizable solutions. Our e-commerce sites are optimized for performance, security, and scalability, with integration options for a range of payment and inventory management systems.",
  },
  {
    img: digital,
    title: "Digital Marketing",
    description:
      "Our digital marketing team leverages a comprehensive approach to grow your online presence. We specialize in SEO optimization, social media strategy, content marketing, and targeted advertising across platforms like Google, Facebook, and Instagram. Our strategies are designed to increase brand visibility, drive targeted traffic, and enhance engagement, all while focusing on delivering measurable results and a high ROI.",
  },
  
];

const Portfolio = () => {
  return (
    <div className="w-full px-10" id="portfolio">
      <div className="w-full max-w-[1300px] mx-auto">
        {/* <h2 className="text-3xl font-bold text-center text-gray-200 mb-8">Services</h2> */}
        <Reveal>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-12 `}
          >
            <div className="w-full md:w-1/2 mx-auto">
              <img
                src={project.img}
                alt={project.title}
                className="w-full max-h-[550px] max-w-[550px] mx-auto object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2 p-4 flex flex-col md:justify-center">
              <h3 className="md:text-3xl text-3xl text-center md:text-left font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="hidden sm:block text-gray-300 mb-4 text-left tracking-tight text-lg">{project.description}</p>
            </div>
          </div>
        ))}
        </Reveal>
      </div>
    </div>
  );
};

export default Portfolio;
