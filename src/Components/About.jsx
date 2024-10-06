import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw]'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-20">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="px-10 uppercase flex items-center gap-10 mt-10 py-6 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 overflow-hidden h-[62vh] rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')" }}>
        </div>
      </div>
    </div>
  );
}

export default About;
