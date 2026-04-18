"use client";

import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 shadow-2xl shadow-slate-950/20 border-b border-slate-800"
          : "bg-slate-950/75 backdrop-blur border-b border-slate-900/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 md:px-6 flex justify-between items-center">

        <a
          href="#top"
          className="group font-semibold tracking-tight flex items-center gap-2 text-slate-100 transition hover:text-amber-400"
        >
          <FiUser className="text-amber-300 group-hover:text-amber-400 transition" />
          Amrutha Moparthi
        </a>

        <div className="hidden md:flex gap-8 text-sm tracking-wide text-slate-300">
          <a href="#about" className="transition hover:text-amber-400">Summary</a>
          <a href="#experience" className="transition hover:text-amber-400">Experience</a>
          <a href="#skills" className="transition hover:text-amber-400">Expertise</a>
          <a href="#certifications" className="transition hover:text-amber-400">Certifications</a>
          <a href="#services" className="transition hover:text-amber-400">Solutions</a>
          <a href="#contact" className="transition hover:text-amber-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
