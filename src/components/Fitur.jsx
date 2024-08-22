import React from "react";
import { alarm, bintang, jam, waves } from "../constants";

const Fitur = () => {
  return (
    <div className="pt-10 px-4 bg-white">
      <div className="max-w-[1240px] w-full h-full mx-auto text-center flex flex-col">
        <div className=" mx-auto text-cente underline decoration-slate-900 text-slate-900 mb-20">
          <h1 className="text-2xl md:text-4xl object-top font-bold my-6">
            Apa yang kami tawarkan?
          </h1>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12 md:px-16 px-4">
          <div className="w-full shadow-xl cursor-grabbing flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-40 mx-auto mt-[-3rem]" src={jam} alt="Jam" />
            <h2 className="text-2xl font-bold text-center py-8 ">Real Time</h2>
            <div className="text-center font-medium">
              <p className="py-2 border-t mx-8 mt-1">
                Data diperbarui setiap 15 menit dan tervalidasi.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl cursor-grabbing flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-40 mx-auto mt-[-3rem]"
              src={bintang}
              alt="Medali"
            />
            <h2 className="text-2xl font-bold text-center py-8">Verifikasi</h2>
            <div className="text-center font-medium">
              <p className="py-2 border-t mx-8 mt-1">
                Sistem dibuat menggunakan sensor yang sudah tersertifikasi.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl cursor-grabbing flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-40 mx-auto mt-[-3rem]"
              src={alarm}
              alt="Warning"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Early Warning System
            </h2>
            <div className="text-center font-medium">
              <p className="py-2 border-t mx-8 mt-1">
                Peringatan dini melalui telegram ketika terjadi bencana.
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-full my-12 lg:max-w-[1240px] bg-slate-900 rounded-xl shadow-xl overflow-hidden ">
          <div class="md:flex ">
            <div class=" md:flex">
              <img
                class="h-48 w-full object-cover md:h-[300px] md:w-[1000px]"
                src={waves}
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8 lg:p-10">
              <div className="justify-between text-left lg:text-right">
                <h3 class="text-2xl lg:text-4xl font-extrabold underline mb-2 text-white font-serif ">
                  Apa itu pemantauan air laut?
                </h3>
                <p class="mt-2 text-gray-200 text-base">
                  Proses pengamatan dan pengukuran parameter-parameter air laut
                  yang penting untuk memahami kondisi dan perubahan yang terjadi
                  di lautan. Informasi ini sangat berguna untuk berbagai tujuan
                  seperti prediksi cuaca, manajemen sumber daya kelautan, dan
                  mitigasi bencana.
                </p>
                <a href="/edukasi">
                  <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10  duration-300 bg-white hover:bg-slate-950 w-44 h-10 mt-5 rounded-lg font-medium  mx-auto  text-slate-900">
                    Lihat Selengkapnya
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
