import React from 'react';

function About() {
  return (
    <div name="about" className="w-full h-full pb-32 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-fit h-fit">
        <div className="max-w-[1000px] w-full px-16 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#33fffcdb]">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-16">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Omid, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I am passionate about building web application. I specialize in front-end using Javascript and React. Beside of coding im passionate about... I am
              passionate about building web application. I specialize in front-end using Javascript and React. Beside of coding im passionate about... I am
              passionate about building web application. I specialize in front-end using Javascript and React. Beside of coding im passionate about...I am
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
