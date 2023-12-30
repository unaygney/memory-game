import React from "react";

function Header() {
  return (
    <header className=" bg-transparent pt-[67px] ">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-[#152938] text-2xl leading-normal font-bold">
            memory
          </h1>

          <div className="flex gap-4">
            <button className="w-[78px] h-10 bg-[#fda214] hover:bg-[#FFB84A] inline-block items-center justify-center text-[#fcfcfc] font-bold leading-normal text-base rounded-[26px] md:hidden">
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
  );
}

export default Header;
