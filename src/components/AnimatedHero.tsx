"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  lines: string[];
  className?: string;
};

const AnimatedHero = ({ lines, className }: Props) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll(".letter");

    if (!letters) return;

    gsap.fromTo(
      letters,
      {
        yPercent: 60,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.025,
      }
    );
  }, []);

  return (
    <h1 ref={containerRef} className={className}>
      {lines.map((line, li) => (
        <div key={li} className="block">
          {line.split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </div>
      ))}
    </h1>
  );
};

export default AnimatedHero;