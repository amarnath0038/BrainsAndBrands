"use client";

import { useState } from "react";
import clsx from "clsx";
import Logo from "./Logo";
import SideLogo from "./SideLogo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">

      
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

      {/* mobile nav */}
      <nav className="md:hidden flex justify-between items-center px-6 h-16">

        <Logo className="text-white h-10" />

        {/* Hamburger */}
        <button onClick={() => setOpen(true)} className="w-8 h-6">
          <div className="flex flex-col gap-1">
            <span className="block h-[2px] bg-white w-full"></span>
            <span className="block h-[2px] bg-white w-full"></span>
            <span className="block h-[2px] bg-white w-full"></span>
          </div>
        </button>

      </nav>

      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      {/* Mobile menu panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-80 bg-black transition-transform duration-500 z-50 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >

        {/* Close button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="text-white text-2xl">
            ×
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-6 gap-6 text-white text-lg">

          <a href="#" className="hover:opacity-80">
            Explore The Studio →
          </a>

          <a href="#" className="hover:opacity-80">
            Create Without Limits →
          </a>

        </div>

      </div>

    </header>
  );
};

export default Navbar;