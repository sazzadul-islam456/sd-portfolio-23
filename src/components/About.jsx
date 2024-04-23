// About.js
import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-[#0a192f] text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
        </div>

        <p className="text-xl mt-20 mb-8">
          A front-end developer is a type of programmer who specializes in
          building the user interface (UI) and the user experience (UX) of
          websites and web applications. They are responsible for creating the
          visual elements that users interact with, such as layout, buttons,
          forms, and navigation menus. Front-end developers typically work with
          web technologies such as HTML, CSS, and JavaScript to bring designs to
          life in the browser. They often collaborate closely with web
          designers, back-end developers, and other stakeholders to ensure that
          the final product meets both technical requirements and user needs.
        </p>

        <p className="text-xl mb-8">
          Front-end developers craft website interfaces using HTML, CSS, and
          JavaScript, ensuring user-friendly experiences. They translate design
          concepts into functional code, optimizing for responsiveness and
          accessibility. Collaborating with designers and back-end developers,
          they integrate front-end components with server-side systems. Testing
          across browsers and devices ensures compatibility and performance.
          Staying updated on industry trends and technologies, they continuously
          refine skills to deliver modern, engaging web experiences for users.
        </p>
      </div>
    </div>
  );
};

export default About;
