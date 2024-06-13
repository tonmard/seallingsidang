import React from "react";
import { rob1, rob2 } from "../constants";

const Berita = () => {
  return (
    <div id="berita" className="w-full bg-white py-16 px-8 shadow-slate-900 ">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 duration-300 md:max-w-4xl">
        <div class="md:flex ">
          <div class=" md:justify-center">
            <img
              class="h-48 w-full object-cover md:h-[300px] md:w-[1000px]"
              src={rob1}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <time>10 Mar, 2024</time>
            <h3 class="block mt-1 text-lg leading-tight font-medium text-black ">
              Apa itu banjir rob?
            </h3>
            <p class="mt-2 text-slate-500">
              Banjir rob adalah pola fluktuasi muka air laut yang dipengaruhi
              oleh gaya tarik benda-benda angkasa, terutama oleh bulan dan
              matahari terhadap massa air laut di bumi. Banjir rob juga disebut
              banjir pasang surut air laut.
            </p>
            <a href="/">
              <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10  duration-300 bg-slate-900  hover:bg-slate-950 w-44 h-10 mt-10 rounded-lg font-medium  mx-auto  text-white">
                Lihat Selengkapnya
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-xl hover:scale-105 duration-300 overflow-hidden mt-12 md:max-w-4xl">
        <div class="md:flex ">
          <div class=" md:justify-center">
            <img
              class="h-48 w-full object-cover md:h-[300px] md:w-[1000px]"
              src={rob2}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <time>10 Mar, 2024</time>
            <h3 class="block mt-1 text-lg leading-tight font-medium text-black ">
              Bagaimana proses terjadinya banjir rob?
            </h3>
            <p class="mt-2 text-slate-500">
              Banjir rob adalah pola fluktuasi muka air laut yang dipengaruhi
              oleh gaya tarik benda-benda angkasa, terutama oleh bulan dan
              matahari terhadap massa air laut di bumi. Banjir rob juga disebut
              banjir pasang surut air laut.
            </p>
            <a href="/asd">
              <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10  duration-300 bg-slate-900  hover:bg-slate-950 w-44 h-10 mt-10 rounded-lg font-medium  mx-auto  text-white">
                Lihat Selengkapnya
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
