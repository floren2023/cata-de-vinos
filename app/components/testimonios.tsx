import React from "react";
import Testimonio from "./testimonio";

function Testimonios() {
  return (
    <div className="pl-10 pr-10 pb-10">
      <div className="  italic tracking-wide text-gray-500 pl-10 text-md    font-[merienda] pt-4  ">
        Testimonios:
      </div>

      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto pl-20 pr-20 
      "
      >
        <Testimonio />
        <Testimonio />
        <Testimonio />
      </div>
    </div>
  );
}

export default Testimonios;
