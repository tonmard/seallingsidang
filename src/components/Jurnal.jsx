import React from "react";
import { buku, waves } from "../constants";

const Jurnal = () => {
  return (
    <div className="bg-white animated">
      <div className="max-w-[1000px] md:max-w-[1240px] h-full mx-auto text-center flex flex-col">
        <div className="md:grid-cols-3 mt-10 py-8 px-10 m-4 text-center gap-8 bg-slate-900 text-white  h-auto rounded-lg shadow-lg grid grid-cols-1">
          <div className="py-2">
            <img src={buku} alt="buku" height="100%" width="100%" />
          </div>
          <div className=" md:col-span-2 py-14 md:text-right text-2xl  text-white font-extrabold">
            PENELITIAN
            <p className=" md:text-right text-4xl lg:text-6xl text-white my-2 font-extrabold">
              Ayo cari tahu bersama Sealling.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white font-[sans-serif] p-10 mb-14">
        <div class="max-w-6xl max-md:max-w-lg mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <a href="https://openlibrarypublications.telkomuniversity.ac.id/index.php/engineering/article/view/12302/12081">
              <div class="flex max-lg:flex-col bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src={waves}
                  alt="Blog Post 1"
                  class="lg:w-2/5 min-h-[250px] h-full hidden lg:flex object-cover"
                />
                <div class="p-6 lg:w-3/5">
                  <h3 class="text-base font-bold text-[#333]">
                    Sistem Monitoring Ketinggian Permukaan Air Laut Menggunakan
                    Accelerometer Berbasis Iot
                  </h3>
                  <span class="text-xs block text-gray-400 mt-2">
                    AUG 2020 | BY TELKOM UNIVERSITY
                  </span>
                  <p class="text-sm mt-2">
                    Sistem monitoring yang dilakukan adalah dengan menggunakan
                    sensor accelerometer sebagai pendeteksi posisi.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://e-journals.dinamika.ac.id/joti/article/view/573/408">
              <div class="flex max-lg:flex-col bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src={waves}
                  alt="Blog Post 2"
                  class="lg:w-2/5 min-h-[250px] h-full hidden lg:flex object-cover"
                />
                <div class="p-6 lg:w-3/5">
                  <h3 class="text-base font-bold text-[#333]">
                    Pengembangan Sistem Monitoring Pasang Surut Air Laut Untuk
                    Perancangan Pengembangan Sebuah Pelabuhan
                  </h3>
                  <span class="text-xs block text-gray-400 mt-2">
                    APR 2024 | BY UNIVERSITAS TIDAR
                  </span>
                  <p class="text-sm mt-2">
                    Penelitian ini adalah sistem monitoring pasang surut air
                    laut di pelabuhan menggunakan mikrokontroller ESP32 Cam.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://jurnal.unived.ac.id/index.php/jmi/article/view/4422/3675">
              <div class="flex max-lg:flex-col  bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src={waves}
                  alt="Blog Post 2"
                  class="lg:w-2/5 min-h-[250px] h-full hidden lg:flex object-cover"
                />
                <div class="p-6 lg:w-3/5">
                  <h3 class="text-base font-bold text-[#333]">
                    Sistem Monitoring Ketinggian Ombak Air Laut Secara Real-Time
                    Berbasis IoT
                  </h3>
                  <span class="text-xs block text-gray-400 mt-2">
                    OCT 2023 | BY UNIVERSITAS DEHASEN
                  </span>
                  <p class="text-sm mt-2">
                    Maka pada penelitian ini peneliti akan menggunakan sistem
                    IoTdalam monitoring ketinggian ombak air laut secara
                    real-time berbasis IoT.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://jurnal.unimor.ac.id/index.php/JITU/article/view/3254/1065">
              <div class="flex max-lg:flex-col bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src={waves}
                  alt="Blog Post 2"
                  class="lg:w-2/5 min-h-[250px] h-full hidden lg:flex object-cover"
                />
                <div class="p-6 lg:w-3/5">
                  <h3 class="text-base font-bold text-[#333]">
                    Sistem Monitoring Pasang Surut Air Laut Berbasis Web
                    Menggunakan Fuzzy Logic Pada Kuala Langsa
                  </h3>
                  <span class="text-xs block text-gray-400 mt-2">
                    SEP 2022 | BY UNIVERSITAS SAMUDRA
                  </span>
                  <p class="text-sm mt-2">
                    Menggunakan Sensor Ultrasonik dan nodeMCU pada Kuala Langsa
                    dan hasil monitoring akan ditampilkan pada sebuah halaman
                    Web.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurnal;
