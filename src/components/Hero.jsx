import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-7xl object-top font-black mb-10">
          Sea Level Monitoring.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-normal italic py-4">
            Monitoring air laut secara
          </p>
          <Typed
            className="underline decoration-sky-500 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["REAL TIME", "AKURAT", "EFISIEN"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-xl text-xl font-medium text-gray-500 mb-20">
          Deteksi awal, aksi cepat: bersama melindungi ekosistem laut dari
          ancaman.
        </p>
        <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10  duration-300 bg-white hover:bg-slate-100 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-slate-900">
          Monitoring Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
