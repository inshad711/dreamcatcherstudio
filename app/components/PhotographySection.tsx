// // components/PortfolioSection.tsx

// import React from 'react';

// // Define the structure for a portfolio item
// interface PortfolioItem {
//     id: number;
//     imageUrl: string;
//     title: string;
// }

// // Mock data based on the image and HTML provided
// const portfolioItems: PortfolioItem[] = [
//     { id: 1, imageUrl: '/images/photox-img9.jpg', title: 'Bright Sunshine Photography' },
//     { id: 2, imageUrl: '/images/photox-img13.jpg', title: 'Iceland Model Photo Session' },
//     { id: 3, imageUrl: '/images/photox-img10.jpg', title: 'Sun-downers Love Photography' },
//     { id: 4, imageUrl: '/images/photox-img12.jpg', title: 'Brown Girl Next Door Photo Shoot' },
//     { id: 5, imageUrl: '/images/photox-img14-1.jpg', title: 'Fashion Next Level Photography' },
//     { id: 6, imageUrl: '/images/photox-img11.jpg', title: 'Summer Sadness Photography' },
// ];

// // Note: Replace the mock image URLs with your actual image paths.
// // For the component to look exactly like the image, ensure your images 
// // are named as listed above and placed in your public/images directory, 
// // or update the URLs to point to the correct locations.

// const PhotographySection: React.FC = () => {
//     return (
//         // Outer container for the whole section with a dark background
//         <section className="bg-black py-20 text-white min-h-screen flex items-center justify-center">
//             <div className="container mx-auto px-4 max-w-7xl">

//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <p className="text-sm tracking-widest text-gray-400 mb-1">
//                         | **OUR PORTFOLIO**
//                     </p>
//                     <h1 className="text-6xl font-extrabold mb-4 relative inline-block">
//                         {/* Shadow Text effect (visually matching the large 'PORTFOLIO' in the background) */}
//                         <span className="absolute inset-0 z-0 text-[10rem] opacity-5 font-black uppercase tracking-[1rem] text-center pointer-events-none translate-y-1/4">
//                             PORTFOLIO
//                         </span>
//                         <span className="relative z-10 font-light tracking-wide text-5xl md:text-6xl">
//                             We Capture Your Beautiful Memories
//                         </span>
//                     </h1>
//                 </div>

//                 {/* Image Grid Section (Bento Grid) */}
//                 {/* Uses a 3-column grid layout for desktop */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {portfolioItems.map((item) => (
//                         <div
//                             key={item.id}
//                             className="group relative overflow-hidden aspect-square rounded-lg shadow-xl"
//                             // Set the background image style
//                             style={{
//                                 backgroundImage: `url(${item.imageUrl})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 // Mimic the image-accordion behavior by darkening the image slightly on hover
//                                 transition: 'transform 0.5s ease-in-out, filter 0.5s ease-in-out',
//                             }}
//                         >
//                             {/* Overlay with subtle gradient for text visibility, mimicking the accordion hover */}
//                             <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-500"></div>

//                             {/* Title Content - positioned at the bottom and revealed on hover (mimicking accordion) */}
//                             <div className="absolute bottom-0 left-0 p-6 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
//                                 <h3 className="text-lg font-semibold text-white">
//                                     {item.title}
//                                 </h3>
//                                 {/* Could add a subtitle/description here if needed */}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PhotographySection;

// components/PortfolioSection.tsx

// import React from 'react';

// interface PortfolioItem {
//     id: number;
//     imageUrl: string;
//     title: string;
// }

// // **UPDATED MOCK DATA**
// // Using Lorem Picsum for high-quality, unique image placeholders
// const portfolioItems: PortfolioItem[] = [
//     { id: 1, imageUrl: 'https://picsum.photos/id/1012/600/600', title: 'Bright Sunshine Photography' },
//     { id: 2, imageUrl: 'https://picsum.photos/id/1014/600/600', title: 'Iceland Model Photo Session' },
//     { id: 3, imageUrl: 'https://picsum.photos/id/1025/600/600', title: 'Sun-downers Love Photography' },
//     { id: 4, imageUrl: 'https://picsum.photos/id/1069/600/600', title: 'Brown Girl Next Door Photo Shoot' },
//     { id: 5, imageUrl: 'https://picsum.photos/id/1074/600/600', title: 'Fashion Next Level Photography' },
//     { id: 6, imageUrl: 'https://picsum.photos/id/1083/600/600', title: 'Summer Sadness Photography' },
// ];

