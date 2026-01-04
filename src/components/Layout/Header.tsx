import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const base =
    "text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400";
  const active =
    "text-blue-600 dark:text-blue-400 font-semibold";

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-shadow ${
        scrolled ? "shadow-md dark:shadow-black/40" : ""
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">

        {/* LEFT — Nameplate */}
        <a
          href="/"
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap"
        >
          Mike Underwood
        </a>

        {/* CENTER — Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-lg font-medium">
          <NavLink to="/" className={({ isActive }) => (isActive ? active : base)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? active : base)}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? active : base)}>Projects</NavLink>
          <NavLink to="/writing" className={({ isActive }) => (isActive ? active : base)}>Writing</NavLink>
        </div>

        {/* RIGHT — Actions */}
        <div className="flex items-center gap-4">

          {/* Resume Button */}
          <a
            href="/mikeeunderwood_software_engineer_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-blue-600 dark:border-blue-400 px-3.5 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Résumé
          </a>

          <DarkModeToggle />

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none"
          >
            {open ? (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mt-1 md:hidden animate-slideDown border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-5 space-y-4 text-lg font-medium">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? active : base) + " block"}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? active : base) + " block"}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? active : base) + " block"}
          >
            Projects
          </NavLink>

          <NavLink
            to="/writing"
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? active : base) + " block"}
          >
            Writing
          </NavLink>

          <a
            href="/mikeeunderwood_software_engineer_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Résumé
          </a>
        </div>
      )}
    </header>
  );
}