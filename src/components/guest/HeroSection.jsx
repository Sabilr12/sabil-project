import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[85vh] sm:h-[70vh] lg:h-[85vh]">
      <img
        src="/img/hi.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="font-abril text-[80px] md:text-[100px] lg:text-[120px] leading-none font-extrabold text-shadow-md tracking-wide">
          Organic
        </h1>
        <h2 className="font-abril text-[40px] md:text-[60px] lg:text-[80px] leading-tight mt-2 font-extrabold text-shadow-md tracking-wider">
          Food Market
        </h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold rounded-lg mt-6 shadow-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
