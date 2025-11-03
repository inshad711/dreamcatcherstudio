// import React from 'react';

// const HeroBanner: React.FC = () => {
//     return (
//         // Outer container for the full banner height and split layout
//         <div className="relative flex min-h-screen w-full bg-[#1a1a1a]">

//             {/* 1. Left Section: Image with Overlay - Takes full width on small screens, half on large */}
//             <div className="relative w-full lg:w-1/2 overflow-hidden h-[40vh] lg:h-auto">
//                 {/* Standard HTML <img> tag replacement for Next.js Image */}
//                 <img
//                     src="https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img1.jpg"
//                     alt="Woman taking a photo with a vintage camera"
//                     className="z-0 object-cover w-full h-full"
//                 // In a real Next.js app, we'd use 'layout="fill"' or 'fill' prop.
//                 // Here, we use standard CSS classes for full coverage.
//                 />
//                 {/* Optional: Dark gradient overlay on the image for mood/contrast */}
//                 <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
//             </div>

//             {/* 2. Right Section: Text Content - Always visible, full width on small, half on large */}
//             <div className="w-full lg:w-1/2 bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12 lg:p-16">

//                 {/* Content Box */}
//                 <div className="relative max-w-xl text-white">

//                     {/* Faint 'PHOTOS' background text/shadow effect (Hidden on small screens for better mobile readability) */}
//                     <div className="absolute -top-10 md:-top-20 -right-20 z-0 pointer-events-none hidden sm:block">
//                         <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold text-white opacity-[0.04] leading-none tracking-widest uppercase">
//                             PHOTOS
//                         </h1>
//                     </div>

//                     {/* Text and Button Container */}
//                     <div className="relative z-10 space-y-6 pt-0 lg:pt-16">

//                         {/* Subtitle: BEST PHOTOSHOOT */}
//                         <h3 className="text-sm font-semibold uppercase tracking-widest border-l-2 border-[#8B7C6E] pl-4 text-[#8B7C6E]">
//                             BEST PHOTOSHOOT
//                         </h3>

//                         {/* Main Title: Excellence In Every Pixel */}
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
//                             Excellence In <br /> <span className="font-medium">Every Pixel</span>
//                         </h2>

//                         {/* Description */}
//                         <p className="text-base text-gray-400 font-light max-w-md">
//                             Condimentum eum dolorem, adipisci modi nobis. Posuere nam nemo ornare recusandae soluta dicta nostrum, vel, sodales, harum, sapiente veniam, sint vestibulum placeat porttitor habitasse.
//                         </p>

//                         {/* Button: HIRE US NOW */}
//                         <button className="mt-4 lg:mt-8 px-8 py-3 text-sm font-semibold uppercase tracking-widest border border-white hover:bg-white hover:text-black transition duration-300">
//                             HIRE US NOW
//                         </button>

//                         {/* <div className="absolute -top-6 -left-6 h-full w-full border border-gray-600 pointer-events-none hidden lg:block"></div> */}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // This is the main component exported, typically rendered in _app.tsx or page.tsx
// export default HeroBanner;

// import React from 'react';

// const HeroBanner: React.FC = () => {
//     return (
//         // Outer container for full banner height
//         <div
//             className="relative flex min-h-screen w-full bg-[#1a1a1a] bg-cover bg-center"
//             style={{
//                 backgroundImage: "url('/image/portrait-photographer-yellow-winter-coat-taking-photo-with-black-background-studio.jpg')",
//             }}
//         >
//             {/* Optional dark overlay */}
//             <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

//             {/* Text Content on Left Side */}
//             <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-start p-8 md:p-12 lg:p-16">
//                 <div className="max-w-xl text-white">

//                     {/* Faint 'PHOTOS' background text/shadow effect */}
//                     <div className="absolute -top-10 md:-top-20 -right-20 z-0 pointer-events-none hidden sm:block">
//                         <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold text-white opacity-[0.04] leading-none tracking-widest uppercase">
//                             PHOTOS
//                         </h1>
//                     </div>

//                     {/* Text and Button Container */}
//                     <div className="relative z-10 space-y-6 pt-0 lg:pt-16">

//                         {/* Subtitle */}
//                         <h3 className="text-sm font-semibold uppercase tracking-widest border-l-2 border-[#8B7C6E] pl-4 text-[#8B7C6E]">
//                             CREATIVE STUDIO
//                         </h3>

//                         {/* Main Title */}
//                         <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
//                             Capturing  Dreams,  <br /> <span className="font-medium">One Frame at a Time</span>
//                         </h2>

//                         {/* Description */}
//                         <p className="text-base text-gray-400 font-light max-w-md">
//                             We craft minimal, timeless visuals for brands and people. Photography • Videography • Creative direction. Based in your city  available for studio & on-location shoots.
//                         </p>

//                         {/* Button */}
//                         <button className="mt-4 lg:mt-8 px-8 py-3 text-sm font-semibold uppercase tracking-widest border border-white hover:bg-white hover:text-black transition duration-300">
//                             HIRE US NOW
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroBanner;

import Link from "next/link";
import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <div
      className="relative flex min-h-screen w-full bg-[#1a1a1a] bg-cover object-cover bg-center"
      style={{
        backgroundImage: "url('/image/dreamcatcher.webp')",
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Text Content on Left Side */}
      <div className="relative z-10 flex items-center w-full templateContainer">
        <div className="lg:w-1/2 flex items-center justify-start">
          <div className="max-w-xl text-white relative">
            {/* Text and Button Container */}
            <div className="relative z-10 space-y-6 pt-0 lg:pt-16">
              {/* Subtitle */}
              <h3 className="text-sm font-semibold uppercase tracking-widest border-l-2 border-[#8B7C6E] pl-4 text-[#8B7C6E]">
                CREATIVE STUDIO
              </h3>

              {/* Main Title */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
                Capturing Dreams, <br />{" "}
                <span className="font-medium">One Frame at a Time</span>
              </h2>

              {/* Description */}
              <p className="text-base text-gray-400 font-light max-w-md">
                We craft minimal, timeless visuals for brands and people.
                Photography • Videography • Creative direction. Based in your
                city, available for studio & on-location shoots.
              </p>

              {/* Button */}
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
