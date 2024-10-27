import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [nav]);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full justify-between backdrop-blur-xl z-50 bg-opacity-70" id="navbar">
      <div className="flex text-white justify-center items-center px-12 h-16">
        {/* <a href="/" className="font-bold text-3xl">DevSolt</a> */}

        <ul className="hidden md:flex gap-10 z-10 font-normal text-lg">
          <li className="h-full transition-transform duration-200 ease-out transform hover:scale-110 w-20 cursor-pointer hover:font-semibold">
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="h-full transition-transform transform duration-200 ease-out hover:scale-110 w-20 cursor-pointer hover:font-semibold">
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="h-full transition-transform transform duration-200 ease-out hover:scale-110 w-20 cursor-pointer hover:font-semibold">
            <Link to="services" smooth={true} offset={50} duration={500}>
              Services
            </Link>
          </li>
          <li className="h-full transition-transform transform duration-200 ease-out hover:scale-110 w-20 cursor-pointer hover:font-semibold">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden absolute right-5 z-50 text-white">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed bg-black top-0 z-40 w-full h-screen"
        >
          <ul className="font-semibold text-xl space-y-8 mt-24 text-center text-white">
            <li className="cursor-pointer">
              <Link to="home" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="services" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
