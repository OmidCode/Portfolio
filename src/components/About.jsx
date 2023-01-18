import React from 'react';

function About() {
  return (
    <div name="about" className="w-full h-screen bg-slate-900 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-300">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, my name is Omid, i'm a frontend developer junior based in Paris </p>
          </div>
          <div>
            <p>
              I am a junior front-end developer specialized in Javascript. With limited experience but a strong motivation, I strive to constantly improve my
              skills and tackle the challenges that each project brings. I am passionate about creating modern and interactive websites, and I enjoy using the
              latest technologies to create exceptional user experiences. I am also proficient in responsive and adaptive web development. My strong attention
              to detail and ability to work in a team make me a valuable asset to any project. I am eager to continue learning and growing as a front-end
              developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
