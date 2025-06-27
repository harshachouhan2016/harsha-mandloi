import React, { useState } from "react";
import {
 
  ArrowDown,
  Menu,
  X,
} from "lucide-react";
import resumePDF from "../assets/documents/Harsha-Mandloi.pdf";

const HeaderData = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-100 text-center md:fixed sm:fixed top-0 left-0 bg-slate xs:p-4 pt-5 md:block sm:p-8 sm:overflow-auto md:h-screen shadow-[0px_0px_15px_5px_rgba(135,135,135,0.2)]">
      <div className="myImage"></div>
      <div className="justify-between items-center sm:mb-2 xs:mb-1">
        <h1 className="xs:text-2xl sm:text-3xl font-normal text-gray-900">
          Harsha Mandloi
        </h1>
      </div>
      <div className="text-slate-900 text-1xl sm:mb-3 xs:mb-1">
        UI Designer / Developer
      </div>
      <a
        href={resumePDF}
        className="sm:my-10 inline-flex xs:my-1 xs:mt-2 mt-6 md:mt-0 pl-3 pt-2 border bg-slate-800 text-white text-sm rounded hover:bg-orange-600 hover:text-white transform-gpu"
        download="Harsha-Mandloi.pdf"
        title="Download Resume"
      >
        Download Resume{" "}
        <ArrowDown className="animate-bounce m-1 py-1"></ArrowDown>
      </a>

      {/* Hamburger for mobile */}
      <div className="sm:hidden flex justify-end mt-4 pr-4">
        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="space-y-2 text-slate-900 xs:hidden sm:block md:block nav-ul w-1/2 m-auto">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className="transition delay-100 duration-300 ease-in-out hover:translate-x-2 xs:float-left sm:float-none"
          >
            <a href={link.href} title={link.label}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-6 sm:hidden animate-fadein">
          {/* Cancel/Close Button */}
          <button
            className="absolute top-4 right-4 text-slate-900 hover:text-orange-600 transition"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  title={link.label}
                  className="text-2xl text-slate-900 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style>
        {`
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </nav>
  );
};

export default HeaderData;