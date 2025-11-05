import Link from "next/link";
import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-[#1a1a1a] bg-cover object-cover bg-center  sm:bg-[url('/image/hero.png')]  bg-[url('/image/hero_mobile.png')]">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="relative z-10 flex items-center w-full templateContainer">
        <div className="lg:w-1/2 flex items-center justify-start">
          <div className="max-w-xl text-white relative">
            <div className="relative z-10 space-y-6 pt-0 lg:pt-16">
              <h3 className="text-sm font-semibold uppercase tracking-widest border-l-2 border-[#8B7C6E] pl-4 text-[#fce9f6]">
                CREATIVE STUDIO
              </h3>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
                Capturing Dreams, <br />{" "}
                <span className="font-medium">One Frame at a Time</span>
              </h2>

              <p className="text-base text-gray-200 font-light max-w-md">
                We craft minimal, timeless visuals for brands and people.
                Photography • Videography • Creative direction. Based in your
                city, available for studio & on-location shoots.
              </p>

              <Link href="#contact">
                <button className="mt-4 cursor-pointer lg:mt-8 px-8 py-3 text-sm font-semibold uppercase tracking-widest border border-white hover:bg-white hover:text-black transition duration-300">
                  HIRE US NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
