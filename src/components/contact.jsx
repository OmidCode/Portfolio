import React from 'react';

function contact() {
  return (
    <div name="contact" className="w-full h-full md:pt-72 bg-[#0a192f] flex justify-center items-center p-16 lg:px-32">
      <form action="https://getform.io/f/d218825b-2b43-4b93-8cbe-6434b3bb8df9" method="POST" className="flex flex-col max-w[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#33FFFC] text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">Submit the form below and let's work togheter</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name"></input>
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email"></input>
        <textarea className="bg-[#ccd6f6]" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-[#33FFFC] hover:border-[#33FFFC] px-4 py-3 my-8 mx-auto flex items-center">Let's collaborate</button>
      </form>
    </div>
  );
}

export default contact;
