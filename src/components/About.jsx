import { logDOM } from '@testing-library/react';
import React from 'react';

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-16 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#33fffcdb]">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, my name is Omid, i'm 24 and i am a web developer junior based in Paris </p>
          </div>
          <div>
            <p>
              my job is to solving digital problems and building responsive web applications or web sites. I try to improve myself everyday Beside my job i love
              to socialise by meeting new peoples and improving my self with every aspect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
