// import React from 'react';

// // Custom SVG for the Play Button overlay
// const PlayButtonIcon: React.FC = () => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:text-white transition-colors"
//     >
//         <path
//             fillRule="evenodd"
//             d="M4.5 5.653c0-1.427 1.529-2.31 2.706-1.638l11.54 6.347a1.125 1.125 0 0 1 0 1.996l-11.54 6.347a1.125 1.125 0 0 1-2.706-1.638V5.653Z"
//             clipRule="evenodd"
//         />
//     </svg>
// );

// // Custom SVG for the Quote Icon
// const QuoteIcon: React.FC = () => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 448 512"
//         fill="currentColor"
//         className="w-6 h-6 text-white/50 absolute top-0 left-0"
//     >
//         <path d="M448 296v-80c0-15.1-6.1-28.9-16.8-39.2l-37.9-37.9c-10.7-10.7-24.5-16.8-39.2-16.8H272c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64h32v64c0 44.2-35.8 80-80 80h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h160c44.2 0 80-35.8 80-80v-32c0-8.8-7.2-16-16-16h-32zM160 216v-80c0-15.1-6.1-28.9-16.8-39.2l-37.9-37.9c-10.7-10.7-24.5-16.8-39.2-16.8H80c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64h32v64c0 44.2-35.8 80-80 80H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h160c44.2 0 80-35.8 80-80v-32c0-8.8-7.2-16-16-16h-32z" />
//     </svg>
// );

// const AboutSection: React.FC = () => {
//     return (
//         <div id='about-us' className=" bg-black text-white py-16 md:py-24 font-inter">
//             <div className="templateContainer px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

//                     {/* LEFT COLUMN: Image & Video Player Placeholder */}
//                     <div className="md:w-5/12 relative rounded-xl overflow-hidden shadow-2xl">
//                         <img
//                             src="https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img13.jpg"
//                             alt="Professional Photographer Portrait"
//                             className="w-full h-full object-cover min-h-[400px] md:min-h-full"
//                             style={{ filter: 'brightness(0.9)', minHeight: '550px' }}
//                         />

//                         {/* Play Button Overlay */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <a
//                                 href="#"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="group w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 ring-8 ring-white/30"
//                                 aria-label="Play video about our journey"
//                             >
//                                 <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center">
//                                     <PlayButtonIcon />
//                                 </div>
//                             </a>
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN: Content */}
//                     <div className="md:w-7/12 flex flex-col justify-center">

//                         {/* Subtitle */}
//                         <div className="flex items-center space-x-3 mb-2">
//                             <div className="h-4 w-0.5 bg-white/50"></div>
//                             <p className="text-sm font-semibold tracking-widest text-white/70">
//                                 INTRODUCTION OF US
//                             </p>
//                             <div className="text-xl text-white/10 ml-auto hidden md:block">
//                                 ABOUT
//                             </div>
//                         </div>

//                         {/* Title */}
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tighter mb-10">
//                             Dream Catcher Studio
//                         </h1>

//                         {/* DreamCatcher Studio Description */}
//                         <div className="text-gray-300 leading-relaxed space-y-4 mb-10">
//                             <p>
//                                 <strong className="text-white font-semibold">Welcome to DreamCatcher Studio</strong>, a family-run creative space built with love, passion, and an eye for perfection.
//                             </p>

//                             <p>
//                                 Located in the heart of <strong>Vikhroli (West)</strong> on <strong>LBS Marg near Embassy 247</strong>, our studio is designed to make your shoots smooth, comfortable, and truly creative — whether it’s a photo shoot, video shoot, ad film, or social media project.
//                             </p>

//                             <p>
//                                 Our <strong>1,000 sq. ft.</strong> air-conditioned and soundproof studio offers a professional setup where ideas come alive. We have a <strong>Green Chroma setup (20 x 20 x 10 ft)</strong> and <strong>Blue, Black, and White backdrops (8 x 12 ft)</strong> to match every style and theme.
//                             </p>

//                             <p>When you book our studio, you also get:</p>

