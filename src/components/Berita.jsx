import React from "react";
import { rob1, rob2 } from "../constants";

const Berita = () => {
  return (
    <div className="w-full bg-white py-16 px-4 saturate-50">
      <div className="w-full shadow-lg cursor-grabbing p-4 my-4 rounded-lg hover:scale-105 duration-300 max-w-[900px] mb-20 mt-10 mx-auto  grid md:grid-cols-2">
        <img className="w-[300px] mx-auto my-4" src={rob1} alt="/" />
        <div className="flex flex-col justify-center ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-slate-900 py-2">
            Apa itu banjir rob?
          </h1>
          <p>
            Banjir rob adalah pola fluktuasi muka air laut yang dipengaruhi oleh
            gaya tarik benda-benda angkasa, terutama oleh bulan dan matahari
            terhadap massa air laut di bumi. Banjir rob juga disebut banjir
            pasang surut air laut.
          </p>
          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10  duration-300 bg-slate-900 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
      <div className="w-full shadow-lg cursor-grabbing p-4 my-4 rounded-lg hover:scale-105 duration-300 max-w-[900px] mb-10 mx-auto  grid md:grid-cols-2">
        <img className="w-[300px] mx-auto my-4" src={rob2} alt="/" />
        <div className="flex flex-col justify-center ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-slate-900 py-2">
            Bagaimana proses terjadinya banjir rob?
          </h1>
          <p>
            Seperti diketahui banjir rob terjadi akibat luapan air laut.
            Terjadinya air pasang di laut ini menahan aliran sungai yang
            seharusnya menuju ke laut. Namun karena tumpukan air sungai berlebih
            yang kemudian menyebabkan tanggul jebol akibat tak mampu menampung
            luapan air dan membuat air meluap ke daratan.
          </p>
          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10  duration-300 bg-slate-900 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Berita;
