"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TextAlignEnd, X, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

interface NavItem {
  title: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  { title: "About us", href: "#about-us" },
  { title: "Our Porfolio", href: "#porfolio" },
  { title: "Our Services", href: "#services" },
  { title: "Contact us", href: "#contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const iconColor = isScrolled ? "text-gray-800" : "text-white";
  const textColor = isScrolled ? "text-gray-800" : "text-white";

  const buttonBg = isScrolled
    ? "bg-gray-800 text-white hover:bg-gray-700"
    : "bg-white text-black hover:bg-gray-100";
  const logoColor = isScrolled ? "text-gray-800" : "text-white";

  const mobileMenuClasses = isMobileMenuOpen
    ? "translate-x-0 opacity-100 visible"
    : "-translate-x-full opacity-0 invisible pointer-events-none";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-[#efeef1] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="templateContainer px-4 py-4 h-20 flex items-center justify-between">
        <nav className="hidden md:flex items-center space-x-8 flex-1">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`text-md font-light tracking-normal transition-colors duration-200 ${textColor} ${
                  isActive ? "text-yellow-600" : ""
                } hover:text-yellow-600`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Center: Logo */}
        <div className="flex-none">
          <Link href="/" className="flex items-center">
            <Image
              width={200}
              height={200}
              src={isScrolled ? "/image/logo1.png" : "/logo/logo5.png"}
              alt="Dream Catcher Studio Logo"
              className="w-22 h-auto transition-all duration-300"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <a
            href="tel:+919819817022"
            className={`w-10 h-10 cursor-pointer text-sm   items-center justify-center md:hidden ${
              isScrolled ? "text-black" : "text-white"
            } font-medium  transition-colors duration-200   lg:text-base flex items-center`}
          >
            <PhoneCall size={22} className=" inline-block mr-2" />
          </a>

          <div className="hidden md:flex gap-2">
            <a
              href="tel:+919819817022"
              className={`relative overflow-hidden px-6 py-2 text-sm tracking-wide bg-[#efeef1]  border-Textprimary text-Textprimary flex items-center gap-2 justify-center cursor-pointer transition-all duration-500 ease-in-out  hover:scale-100 
      before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
      hover:text-white hover:before:left-0  font-medium`}
            >
              <PhoneCall size={16} />
              Call Now
            </a>
          </div>

          <button
            className="md:hidden ml-2 p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${iconColor}`} />
            ) : (
              <TextAlignEnd className={`w-6 h-6 ${iconColor}`} />
            )}
          </button>
        </div>
      </div>

      {/* --- Overlay (Dim Background) --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-50 z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* --- New Mobile Slide Menu using improved UI --- */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-xl transform transition-all duration-300 z-50 ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 "
            : "-translate-x-full opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              width={160}
              height={160}
              src="/image/logo1.png"
              alt="Dream Catcher Studio Logo"
              className="w-full h-20"
            />
          </Link>
        </div>

        <div className="relative overflow-hidden mt-4 w-full h-full overflow-y-auto px-6 pb-8">
          <div>
            {mainNavItems.map((item, index) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wide font-medium text-gray-800 block py-3 transition hover:text-yellow-600"
                >
                  {item.title}
                </Link>

                {/* ⚡ Show border except last item */}
                {index !== mainNavItems.length - 1 && (
                  <div className="border-b border-dashed border-gray-300/80"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
