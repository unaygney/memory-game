"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { BUTTONS } from "../constant";
import { useRouter } from "next/navigation";
function Form() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      selectTheme: "",
      numbersOfPlayers: "",
      gridSize: "",
    },
  });

  const onSubmit = (data) => {
    const url = `/game?theme=${data.selectTheme}&players=${data.numbersOfPlayers}&gridSize=${data.gridSize}`;
    router.push(url);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {BUTTONS.map((button) => (
        <div
          key={button.id}
          className="flex flex-col gap-3 md:gap-4 items-start"
        >
          <h3 className="text-[15px] font-bold leading-normal text-[#7191a5]">
            {button.title}
          </h3>
          <div className="w-full flex gap-2 md:gap-5">
            {button.buttons.map((b) => (
              <label key={b.id} className="flex-1">
                <input
                  type="radio"
                  value={b.buttonName}
                  {...register(`${button.value}`)}
                  className="sr-only peer "
                  defaultChecked={b.id === 0}
                />
                <div
                  className={`w-full text-[16px]  md:text-[26px] rounded-[26px] h-10 text-[#fcfcfc] text-base font-bold leading-normal inline-flex justify-center items-center p-2 cursor-pointer bg-[#bcced9] peer-checked:bg-[#304859] `}
                >
                  {b.buttonName}
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="inline-flex justify-center items-center w-full h-12 bg-[#fda214] text-[#fcfcfc] text-lg font-bold leading-normal rounded-[26px] "
      >
        Start Game
      </button>
    </form>
  );
}

export default Form;
