import React, { useEffect, useState, useRef } from "react";
import { FaShopify, FaWordpress, FaReact, FaNodeJs } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={servicesRef}
      className="w-full mx-auto flex flex-col items-center justify-center px-4 text-gray-200 pb-8 py-4 md:py-12"
      id="services"
    >
      {/* Icons */}
      <div className="flex w-1/3 md:w-full max-w-[1300px] items-center gap-10 md:gap-24 justify-center">
        <span
          className={`text-3xl sm:text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-24 -translate-x-8 opacity-20"
          }`}
        >
          <FaReact className="text-white" />
        </span>
        <span
          className={`text-3xl sm:text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-24 -translate-x-8 opacity-20"
          }`}
        >
          <FaShopify className="text-white" />
        </span>
        <span
          className={`text-3xl sm:text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "lg:translate-y-24 translate-y-8 opacity-20"
          }`}
        >
          <FaWordpress className="text-white" />
        </span>
        <span
          className={`text-3xl sm:text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "lg:translate-x-24 translate-x-8 opacity-20"
          }`}
        >
          <FaNodeJs className="text-white" />
        </span>
        <span
          className={`text-3xl sm:text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "lg:translate-x-24 translate-x-8 opacity-20"
          }`}
        >
          <FaSquareUpwork className="text-white" />
        </span>
      </div>

      {/* OUR MISSION Section */}
      <div className="flex flex-col justify-center items-center py-10 gap-4 md:mt-20 mt-5 w-full">
        <h2
          className={`font-semibold text-4xl md:text-6xl transition-transform duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          OUR MISSION
        </h2>
        <p
          className={`text-gray-300 text-xl md:text-2xl lg:text-4xl w-3/4 font-normal text-center md:w-1/2 md:leading-[1.6] transition-transform duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Helping <span>organizations</span> worldwide <span>achieve</span> extraordinary results through custom software <span>innovations</span>.
        </p>
      </div>
    </div>
  );
};

export default Services;
