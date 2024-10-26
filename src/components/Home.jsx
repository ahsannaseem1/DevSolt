import React, { useEffect, useState, useRef } from "react";
import heroBg from "../assets/bg-6.jpeg";
import Reveal from "./Reveal";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect if the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="h-screen w-full relative" id="home">
      {/* Background Image */}
      <img src={heroBg} className="absolute w-full h-screen object-cover" alt="Hero Banner" />

      {/* Overlay Content */}
      <div className="relative h-full flex justify-center items-end pr-8 ">
        <Reveal>
          <div className="text-center flex flex-col justify-center items-center w-3/4 mx-auto text-white py-10 md:py-20">
            {/* Heading with initial delay and slow ease-out effect */}
            <h2
              className={`text-3xl md:text-5xl font-bold mb-4 transition-transform duration-[1200ms] ease-out ${
                isVisible ? "translate-y-0 opacity-100 delay-300" : "translate-y-20 opacity-0"
              }`}
            >
              Manifesting Your Dreams into Digital Reality.
            </h2>
            <button
              className={`font-normal px-6 py-2 bg-black text-white font-semibold rounded-3xl hover:bg-blue-700 transition-transform duration-[1200ms] ease-out ${
                isVisible ? "translate-y-0 opacity-100 delay-500" : "translate-y-20 opacity-0"
              }`}
            >
              Get in Touch
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