//                             <ul className="list-disc list-inside space-y-2 text-gray-400">
//                                 <li>A/C makeup room with mirrors</li>
//                                 <li>Two relaxing rooms for rest</li>
//                                 <li>Two changing rooms</li>
//                                 <li>A lunch area with tables and chairs</li>
//                                 <li>Parking inside the compound</li>
//                                 <li>(A/C power use is charged at actual cost.)</li>
//                             </ul>

//                             <p className="text-sm text-white/60 italic">
//                                 At DreamCatcher Studio, we believe in offering more than just a space; we offer comfort, privacy, and support so you can focus completely on your creativity.
//                                 If you’re searching for a chroma or photo studio in Vikhroli, Mumbai, this is the perfect place to turn your ideas into reality.
//                             </p>
//                         </div>

//                         {/* Button */}
//                         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
//                             <a
//                                 href="#contact"
//                                 className="px-8 py-3 text-sm font-semibold uppercase tracking-widest border border-white hover:bg-white hover:text-black transition duration-300"
//                             >
//                                 Contact Now
//                             </a>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutSection;

import React from "react";

// Custom SVG for the Play Button overlay
const PlayButtonIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:text-white transition-colors"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.427 1.529-2.31 2.706-1.638l11.54 6.347a1.125 1.125 0 0 1 0 1.996l-11.54 6.347a1.125 1.125 0 0 1-2.706-1.638V5.653Z"
      clipRule="evenodd"
    />
  </svg>
);

const AboutSection: React.FC = () => {
  return (
    <div
      id="about-us"
      className=" bg-black text-white py-16 md:py-24 font-inter"
    >
      <div className="templateContainer px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* LEFT COLUMN: Image & Video Player Placeholder */}
          <div className="md:w-5/12 relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img13.jpg"
              alt="Professional Photographer Portrait"
              className="w-full h-full object-cover min-h-[400px] md:min-h-full"
              style={{ filter: "brightness(0.9)", minHeight: "550px" }}
            />
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="md:w-7/12 flex flex-col justify-center">
            {/* Subtitle */}
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-4 w-0.5 bg-white/50"></div>
              <p className="text-sm font-semibold tracking-widest text-white/70">
                INTRODUCTION OF US
              </p>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tighter mb-10">
              Dream Catcher Studio
            </h1>

            {/* DreamCatcher Studio Description */}
            <div className="text-gray-300 leading-relaxed space-y-4 mb-10">
              <p>
                <strong className="text-white font-semibold">
                  Welcome to DreamCatcher Studio
                </strong>
                , a family-run creative space built with love, passion, and an
                eye for perfection.
              </p>

              <p>
                Located in the heart of <strong>Vikhroli (West)</strong> on{" "}
                <strong>LBS Marg near Embassy 247</strong>, our studio is
                designed to make your shoots smooth, comfortable, and truly
                creative — whether it’s a photo shoot, video shoot, ad film, or
                social media project.
              </p>

              <p>
                Our <strong>1,000 sq. ft.</strong> air-conditioned and
                soundproof studio offers a professional setup where ideas come
                alive. We have a{" "}
                <strong>Green Chroma setup (20 x 20 x 10 ft)</strong> and{" "}
                <strong>Blue, Black, and White backdrops (8 x 12 ft)</strong> to
                match every style and theme.
              </p>

              <p>When you book our studio, you also get:</p>

              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>A/C makeup room with mirrors</li>
                <li>Two relaxing rooms for rest</li>
                <li>Two changing rooms</li>
                <li>A lunch area with tables and chairs</li>
                <li>Parking inside the compound</li>
                <li>(A/C power use is charged at actual cost.)</li>
              </ul>

              <p className="text-sm text-white/60 italic">
                At DreamCatcher Studio, we believe in offering more than just a
                space; we offer comfort, privacy, and support so you can focus
                completely on your creativity. If you’re searching for a chroma
                or photo studio in Vikhroli, Mumbai, this is the perfect place
                to turn your ideas into reality.
              </p>
            </div>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
              <a
                href="#contact"
                className="px-8 py-3 text-sm font-semibold uppercase tracking-widest border border-white hover:bg-white hover:text-black transition duration-300"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