// const PortfolioSection: React.FC = () => {
//     return (
//         // Outer container for the whole section with a dark background
//         <section className="bg-black py-20 text-white min-h-screen flex items-center justify-center">
//             <div className="container mx-auto px-4 max-w-7xl">

//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <p className="text-sm tracking-widest text-gray-400 mb-1">
//                         | **OUR PORTFOLIO**
//                     </p>
//                     <h1 className="text-6xl font-extrabold mb-4 relative inline-block">
//                         {/* Shadow Text effect */}
//                         <span className="absolute inset-0 z-0 text-[10rem] opacity-5 font-black uppercase tracking-[1rem] text-center pointer-events-none translate-y-1/4">
//                             PORTFOLIO
//                         </span>
//                         <span className="relative z-10 font-light tracking-wide text-5xl md:text-6xl">
//                             We Capture Your Beautiful Memories
//                         </span>
//                     </h1>
//                 </div>

//                 {/* Image Grid Section (Bento Grid) */}
//                 {/* Uses a 3-column grid layout for desktop */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {portfolioItems.map((item) => (
//                         <div
//                             key={item.id}
//                             className="group relative overflow-hidden aspect-square rounded-lg shadow-xl"
//                             // Set the background image style using the placeholder URL
//                             style={{
//                                 backgroundImage: `url(${item.imageUrl})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 transition: 'transform 0.5s ease-in-out, filter 0.5s ease-in-out',
//                             }}
//                         >
//                             {/* Overlay with subtle gradient for text visibility, mimicking the accordion hover */}
//                             <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-500"></div>

//                             {/* Title Content - positioned at the bottom and revealed on hover */}
//                             <div className="absolute bottom-0 left-0 p-6 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
//                                 <h3 className="text-lg font-semibold text-white">
//                                     {item.title}
//                                 </h3>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PortfolioSection;

'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PortfolioItem {
    id: number;
    src: string;
    alt: string;
    title: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        src: 'https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img9.jpg',
        alt: 'Bright Sunshine Photography',
        title: 'Bright Sunshine Photography',
    },
    {
        id: 2,
        src: 'https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img13.jpg',
        alt: 'Iceland Model Photo Session',
        title: 'Iceland Model Photo Session',
    },
    {
        id: 3,
        src: 'https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img10.jpg',
        alt: 'Sun-downers Love Photography',
        title: 'Sun-downers Love Photography',
    },
    {
        id: 4,
        src: 'https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img12.jpg',
        alt: 'Brown Girl Next Door Photo Shoot',
        title: 'Brown Girl Next Door Photo Shoot',
    },
    {
        id: 5,
        src: 'https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img14-1.jpg',
        alt: 'Fashion Next Level Photography',
        title: 'Fashion Next Level Photography',
    },
    {
        id: 6,
        src: 'https://demo.bosathemes.com/photox/wp-content/uploads/sites/63/2025/07/photox-img11.jpg',
        alt: 'Summer Sadness Photography',
        title: 'Summer Sadness Photography',
    },
];

const PortfolioSection: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <section id='porfolio' className="bg-black py-16">
            <div className="templateContainer">
                {/* Title Section */}
                <div className="text-center mb-12">

                    <h3 className="elementskit-section-subtitle text-lg sm:text-xl font-medium text-white uppercase mb-2 relative after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-0.5 after:bg-white">
                        OUR PORTFOLIO
                    </h3>

                </div>

                {/* Grid Section - Using images directly from your provided code */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative group cursor-pointer overflow-hidden rounded-md aspect-square bg-black"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Hover overlay mimicking accordion slide-up */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-500 flex items-end p-3 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                <div className="w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="block text-white text-xs md:text-sm font-semibold uppercase tracking-wider text-left bg-black/20 px-2 py-1 rounded">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;