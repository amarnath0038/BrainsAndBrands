"use client";

import { useState, useEffect } from "react";
import PlayButton from "./PlayButton";

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  // Optional: prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      {/* Thumbnail */}
      <div className="flex flex-col items-center mt-20">

        <div
          onClick={() => setOpen(true)}
          className="relative w-[200px] h-[120px] lg:w-[270px] lg:h-[150px] overflow-hidden cursor-pointer group"
        >
          <img
            src="/BrainsAndbrandsVideoBackground.webp"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 ">
            <PlayButton />
          </div>
        
        </div>

      </div>

      {/* Modal */}
      {open && (
        <div 
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-40 px-4">

          <div 
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-white text-3xl z-50 hover:opacity-70 transition"
            >
              ×
            </button>

            {/* Video */}
            <video
              src="/Brains-Brands-Final-Compressed.mp4"
              controls
              autoPlay
              className="w-full h-auto"
            />

          </div>

        </div>
      )}
    </>
  );
};

export default VideoSection;