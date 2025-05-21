'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useState } from "react";
 
export default function Header() {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = "px-4 py-2 rounded transition-colors";
  const activeLinkStyle = `${linkStyle} text-[#323F48] font-semibold`;
  const inactiveLinkStyle = `${linkStyle} text-[#323F48] hover:text-[#4A5568]`;
  const separatorStyle = "text-[#323F48] opacity-50";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full flex justify-between items-start bg-white shadow-sm transition-all duration-300 min-h-[120px] pt-2 pb-4 px-4 md:px-8 ${
      scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="relative w-[140px] h-[60px] md:w-[180px] md:h-[80px] -mt-2">
        <Image
          src="/images/CAYLA_HD_Logo 2.png"
          alt="Cayla Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden text-[#323F48] p-2 mt-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block mt-2">
        <ul className="flex items-center">
          <li>
            <Link href="/" className={pathname === "/" ? activeLinkStyle : inactiveLinkStyle}>
              Home
            </Link>
          </li>
          <span className={separatorStyle}>|</span>
          <li>
            <Link href="/greennovative" className={pathname === "/greennovative" ? activeLinkStyle : inactiveLinkStyle}>
              Greennovative
            </Link>
          </li>
          <span className={separatorStyle}>|</span>
          <li>
            <Link href="/laboratories" className={pathname === "/laboratories" ? activeLinkStyle : inactiveLinkStyle}>
              Laboratories
            </Link>
          </li>
          <span className={separatorStyle}>|</span>
          <li>
            <Link href="/services" className={pathname === "/services" ? activeLinkStyle : inactiveLinkStyle}>
              Services
            </Link>
          </li>
          <span className={separatorStyle}>|</span>
          <li>
            <Link href="/aboutus" className={pathname === "/aboutus" ? activeLinkStyle : inactiveLinkStyle}>
              About us
            </Link>
          </li>
          <span className={separatorStyle}>|</span>
          <li>
            <Link href="/contacts" className={pathname === "/contacts" ? activeLinkStyle : inactiveLinkStyle}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="flex flex-col items-center py-4">
          <li className="w-full text-center">
            <Link href="/" className={`block ${pathname === "/" ? activeLinkStyle : inactiveLinkStyle}`}>
              Home
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/greennovative" className={`block ${pathname === "/greennovative" ? activeLinkStyle : inactiveLinkStyle}`}>
              Greennovative
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/laboratories" className={`block ${pathname === "/laboratories" ? activeLinkStyle : inactiveLinkStyle}`}>
              Laboratories
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/services" className={`block ${pathname === "/services" ? activeLinkStyle : inactiveLinkStyle}`}>
              Services
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/aboutus" className={`block ${pathname === "/aboutus" ? activeLinkStyle : inactiveLinkStyle}`}>
              About us
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/contacts" className={`block ${pathname === "/contacts" ? activeLinkStyle : inactiveLinkStyle}`}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}