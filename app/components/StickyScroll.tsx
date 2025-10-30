// import React from 'react';
// // Using lucide-react for the icon, which is a common pattern in Next.js/React development
// import { ArrowRight } from 'lucide-react';

// // Placeholder URL for the dramatic camera lens image seen in the reference.
// // In a real Next.js app, you'd use the built-in Image component for better performance.
// const BACKGROUND_IMAGE_URL = "https://templatekit.jegtheme.com/hardy/wp-content/uploads/sites/249/2022/03/a-man-photographer-with-a-camera-takes-a-photo-in-the-dark-copy-space--e1647922080119.jpg";

// /**
//  * HeroBanner Component: Recreates the dark, image-backed section with right-aligned content.
//  */
// const StickyScroll: React.FC = () => {
//     // Inner component for the main title
//     const Title: React.FC = () => (
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
//             Get Your <span className="text-yellow-500">Best Picture</span> From Our Shot
//         </h2>
//     );

//     // Inner component for the descriptive paragraph
//     const Description: React.FC = () => (
//         <p className="text-gray-300 mb-8 max-w-lg text-sm md:text-base">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.
//         </p>
//     );

//     // Inner component for the "Contact Us" button
//     const ContactButton: React.FC = () => (
//         <a
//             href="#"
//             // Tailwind classes for the button style: border, yellow text, and hover effect
//             className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold transition duration-300
//                  text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 shadow-xl"
//         >
//             <span>Contact Us</span>
//             <ArrowRight className="w-4 h-4 ml-1" />
//         </a>
//     );

//     return (
//         // The main container with relative positioning for children
//         <section className="relative w-full h-[500px] overflow-hidden bg-gray-900 flex items-center">

//             {/* Background Image Container */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                     backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
//                     // Applying a slight blur and scale to match the background effect in the image
//                     filter: 'blur(3px)',
//                     transform: 'scale(1.02)'
//                 }}
//             />

//             {/* Dark Overlay (elementor-background-overlay equivalent) */}
//             <div className="absolute inset-0 bg-gray-900 opacity-80" />

//             {/* Content Container (elementor-container equivalent) */}
//             {/* This uses flex layout to ensure vertical centering and horizontal alignment on the right */}
//             <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex justify-end w-full h-full items-center">
//                 {/* The content block, positioned to the right side of the screen on desktop */}
//                 <div className="w-full md:w-1/2 lg:w-2/5 p-6 md:p-0">
//                     <div className="space-y-4">
//                         <Title />
//                         <Description />
//                         <ContactButton />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default StickyScroll;


// import React from 'react';
// // Using lucide-react for the icon, which is a common pattern in Next.js/React development
// import { ArrowRight } from 'lucide-react';

// // Placeholder URL for the dramatic camera lens image seen in the reference.
// // In a real Next.js app, you'd use the built-in Image component for better performance.
// const BACKGROUND_IMAGE_URL = "https://templatekit.jegtheme.com/hardy/wp-content/uploads/sites/249/2022/03/a-man-photographer-with-a-camera-takes-a-photo-in-the-dark-copy-space--e1647922080119.jpg";

// /**
//  * HeroBanner Component: Recreates the dark, image-backed section with right-aligned content.
//  */
// const HeroBanner: React.FC = () => {
//     // Inner component for the main title
//     const Title: React.FC = () => (
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
//             Get Your <span className="text-yellow-500">Best Picture</span> From Our Shot
//         </h2>
//     );

//     // Inner component for the descriptive paragraph
//     const Description: React.FC = () => (
//         <p className="text-gray-300 mb-8 max-w-lg text-sm md:text-base">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.
//         </p>
//     );

//     // Inner component for the "Contact Us" button
//     const ContactButton: React.FC = () => (
//         <a
//             href="#"
//             // Tailwind classes for the button style: border, yellow text, and hover effect
//             className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold transition duration-300
//                  text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 shadow-xl"
//         >
//             <span>Contact Us</span>
//             <ArrowRight className="w-4 h-4 ml-1" />
//         </a>
//     );

//     return (
//         // The main container with relative positioning for children.
//         // NOTE: The effect works best when this component is part of a larger scrollable page.
//         <section className="relative w-full h-[500px] overflow-hidden bg-gray-900 flex items-center">

//             {/* Background Image Container */}
//             <div
//                 // KEY CHANGE: Added bg-fixed to create the parallax-like effect on scroll
//                 // IMPORTANT: This requires the <body> or parent wrapper to be scrollable.
//                 className="absolute inset-0 bg-cover bg-center bg-fixed"
//                 style={{
//                     backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
//                     // Applying a slight blur and scale to match the background effect in the image
//                     filter: 'blur(3px)',
//                     transform: 'scale(1.02)'
//                 }}
//             />

//             {/* Dark Overlay (elementor-background-overlay equivalent) */}
//             <div className="absolute inset-0 bg-gray-900 opacity-80" />

//             {/* Content Container (elementor-container equivalent) */}
//             <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex justify-end w-full h-full items-center">
//                 {/* The content block, positioned to the right side of the screen on desktop */}
//                 <div className="w-full md:w-1/2 lg:w-2/5 p-6 md:p-0">
//                     <div className="space-y-4">
//                         <Title />
//                         <Description />
//                         <ContactButton />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroBanner;

"use client";

import React from 'react';
// Using lucide-react for the icon, which is a common pattern in Next.js/React development
import { ArrowRight } from 'lucide-react';

// Placeholder URL for the dramatic camera lens image seen in the reference.
const BACKGROUND_IMAGE_URL = "https://templatekit.jegtheme.com/hardy/wp-content/uploads/sites/249/2022/03/a-man-photographer-with-a-camera-takes-a-photo-in-the-dark-copy-space--e1647922080119.jpg";

/**
 * HeroBanner Component: Recreates the dark, image-backed section with right-aligned content
 * and a simple CSS parallax background effect (using bg-fixed).
 */
const HeroBanner: React.FC = () => {
    // Inner component for the main title
    const Title: React.FC = () => (
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Get Your <span className="text-yellow-500">Best Picture</span> From Our Shot
        </h2>
    );

    // Inner component for the descriptive paragraph
    const Description: React.FC = () => (
        <p className="text-gray-300 mb-8 max-w-lg text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.
        </p>
    );

    // Inner component for the "Contact Us" button
    const ContactButton: React.FC = () => (
        <a
            href="#"
            // Tailwind classes for the button style: border, yellow text, and hover effect
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold transition duration-300
                     text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 shadow-xl"
        >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 ml-1" />
        </a>
    );

    return (
        // The main container. Needs to be part of a scrollable page for the parallax effect to work.
        <section className="relative w-full h-[500px] overflow-hidden flex items-center">

            {/* Background Image Container */}
            <div
                // **Parallax Key:** The 'bg-fixed' class fixes the background image relative to the viewport.
                // As the page scrolls, the image appears to move slower than the content.
                className="absolute inset-0 bg-cover bg-center **bg-fixed**"
                style={{
                    backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
                    // Applying a slight blur and scale for visual effect
                    filter: 'blur(3px)',
                    transform: 'scale(1.02)'
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gray-900 opacity-80" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex justify-end w-full h-full items-center">
                {/* The content block, positioned to the right side of the screen on desktop */}
                <div className="w-full md:w-1/2 lg:w-2/5 p-6 md:p-0">
                    <div className="space-y-4">
                        <Title />
                        <Description />
                        <ContactButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;