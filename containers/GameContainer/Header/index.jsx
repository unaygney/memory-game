"use client";
import React, { useState } from "react";
import Link from "next/link";
function Header() {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <header className=" bg-transparent  lg:pt-[32px]   ">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <Link
              href={"/"}
              className="text-[#152938] text-2xl leading-normal font-bold"
            >
              memory
            </Link>

            <div className="flex gap-4">
              <button
                onClick={() => setActive(true)}
                className="w-[78px] h-10 bg-[#fda214] hover:bg-[#FFB84A] inline-block items-center justify-center text-[#fcfcfc] font-bold leading-normal text-base rounded-[26px] md:hidden"
              >
                Menu
              </button>
              <button className="w-[127px] h-10 bg-[#fda214] hover:bg-[#FFB84A]  items-center justify-center text-[#fcfcfc] font-bold leading-normal text-base rounded-[26px] hidden md:inline-flex">
                Restart
              </button>
              <button className="w-[149px] h-10 bg-[#dfe7ec] hover:bg-[#6395B8] hover:text-[#fcfcfc] items-center justify-center text-[#304859] font-bold leading-normal text-base rounded-[26px] hidden md:inline-flex">
                New Game
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Restart or New Game Menu */}
      <div
        className={`${
          isActive ? "fixed" : "hidden"
        } top-1/2 -translate-y-1/2 left-6 right-6 gap-6 bg-[#F2F2F2] z-10 rounded-[10px]`}
      >
        <div className="flex flex-col gap-4 p-6 ">
          <button className="w-full h-12 bg-[#fda214] hover:bg-[#FFB84A] text-[#fcfcfc] inline-flex justify-center items-center text-lg font-bold leading-normal rounded-[26px]">
            Restart
          </button>
          <button className="w-full h-12 bg-[#DFE7EC] hover:bg-[#6395B8] text-[#304859] hover:text-[#FCFCFC] inline-flex justify-center items-center text-lg font-bold leading-normal rounded-[26px]">
            New Game
          </button>
          <button
            onClick={() => setActive(false)}
            className="w-full h-12 bg-[#DFE7EC] hover:bg-[#6395B8] text-[#304859] hover:text-[#FCFCFC] inline-flex justify-center items-center text-lg font-bold leading-normal rounded-[26px]"
          >
            Resume Game
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setActive(false)}
        className={`${
          isActive ? "fixed " : "hidden"
        } top-0 left-0 w-full h-full bg-black opacity-50 z-0 `}
      ></div>
    </>
  );
}

export default Header;
