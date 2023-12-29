import React from "react";
import Form from "./form";
function HomeContainer() {
  return (
    <main className="w-screen h-screen bg-[#152938] ">
      <div className="w-full h-full flex items-center justify-center px-6 md:px-14 lg:px-0">
        <div className="w-full flex flex-col items-center gap-11 lg:gap-[78px] ">
          <h1 className="heading-m text-[#fcfcfc]">memory</h1>
          <div className="w-full max-w-[654px] bg-[#fcfcfc] p-6 md:p-14 rounded-[10px] ">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeContainer;
