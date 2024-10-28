import React, { useState, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Reveal from "./Reveal";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const helloRef = useRef(null);

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold for sensitivity
    );
    if (helloRef.current) {
      observer.observe(helloRef.current);
    }
    return () => observer.disconnect();
  }, []);

  
  return (
    <div className="w-full flex flex-col box-border md:pt-28 md:pb-10 px-10 md:gap-28 gap-10" id="contact">
      {/* "Hello" Text and Description */}
      <div className="flex flex-col justify-center items-center" ref={helloRef}>
        <div className="flex">
          {/* Each letter with staggered delay using inline style */}
          {["H", "e", "l", "l", "o","."].map((letter, index) => (
            <span
              key={index}
              className={`text-gray-100 text-left font-bold md:text-7xl text-5xl mb-2 transform transition-transform duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Paragraph text with delay */}
        <p
          className={`text-gray-300 text-left font-normal text-lg transform transition-transform duration-700 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Got an idea that needs execution? Let's discuss it!
        </p>
      </div>

      {/* Contact Form Section */}
      <Reveal>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row w-full mx-auto max-w-[1300px]">
          <div className="w-full">
            <div className="flex flex-col">
              <p className="text-gray-100 text-center md:text-left font-bold md:text-3xl text-2xl mb-2">Contact Information</p>

              <div className="flex gap-4 pt-10 md:ml-4 w-[250px] items-center md:justify-start md:items-left">
                <span className="text-xl h-full text-gray-800 bg-white p-2 rounded-full bg-opacity-700"><MdEmail /></span>
                <div className="flex flex-col gap-2">
                  <h2 className="text-gray-100 font-semibold text-xl">Email</h2>
                  <p className="text-gray-300 text-left font-normal text-lg">official@devsolt.com</p>
                </div>
              </div>
              <div className="flex gap-4 pt-10 md:ml-4 w-[250px] items-center md:justify-start md:items-left">
                <span className="text-xl h-full text-gray-800 bg-white p-2 rounded-full bg-opacity-700"><FaLocationDot /></span>
                <div className="flex flex-col gap-2">
                  <h2 className="text-gray-100 font-semibold text-xl">Location</h2>
                  <p className="text-gray-300 text-left font-normal text-lg">Michigan, USA</p>
                  <p className="text-gray-300 text-left font-normal text-lg">Pakistan</p>
                </div>
              </div>
              <div className="flex justify-center items-center md:justify-start md:items-left pt-10 ml-4 gap-4">
                <a href="https://www.linkedin.com/company/devsolt/" className="text-white p-2 text-lg rounded-full bg-zinc-800 cursor-pointer hover:scale-110 transition-transform" target="blank"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/devsolt.official?igsh=ZGo1ZHlzMHc3d3dm" className="text-white p-2 text-lg rounded-full bg-zinc-800 cursor-pointer hover:scale-110 transition-transform" target="blank"><FaInstagram /></a>
                {/* <a href="https://www.linkedin.com/company/devsolt/" className="text-white p-2 text-lg rounded-full bg-zinc-800 cursor-pointer hover:scale-110 transition-transform" target="blank"><FaFacebookF /></a> */}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-3/4 w-full">
            <form
              // action="https://formspree.io/f/xjkvkqeo"
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full"
              id="form"
            >
               <input type="hidden" name="access_key" value="f95809f0-8f96-43a3-8be5-b41587337c72" />

              <div className="flex gap-4 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  autoComplete="off"
                  className="mb-4 w-full rounded-xl py-2 p-4 outline-none"
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Last Name"
                  autoComplete="off"
                  className="mb-4 w-full rounded-xl py-2 p-4 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  className="mb-4 w-full rounded-xl py-2 p-4 outline-none"
                  required
                />
                <textarea
                  name="textarea"
                  cols="30"
                  rows="6"
                  placeholder="How can we help you?"
                  className="mb-4 w-full rounded-xl py-2 p-4 resize-none outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1 py-3 rounded-xl text-gray-100 font-semibold text-xl bg-blue-600 hover:bg-blue-700"
              >
                Send Message <IoMdSend />
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
