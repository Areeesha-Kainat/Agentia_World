"use client";
import { useState } from "react";
import Image from "next/image";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import CloseIcon from "@/assets/icon-close.png";
import Link from "next/link";
import Button from "@/components/Button";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
          <Link href="/">
       
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon  className="h-8 w-8" />
            </div>
      </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link href="/Features" className="text-white/70 hover:text-white transition">Features</Link>
              <Link href="/API" className="text-white/70 hover:text-white transition">API</Link>
              <Link href="/Pricing" className="text-white/70 hover:text-white transition">Pricing</Link>
              <Link href="/Documentation" className="text-white/70 hover:text-white transition">Documentation</Link>
              <Link href="/Contact" className="text-white/70 hover:text-white transition">Contact</Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join AI Hub</Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <Image src={CloseIcon} alt="Close Menu" width={22} height={22} />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white p-6 shadow-lg md:hidden">
            <nav className="flex flex-col gap-4 text-center">
              <Link href="/Features" className="text-white/70 hover:text-white transition">Features</Link>
              <Link href="/API" className="text-white/70 hover:text-white transition">API</Link>
              <Link href="/Pricing" className="text-white/70 hover:text-white transition">Pricing</Link>
              <Link href="/Documentation" className="text-white/70 hover:text-white transition">Documentation</Link>
              <Link href="/Contact" className="text-white/70 hover:text-white transition">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
