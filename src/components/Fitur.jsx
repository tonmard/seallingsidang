import React from "react";
import { alarm, bintang, jam } from "../constants";

const Fitur = () => {
  return (
    <div className="pt-10 px-4 bg-white">
      <div className="max-w-[1240px] w-full h-full mx-auto text-center flex flex-col">
        <div className=" mx-auto text-cente underline decoration-slate-900 text-slate-900 mb-20">
          <h1 className="text-2xl md:text-4xl object-top font-bold my-6">
            Apa yang kami tawarkan?
          </h1>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12 px-16">
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
    </div>
  );
};

export default Fitur;
