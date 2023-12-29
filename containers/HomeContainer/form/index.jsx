import React from "react";
import { BUTTONS } from "../constant";
function Form() {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      {BUTTONS.map((button) => (
        <div key={button.id} className="flex flex-col items-start">
          <h3 className="text-[15px] font-bold leading-normal text-[#7191a5]">
            {button.title}
          </h3>
          <div className="w-full flex gap-2 md:gap-5">
            {button.buttons.map((b) => (
              <button
                key={b.id}
                className="bg-[#bcced9] text-[16px] md:text-[26px] rounded-[26px] h-10 text-[#fcfcfc] text-base font-bold leading-normal flex-1 inline-flex justify-center items-center"
              >
                {b.buttonName}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button className="inline-flex justify-center items-center w-full h-12 bg-[#fda214] text-[#fcfcfc] text-lg font-bold leading-normal rounded-[26px] ">
        Start Game
      </button>
    </div>
  );
}

export default Form;
