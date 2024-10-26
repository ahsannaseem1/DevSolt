import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
      <div className="grid grid-cols-1 place-items-center">
        <div>
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5 text-center">
              About <span>Us</span>
            </h3>
            <p className="text-justify leading-7 w-11/12">
              Fresh graduate in Software Engineering from COMSATS University
              Lahore with a passion for front-end web development. Proficient in
              HTML, CSS, JavaScript, Tailwind, Bootstrap, React.js. Eager to apply my skills to create responsive
              and user-friendly web applications. Open to connections and
              opportunities to grow as a front-end designer & developer. Let's connect and
              collaborate!
            </p>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xjkvkqeo"
          method="POST"
          className="w-full mt-10"
          id="form"
        >
          <p className="text-gray-100 text-center font-bold text-7xl mb-2">Hello.</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            autoComplete="off"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 outline-none"
            required
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            autoComplete="off"
            placeholder="How can we help you?"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 resize-none outline-none"
            required
          />
          <button
          type="submit"
          className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-blue-800"
          >Send Message

          </button>
        </form>
      </div>
      </Reveal>
    </div>
  );
};

export default Contact;
