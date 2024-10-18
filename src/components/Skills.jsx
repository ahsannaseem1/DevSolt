import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Front-End",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "React Js", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Full-Stack",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Mongo DB", icon: <DiMongodb className="text-green-600" /> },
      { name: "React Js", icon: <DiReact className="text-blue-500" /> },
      { name: "Github", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="w-full mx-auto flex flex-col items-center justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
        <Reveal>
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      {/* <p className="text-center mb-8">
        I worked on various frontend and fullstack projects. Check them{" "}
        <a href="#" className="underline">
          there
        </a>
        .
      </p> */}
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mt-12 ">
        {skills.map((skill, index) => (
          <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
            <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech,idx) => (
                    <div key={idx} className="flex items-center space-x-2 ">
                        <span className="text-2xl ">{tech.icon}</span>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>

          </div>
        ))}
      </div>
      </Reveal>
    </div>
  );
};

export default Skills;
