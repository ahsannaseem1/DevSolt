import React from "react";
import smarthrm from "../assets/smarthrm1.jpg";
import vlcdaycare from "../assets/vlcdaycare1.png";
import londontownusa from "../assets/londontown.png";
import qurankareem from "../assets/quran-kareem1.png";
import { AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: smarthrm,
    title: "Project #1",
    description:
      "Developed the frontend of my final year project using React Js and Tailwind CSS.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: vlcdaycare,
    title: "Project #2",
    description:
      "Developed the landing page for a day care and montessari club website using HTML, CSS & JavaScript.",
    links: {
      site: "https://vlcdaycare.netlify.app",
      github: "https://github.com/ahsannaseem1/VLC-Day-Care-Website",
    },
  },
  {
    img: londontownusa,
    title: "Project #3",
    description:
      "Developed the home page of an e-commerce website using HTML, CSS & JavaScript.",
    links: {
      site: "https://londontown.netlify.app",
      github: "#",
    },
  },
  {
    img: qurankareem,
    title: "Project #4",
    description:
      "Developed a single page website that displays verses from Quran using HTML, CSS & JavaScript.",
    links: {
      site: "https://quraan-kareem.netlify.app",
      github: "https://github.com/ahsannaseem1/Quran-Kareem",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12 `}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full border border-gray-600 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center ">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4 ">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  target="blank"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="flex gap-2 px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 items-center"
                  target="blank"
                >
                  <AiFillGithub /> Github
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
