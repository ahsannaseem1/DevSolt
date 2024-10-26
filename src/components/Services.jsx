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
      { threshold: 0.5} 
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
      <div className="flex w-full items-center gap-10 md:gap-24 justify-center">
        <span
          className={`text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-28 opacity-20"
          }`}
        >
          <FaReact className="text-white" />
        </span>
        <span
          className={`text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-28 opacity-20"
          }`}
        >
          <FaShopify className="text-white" />
        </span>
        <span
          className={`text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-y-28 opacity-20"
          }`}
        >
          <FaWordpress className="text-white" />
        </span>
        <span
          className={`text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-28 opacity-20"
          }`}
        >
          <FaNodeJs className="text-white" />
        </span>
        <span
          className={`text-4xl md:text-7xl transition-transform duration-1000 delay-100 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-28 opacity-20"
          }`}
        >
          <FaSquareUpwork className="text-white" />
        </span>
      </div>
      <div className="flex flex-col py-10 mt-20">
        <h2 className="font-semibold text-6xl">WHAT WE OFFER!!</h2>
      </div>
    </div>
  );
};

export default Services;
