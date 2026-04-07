"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";
import SideLogo from "./SideLogo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      // always visible at top
      if (current <= 0) {
        setShow(true);
        return;
      }

      // scrolling down
      if (current > lastScroll && current > 80) {
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        show ? "translate-y-0" : "-translate-y-full"
      )}
      style={{
        backgroundColor: isHome
          ? "transparent" 
          : "rgba(0,0,0,0.2)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* DESKTOP */}
      <nav className="hidden md:flex px-6 md:px-12 lg:px-16 xl:px-[123px] pt-4 h-20 items-center justify-between">
        <SideLogo
          text="Explore The Studio"
          className="gap-6 text-white hover:underline"
        />

        <Logo className="text-white h-16 hover:opacity-80" />

        <SideLogo
          text="Create Without Limits"
          className="gap-6 text-white hover:underline"
        />
      </nav>

      {/* MOBILE */}
      <nav className="md:hidden flex justify-between items-center px-6 h-16">
        <Logo className="text-white h-10" />

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
        {/* Close */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-6 gap-6 text-white text-lg">
          <a href="#" className="hover:opacity-80">
            Explore The Studio
          </a>
          <a href="#" className="hover:opacity-80">
            Create Without Limits
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;