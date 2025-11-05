"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TextAlignEnd, X, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
              src={isScrolled ? "/image/logo1.png" : "/logo/logo2.png"}
              alt="Dream Catcher Studio Logo"
              className="w-22 h-auto transition-all duration-300"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <a
            href="tel:+11234567890" // Replace with your actual phone number
            className={`px-4 py-3 cursor-pointer text-sm  font-medium  transition-colors duration-200 shadow-xl ${buttonBg} lg:px-5 lg:py-2 lg:text-base flex items-center`}
          >
            <PhoneCall className="w-4 h-4 inline-block mr-2" />
            Call Now
          </a>

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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* --- Mobile Menu (Slide from Left with Logo) --- */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-xl transition-all duration-300 ease-out transform z-50 ${mobileMenuClasses}`}
      >
        {/* Mobile Menu Header (Logo + Close Button) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link
            href="/"
            className="flex flex-col items-start leading-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xl font-serif tracking-widest text-gray-800">
              FAWAAHATUL
            </span>
            <span className="text-xs font-serif tracking-widest mt-1 text-gray-800 opacity-80">
              KHALEEJ
            </span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col space-y-2 p-6">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`text-gray-800 montserratCTA font-semibold py-2 px-3 rounded hover:bg-gray-100 transition-colors ${
                  isActive ? "text-yellow-600" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}

          {/* ✅ Direct Call Button in Mobile Menu */}
          <a
            href="tel:+11234567890" // Replace with your actual phone number
            className={`w-full mt-4 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 shadow-xl ${buttonBg} flex items-center justify-center`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <PhoneCall className="w-4 h-4 inline-block mr-2" />
            Call Now
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
