"use client";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils/shadcn";
import { useScroll } from "@/hooks";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          // "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          // "border-b border-gray-200 bg-white": selectedLayout,
          "bg-white/75 backdrop-blur-lg": scrolled,
          "bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        {/* <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex ">Logo</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
