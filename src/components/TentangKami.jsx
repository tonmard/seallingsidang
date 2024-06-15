import React from "react";
import { tujuan } from "../constants";

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
          <div className="max-w-[800px] text-left">
            <h1 className="text-3xl font-bold text-white">Visi & Misi</h1>
            <p className="text-base text-gray-200 mt-2">
              Menjadi yang terbaik dalam solusi monitoring air laut yang
              inovatif dan berkelanjutan, serta berkontribusi dalam mitigasi
              perubahan iklim dan perlindungan lingkungan laut.
            </p>

            <button
              type="button"
              className="py-3 px-4 text-sm font-semibold rounded-lg shadow-lg bg-white text-slate-900 hover:bg-slate-100 mt-8"
            >
              Lihat Selengkapnya
            </button>
          </div>

          <div className="hidden md:flex ml-8 ">
            <img src={tujuan} alt="Tujuan" className="max-h-[200px]" />
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
                    src="https://readymadeui.com/team-1.webp"
                    class="w-full rounded-lg inline-block"
                    alt=""
                  />
                </div>

                <div class="mt-6">
                  <h4 class="text-gray-800 text-lg font-bold">
                    M. Fadhilla Azzam
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">Software Engineer</p>

                  <div class="space-x-4 mt-6">
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
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
                    src="https://readymadeui.com/team-2.webp"
                    class="w-full rounded-lg inline-block"
                    alt=""
                  />
                </div>

                <div class="mt-6">
                  <h4 class="text-gray-800 text-lg font-bold">
                    Tony Mardyansyah
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">Full-stack Website</p>

                  <div class="space-x-4 mt-6">
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
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
                    src="https://readymadeui.com/team-3.webp"
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
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
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
                    <img
                      src="https://readymadeui.com/team-2.webp"
                      class="h-full w-full rounded-lg "
                      alt=""
                    />
                  </div>

                  <div class="mt-6">
                    <h4 class="text-gray-800 text-lg font-bold">
                      Sulthan Kareem A.
                    </h4>
                    <p class="text-sm text-gray-600 mt-1">Back-End Website</p>

                    <div class="space-x-4 mt-6">
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#333"
                          viewBox="0 0 155.139 155.139"
                        >
                          <path
                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                            data-original="#010002"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#333"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                            data-original="#03a9f4"
                          />
                        </svg>
                      </button>
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
                    <img
                      src="https://readymadeui.com/team-3.webp"
                      class="h-full w-full rounded-lg"
                      alt=""
                    />
                  </div>

                  <div class="mt-6">
                    <h4 class="text-gray-800 text-lg font-bold">
                      Abrari Fanza
                    </h4>
                    <p class="text-sm text-gray-600 mt-1">Data Analyst</p>

                    <div class="space-x-4 mt-6">
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#333"
                          viewBox="0 0 155.139 155.139"
                        >
                          <path
                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                            data-original="#010002"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#333"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                            data-original="#03a9f4"
                          />
                        </svg>
                      </button>
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
