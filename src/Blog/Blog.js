import React from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-6">
        <div className="shadow-lg bg-white p-6 text-left rounded-lg">
          <h2 className="text-green-700 text-2xl mb-4">What is context api?</h2>
          <p>
            What is Context API? The React Context API is a way for a React app
            to effectively produce global variables that can be passed around.
            This is the alternative to "prop drilling" or moving props from
            grandparent to child to parent, and so on.
          </p>
        </div>
        <div className="shadow-lg p-6 text-left bg-white rounded-lg">
          <h2 className="text-green-700 text-2xl mb-4">
            What is semantic tag ?
          </h2>
          <p>
            What is Context API? The React Context API is a way for a React app
            to effectively produce global variables that can be passed around.
            This is the alternative to "prop drilling" or moving props from
            grandparent to child to parent, and so on.
          </p>
        </div>
        <div className="shadow-lg p-6 text-left bg-white rounded-lg">
          <h2 className="text-green-700 text-2xl mb-4">
            What's the difference between inline and inline-block?
          </h2>
          <p>
            What is Context API? The React Context API is a way for a React app
            to effectively produce global variables that can be passed around.
            This is the alternative to "prop drilling" or moving props from
            grandparent to child to parent, and so on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
