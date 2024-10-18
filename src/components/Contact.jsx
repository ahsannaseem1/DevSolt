import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
      <div className="grid md:grid-cols-2 place-items-center">
        <div>
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
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
          {/* <div className="flex mt-10 items-center gap-7 ">
            <div className="bg-gray-800/40 p-4 rouned-lg ">
              <h3 className="md:text-4xl text-2xl font-semibold text-white ">
                2<span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Projects</span>
              </p>
            </div>

            <div className="bg-gray-800/40 p-5 rouned-lg ">
              <h3 className="md:text-4xl text-2xl font-semibold text-white ">
                2<span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Years of Experience</span>
              </p>
            </div>

            <div className="bg-gray-800/40 p-5 rouned-lg ">
              <h3 className="md:text-4xl text-2xl font-semibold text-white ">
                2<span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Happy Clients</span>
              </p>
            </div>
          </div> */}
        </div>
        <form
          action="https://getform.io/f/aejydklb"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-2">Let's Connect!</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 outline-none"
            required
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="How can i help you?"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 resize-none outline-none"
            required
          />
          <button
          type="submit"
          className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-purple-700"
          >Send Message

          </button>
        </form>
      </div>
      </Reveal>
    </div>
  );
};

export default Contact;
