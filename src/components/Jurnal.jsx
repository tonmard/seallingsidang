import React from "react";
import { buku, waves } from "../constants";

const Jurnal = () => {
  return (
    <div className="bg-white animated">
      <div className="max-w-[1000px] md:max-w-[1240px] h-full mx-auto text-center flex flex-col">
        <div className="md:grid-cols-3 py-8 px-10 m-4 text-center gap-8 bg-slate-900 text-white  h-auto rounded-lg-lg shadow-xl grid grid-cols-1">
          <div className="py-2 hidden md:flex">
            <img src={buku} alt="buku" height={400} width={400} />
          </div>
          <div className=" md:col-span-2 py-14 md:text-right text-2xl  text-white font-extrabold">
            PENELITIAN
            <p className=" md:text-right text-4xl md:text-6xl text-white my-2 font-extrabold">
              Ayo cari tahu bersama Sealling.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white font-[sans-serif] p-10 mb-14">
        <div class="max-w-6xl max-md:max-w-lg mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
              <img
                src={waves}
                alt="Blog Post 1"
                class="lg:w-2/5 min-h-[250px] h-full hidden md:flex object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  A Guide to Igniting Your Imagination
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  10 FEB 2023 | BY JOHN DOE
                </span>
                <p class="text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit.
                </p>
                <a
                  href="/"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
              <img
                src={waves}
                alt="Blog Post 2"
                class="lg:w-2/5 min-h-[250px] h-full hidden md:flex object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  Hacks to Supercharge Your Day
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  7 JUN 2023 | BY MARK ADAIR
                </span>
                <p class="text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit.
                </p>
                <a
                  href="/"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
              <img
                src={waves}
                alt="Blog Post 2"
                class="lg:w-2/5 min-h-[250px] h-full hidden md:flex object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  Trends and Predictions
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  5 OCT 2023 | BY SIMON KONECKI
                </span>
                <p class="text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit.
                </p>
                <a
                  href="/"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
              <img
                src={waves}
                alt="Blog Post 2"
                class="lg:w-2/5 min-h-[250px] h-full hidden md:flex object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  Innovators Changing the Game
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  10 DEC 2023 | BY SIMON KONECKI
                </span>
                <p class="text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit.
                </p>
                <a
                  href="/"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurnal;
