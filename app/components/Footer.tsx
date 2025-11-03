import React from "react";
// Assuming lucide-react is available for icons in the environment
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Footer component definition
const Footer: React.FC = () => {
  // Navigation Links Data
  const mainNavLinks = [
    { name: "About us", href: "#" },
    { name: "Our Porfolio", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  // Utility Links Data
  const utilityLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Term of Service", href: "#" },
  ];

  return (
    <footer className="w-full">
      {/* --- Main Footer Section (Dark Gray - matched to image) --- */}
      <div className="bg-black text-white py-16 ">
        <div className="templateContainer flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0">
          {/* 1. Main Navigation Links (Left) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 text-sm font-semibold text-gray-200">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-amber-500 transition duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 2. Center Content: Logo, Text, Social Icons */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-6 text-center px-4">
            {/* Logo Placeholder (Simulating the gold/orange graphic) */}
            <div className="flex-none">
              <Link href="/" className="flex items-center">
                <Image
                  width={200}
                  height={200}
                  src="/image/logo1.jpg" // replace with your logo path
                  alt="Dream Catcher Studio Logo"
                  className="w-22 h-auto transition-all duration-300"
                />
              </Link>
            </div>

            {/* Description Text */}
            <p className="text-sm text-gray-400 max-w-sm">
              We craft minimal, timeless visuals for brands and people.
              Photography • Videography • Creative direction. Based in your
              city, available for studio & on-location shoots.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition duration-200 p-2 border-2 border-gray-600 rounded-full hover:border-amber-500 shadow-md"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition duration-200 p-2 border-2 border-gray-600 rounded-full hover:border-amber-500 shadow-md"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition duration-200 p-2 border-2 border-gray-600 rounded-full hover:border-amber-500 shadow-md"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="text-gray-400 hover:text-white transition duration-200 p-2 border-2 border-gray-600 rounded-full hover:border-amber-500 shadow-md"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* 3. Utility Links (Right) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 text-sm font-semibold text-gray-200">
              {utilityLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-amber-500 transition duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* --- Bottom Copyright Bar (Very Dark Gray/Black) --- */}
      <div className="bg-[#1a1a1a] text-gray-400 text-xs py-4">
        <div className="templateContainer flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
          <p className="text-center md:text-left">Dream Catcher Studio</p>
          <p className="text-center md:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App component to render the footer, following React conventions.
const MainFooter: React.FC = () => {
  return (
    // Use a min-h-screen layout to push the footer to the bottom for demonstration
    <div className="flex flex-col font-sans bg-gray-100">
      <Footer />
    </div>
  );
};

export default MainFooter;
