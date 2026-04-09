"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";
import SideLogo from "./SideLogo";
import Link from "next/link";
import handleSamePageScroll from "@/utils/navigation";

type NavBarProps = {
  className?: string;
};

const Navbar = ({ className }: NavBarProps) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      
      // 1. Determine if we are at the very top (the "first page" view)
      // We use 10px as a buffer for better feel
      setIsAtTop(current < 10);

      // 2. Navigation Visibility logic
      if (current <= 0) {
        setShow(true); // Always visible at absolute top
      } else if (current > lastScrollRef.current && current > 80) {
        setShow(false); // Scrolling down - Hide
      } else if (current < lastScrollRef.current) {
        setShow(true); // Scrolling up - Show
      }

      lastScrollRef.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        show ? "translate-y-0" : "-translate-y-full",
        // Logic: Transparent at the top of ANY route, blurred otherwise
        isAtTop ? "bg-transparent" : "bg-black/20 backdrop-blur-md",
        className
      )}
    >
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex px-6 md:px-12 lg:px-16 xl:px-[123px] pt-4 h-24 w-full items-center justify-between font-normal">
        <Link href="/services" onClick={handleSamePageScroll("/services")}>
          <SideLogo
            text="Explore The Studio"
            className="gap-2 text-white hover:underline"
          />
        </Link>

        <Link href="/" onClick={handleSamePageScroll("/")}>
          <Logo className="text-white h-16 hover:opacity-80 mb-4" />
        </Link>

        <Link href="/contact" onClick={handleSamePageScroll("/contact")}>
          <SideLogo
            text="Create Without Limits"
            className="gap-2 text-white hover:underline"
          />
        </Link>
      </nav>

      {/* MOBILE NAV */}
      <nav className="md:hidden flex justify-between items-center px-6 h-16">
        <Link href="/" onClick={handleSamePageScroll("/")}>
          <Logo className="text-white h-10" />
        </Link>

        <button onClick={() => setOpen(true)} className="w-8 h-6">
          <div className="flex flex-col gap-1">
            <span className="block h-[2px] bg-white w-full"></span>
            <span className="block h-[2px] bg-white w-full"></span>
            <span className="block h-[2px] bg-white w-full"></span>
          </div>
        </button>
      </nav>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      {/* MOBILE MENU */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-80 bg-black transition-transform duration-500 z-50 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl font-light"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col px-6 gap-6 text-white text-lg">
          <Link href="/services" className="hover:opacity-80" onClick={handleSamePageScroll("/services")}>
            <SideLogo
              text="Explore The Studio"
              className="gap-3 text-lg text-white hover:underline"
            />
          </Link>
          <Link href="/contact" className="hover:opacity-80" onClick={handleSamePageScroll("/contact")}>
            <SideLogo
              text="Create Without Limits"
              className="gap-3 text-lg text-white hover:underline"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;




