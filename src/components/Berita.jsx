import React from "react";
import { waves } from "../constants";

const Berita = () => {
  return (
    <div className="w-full bg-white p-8 ">
      <div class="max-w-md mx-auto lg:max-w-[1240px] bg-slate-900 rounded-xl shadow-xl overflow-hidden ">
        <div class="md:flex ">
          <div class=" md:justify-center">
            <img
              class="h-48 w-full object-cover md:h-[300px] md:w-[1000px]"
              src={waves}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div className="justify-between py-2 text-left md:text-right">
              <h3 class="text-2xl md:text-4xl font-extrabold underline mb-6 text-white font-serif ">
                Apa itu pemantauan air laut?
              </h3>
              <p class="mt-2 text-gray-200 text-base">
                Proses pengamatan dan pengukuran parameter-parameter air laut
                yang penting untuk memahami kondisi dan perubahan yang terjadi
                di lautan. Informasi ini sangat berguna untuk berbagai tujuan
                seperti prediksi cuaca, manajemen sumber daya kelautan, dan
                mitigasi bencana.
              </p>
              <a href="#/edukasi">
                <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10  duration-300 bg-white hover:bg-slate-950 w-44 h-10 mt-10 rounded-lg font-medium  mx-auto  text-slate-900">
                  Lihat Selengkapnya
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
