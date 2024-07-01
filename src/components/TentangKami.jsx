import React from "react";
import { pptony, tujuan, waves } from "../constants";

const TentangKami = () => {
  return (
    <div className="font-[sans-serif] bg-white pt-8 pb-8 ">
      <div className="max-w-[1240px] w-full h-full mx-auto text-center flex flex-col  ">
        <div className="px-8 py-12 m-4 text-center bg-slate-900 text-white justify-center rounded-lg shadow-xl">
          <div className="max-w-4xl mx-auto ">
            <h2 className="text-2xl md:text-4xl font-extrabold underline mb-6">
              Sea Level Monitoring - Sealling
            </h2>
            <p className="text-base mb-4">
              Sealling ditempatkan di berbagai lokasi strategis di daerah
              pesisir. Sensor ini terus-menerus memantau ketinggian air laut dan
              parameter lainnya. Data yang terkumpul dikirim ke website sealling
              di mana algoritma analitik canggih menganalisis informasi
              tersebut. Berdasarkan analisis data real-time, Sealling dapat
              memberikan peringatan dini melalui email. Peringatan ini
              memungkinkan masyarakat dan pihak berwenang untuk mengambil
              tindakan cepat dalam menghadapi ancaman banjir rob, meminimalkan
              kerusakan, dan menyelamatkan nyawa.
            </p>
          </div>
        </div>
        <div className="flex m-4 p-8 bg-slate-900 justify-between rounded-lg shadow-lg font-sans items-center">
          <div className="max-w-[900px] text-left">
            <h1 className="text-3xl font-bold text-white">Tujuan</h1>
            <p className="text-base text-gray-200 mt-2">
              Menjadi yang terbaik dalam solusi monitoring air laut yang
              inovatif dan berkelanjutan, serta berkontribusi dalam mitigasi
              perubahan iklim dan perlindungan lingkungan laut.
            </p>
          </div>

          <div className="hidden md:flex ">
            <img src={tujuan} alt="Tujuan" className="max-h-[150px] " />
          </div>
        </div>
        <div class="container mx-auto py-10">
          <div class="text-center mb-12">
            <h1 class="text-3xl md:text-5xl text-slate-900 font-extrabold mb-4">
              Mengapa Monitoring Level Air Laut Penting?
            </h1>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 m-4">
            <div class="bg-slate-900 text-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl md:text-2xl font-bold mb-4 underline ">
                Permasalahan
              </h3>
              <p>
                Permukaan air laut yang terus naik karena pencairan es di kutub
                dan ekspansi termal air laut telah menjadi ancaman serius bagi
                daerah pesisir. Dampaknya sangat signifikan, termasuk kerusakan
                infrastruktur, kehilangan tempat tinggal, dan gangguan pada
                kehidupan sehari-hari masyarakat pesisir.
              </p>
            </div>
            <div class="bg-slate-900 text-white p-6 rounded-lg shadow-lg ">
              <h3 class="text-xl md:text-2xl font-bold mb-4 underline">
                Solusi
              </h3>
              <p>
                Untuk mengatasi masalah banjir rob, dibutuhkan solusi inovatif
                menggunakan teknologi IoT (Internet of Things). Sealling
                memasang sensor canggih di daerah pesisir yang dapat memantau
                ketinggian air laut secara real-time. Data dari sensor ini
                dikumpulkan dan dianalisis untuk memberikan peringatan dini
                kepada masyarakat dan pihak berwenang.
              </p>
            </div>
          </div>
        </div>
        <div class="font-[sans-serif]">
          <div class="h-60 w-full bg-slate-900 rounded-lg shadow-lg"></div>

          <div class="max-w-5xl max-md:max-w-xl max-sm:max-w-sm mx-auto -mt-48 mb-10 px-6">
            <h2 class="text-4xl max-md:text-3xl text-center font-extrabold text-white mb-12">
              Tim Pengembang
            </h2>

            <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:justify-center text-center">
              <div class="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500">
                <div class="lg:min-h-[250px]">
                  <img
                    src={waves}
                    class="w-full rounded-lg inline-block"
                    alt=""
                  />
                </div>

                <div class="mt-6">
                  <h4 class="text-gray-800 text-lg font-bold">
                    Moch. Fadhilla Azzam
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">Software Engineer</p>

                  <div class="space-x-4 mt-6">
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500">
                <div class="lg:min-h-[250px]">
                  <img
                    src={pptony}
                    class="w-full rounded-lg inline-block"
                    alt=""
                  />
                </div>

                <div class="mt-6">
                  <h4 class="text-gray-800 text-lg font-bold">
                    Tony Mardyansyah
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">Front-End Developer</p>

                  <div class="space-x-4 mt-6">
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500">
                <div class="lg:min-h-[250px]">
                  <img
                    src={waves}
                    class="w-full rounded-lg inline-block"
                    alt=""
                  />
                </div>

                <div class="mt-6">
                  <h4 class="text-gray-800 text-lg font-bold">
                    Najwa Al Fatan
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">Hardware Engineer</p>

                  <div class="space-x-4 mt-6">
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10">
              <div class="justify-center md:flex text-center">
                <div class=" bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500 mb-6">
                  <div class="h-auto w-auto md:max-h-[250px] md:max-w-[250px] rounded-lg">
                    <img src={waves} class="h-full w-full rounded-lg " alt="" />
                  </div>

                  <div class="mt-6">
                    <h4 class="text-gray-800 text-lg font-bold">
                      Sulthan Kareem A.
                    </h4>
                    <p class="text-sm text-gray-600 mt-1">Back-End Developer</p>

                    <div class="space-x-4 mt-6">
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          fill="#333"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                            data-original="#0077b5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class=" bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all md:ml-20 duration-500 mb-6">
                  <div class="h-auto w-auto md:max-h-[250px] md:max-w-[250px]">
                    <img src={waves} class="h-full w-full rounded-lg" alt="" />
                  </div>

                  <div class="mt-6">
                    <h4 class="text-gray-800 text-lg font-bold">
                      Abrari Fanza
                    </h4>
                    <p class="text-sm text-gray-600 mt-1">Data Analyst</p>

                    <div class="space-x-4 mt-6">
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          fill="#333"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                            data-original="#0077b5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
