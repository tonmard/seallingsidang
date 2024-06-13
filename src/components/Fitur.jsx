import React from "react";
import { alarm, bintang, jam } from "../constants";

const Fitur = () => {
  return (
    <div id="fitur" className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[700px] mx-auto text-center text-slate-900 mb-40">
        <h1 className="text-4xl object-top font-bold">
          Keunggulan Layanan Kami
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl cursor-grabbing flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-40 mx-auto mt-[-3rem]" src={jam} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8 ">Real Time</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-t mx-8 mt-1">
              Data diperbarui setiap saat dan tervalidasi.
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl cursor-grabbing flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-40 mx-auto mt-[-3rem]" src={bintang} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Verifikasi</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-t mx-8 mt-1">
              Sistem dibuat menggunakan sensor yang sudah tersertifikasi.
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl cursor-grabbing flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-40 mx-auto mt-[-3rem]" src={alarm} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">
            Early Warning System
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-t mx-8 mt-1">
              Peringatan dini melalui email ketika terjadi bencana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
