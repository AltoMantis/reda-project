'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollDirection } from "../hooks/useScrollDirection";
 
export default function Header() {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();

  const linkStyle = "px-4 py-2 rounded transition-colors";
  const activeLinkStyle = `${linkStyle} text-[#F5F5F5]`;
  const inactiveLinkStyle = `${linkStyle} text-[#F5F5F5] hover:opacity-80`;
  const separatorStyle = "text-[#F5F5F5] opacity-50";

  return (
    <header className={`fixed w-full flex justify-center items-center bg-[#323F48] transition-all duration-300 min-h-[100px] py-6 ${
      scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="text-xl font-bold">
        
      </div>
      <nav>
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
    </header>
  );
}