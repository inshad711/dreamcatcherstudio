// import React from 'react';
// import { Camera, Zap, Briefcase, Globe } from 'lucide-react';

// // Define the structure for a service card
// interface Service {
//     number: string;
//     title: string;
//     icon: React.ElementType;
//     link: string;
// }

// // Data for the service cards
// const services: Service[] = [
//     { number: '01.', title: 'Studio Photography', icon: Camera, link: '#' },
//     { number: '02.', title: 'Wildlife Photography', icon: Zap, link: '#' },
//     { number: '03.', title: 'Portfolio Shooting', icon: Briefcase, link: '#' },
//     { number: '04.', title: 'Outdoor Photography', icon: Globe, link: '#' },
// ];

// // Main component, exported as App
// const SpecialService: React.FC = () => {
//     return (
//         // Main container with dark background, Inter font.
//         <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 font-inter">
//             <div className="max-w-7xl mx-auto">

//                 {/* Header Section */}
//                 <div className="flex flex-col lg:flex-row justify-between items-start lg:mb-16 mb-10 relative">

//                     {/* Watermark: Positioned absolutely within the header section for a large, faded overlay effect 
//              as seen in the original image, covering the top right area of the section. */}


//                     {/* Title Block (Left Side) */}
//                     <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10 z-10">
//                         {/* Subtitle with a thin, subtle border below it */}
//                         <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2 border-b-2 border-gray-600 inline-block pb-1">
//                             OUR SPECIALITIES
//                         </p>
//                         {/* Main Title - Font size and weight adjusted for a clean, light look */}
//                         <h2 className="text-5xl md:text-[4rem] font-light tracking-tight leading-snug">
//                             Special Services We Offer !
//                         </h2>
//                     </div>

//                     {/* Description Block (Right Side) */}
//                     <div className="lg:w-1/2 pt-4 lg:pt-0 lg:pl-10 z-10">
//                         <p className="text-gray-400 leading-relaxed max-w-lg">
//                             Condimentum eum dolorem, adipisci modi nobis. Posuere nam nemo ornare recusandae soluta dicta nostrum, vel, sodales, harum, sapiente veniam, sint vestibulum placeat porttitor habitasse.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {services.map((service, index) => (
//                         // Service Card Container: Removed strong rounding and borders to match the image's sharp edges.
//                         <div
//                             key={index}
//                             className="group bg-neutral-900 p-8 h-72 flex flex-col justify-between 
//                          transition-all duration-300 ease-in-out hover:-translate-y-1 
//                          hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
//                         >
//                             {/* Icon - Increased size to match the image better */}
//                             <div className="mb-4">
//                                 <service.icon
//                                     className="w-16 h-16 stroke-1 text-white opacity-80 group-hover:opacity-100 transition-opacity"
//                                     aria-hidden="true"
//                                 />
//                             </div>

//                             {/* Text Content */}
//                             <div>
//                                 {/* Number - Subtle gray color */}
//                                 <p className="text-xl font-semibold text-gray-400 mb-3 tracking-wider">
//                                     {service.number}
//                                 </p>
//                                 {/* Title */}
//                                 <h5 className="text-2xl font-medium tracking-wide leading-tight">
//                                     <a href={service.link} className="hover:text-gray-300 transition-colors">
//                                         {service.title}
//                                     </a>
//                                 </h5>
//                             </div>
//                         </div>
//                     ))}
//                 </div>



//             </div>
//         </div>
//     );
// };

// export default SpecialService;


import React from 'react';
import { Camera, Mic, Video, Film } from 'lucide-react';

// Define the structure for a service card, now including 'description'
interface Service {
    number: string;
    title: string;
    description: string; // <--- ADDED
    icon: React.ElementType;
    link: string;
}


const services: Service[] = [
    {
        number: '01.',
        title: 'Chroma Shoots',
        description: 'High-quality green screen productions for films, ads, and creative visual effects with professional lighting and post-production support.',
        icon: Film, // fits chroma or film-related shoots
        link: '#'
    },
    {
        number: '02.',
        title: 'Podcast',
        description: 'State-of-the-art recording and production setup for podcasts, voiceovers, and audio storytelling with crisp, studio-grade sound.',
        icon: Mic, // better represents audio/podcast
        link: '#'
    },
    {
        number: '03.',
        title: 'Photography Shoot',
        description: 'Professional photography sessions for portraits, fashion, products, and corporate profiles—capturing every moment in stunning detail.',
        icon: Camera, // photography specific
        link: '#'
    },
    {
        number: '04.',
        title: 'Videography Shoot',
        description: 'Cinematic video production for events, commercials, and documentaries—crafted with creative storytelling and dynamic visuals.',
        icon: Video, // represents videography
        link: '#'
    },
];


// Main component, exported as SpecialService
const SpecialService: React.FC = () => {
    return (
        // Main container with dark background, Inter font.
        <div id='services' className="bg-black py-24">
            <div className="templateContainer text-white ">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:mb-16 mb-10 relative">

                    {/* Watermark: Positioned absolutely within the header section for a large, faded overlay effect 
                    as seen in the original image, covering the top right area of the section. */}


                    {/* Title Block (Left Side) */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10 z-10">
                        {/* Subtitle with a thin, subtle border below it */}
                        <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2 border-b-2 border-gray-600 inline-block pb-1">
                            OUR SERVICES
                        </p>
                        {/* Main Title - Font size and weight adjusted for a clean, light look */}
                        <h2 className="text-2xl md:text-6xl font-light tracking-tight leading-snug">
                            Special Services We Offer !
                        </h2>
                    </div>

                    {/* Description Block (Right Side) */}
                    <div className="lg:w-1/2 pt-4 lg:pt-0 lg:pl-10 z-10">
                        <p className="text-gray-400 leading-relaxed max-w-lg">
                            At DreamCatcher Studio, we bring ideas to life through art, light, and imagination. Our creative space in Vikhroli (West), Mumbai, is built for those who dream big whether it’s a brand shoot, a music video, or a personal project. With the right team, tools, and energy, we make sure every frame tells your story beautifully.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        // Service Card Container: Removed strong rounding and borders to match the image's sharp edges.
                        <div
                            key={index}
                            className="group bg-neutral-900 p-8 h-72 flex flex-col justify-between 
                            transition-all duration-300 ease-in-out hover:-translate-y-1 
                            hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
                        >
                            {/* Icon - Increased size to match the image better */}
                            <div className="mb-4">
                                <service.icon
                                    className="w-16 h-16 stroke-1 text-white opacity-80 group-hover:opacity-100 transition-opacity"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Text Content */}
                            <div>
                                {/* Number - Subtle gray color */}
                                <p className="text-xl font-semibold text-gray-400 mb-3 tracking-wider">
                                    {service.number}
                                </p>
                                {/* Title */}
                                <h5 className="text-2xl font-medium tracking-wide leading-tight mb-2">
                                    <a href={service.link} className="hover:text-gray-300 transition-colors">
                                        {service.title}
                                    </a>
                                </h5>
                                {/* Description - ADDED */}
                                <p className="text-sm text-gray-400 leading-snug">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default SpecialService;