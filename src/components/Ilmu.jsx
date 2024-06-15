import React from "react";
import { waves } from "../constants";

const Ilmu = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 max-w-[1240px] w-full h-full mx-auto text-center gap-4 py-10 flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 ">
          <div className="md:col-span-2 p-8">
            <div className="justify-center py-8  text-left text-3xl md:text-7xl text-slate-900 font-extrabold">
              Ingin tahu lebih banyak tentang{" "}
              <p className=" text-left text-3xl md:text-7xl text-blue-900 font-extrabold">
                Pemantauan Air Laut?
              </p>
            </div>
          </div>
          <div className="py-8">
            <div className="py-4 px-2 rounded-lg shadow-lg w-auto h-auto bg-slate-900 text-white mb-2">
              <div className="text-white underline font-serif text-lg font-lg justify-center">
                Apa itu banjir rob?
              </div>
              <p className="text-gray-200 px-4 font-thin text-base my-2">
                Fenomena banjir di daerah pesisir akibat kenaikan permukaan air
                laut saat pasang, sering diperparah oleh angin kencang dan
                gelombang tinggi.
              </p>
            </div>
            <div className="py-4 px-2 rounded-lg shadow-lg w-auto h-auto bg-slate-900 text-white">
              <div className="text-white underline font-serif text-lg font-lg justify-center">
                Bagaimana proses terjadinya banjir rob?
              </div>
              <p className="text-gray-200 font-thin text-base my-2">
                Pasang surut air laut yang dipengaruhi oleh tarikan gravitasi
                bulan dan matahari, terutama saat pasang purnama, menyebabkan
                kenaikan permukaan air laut dan Kenaikan permukaan laut secara
                umum akibat pemanasan global memperburuk kondisi ini serta
                Kondisi cuaca ekstrem seperti angin kencang dan gelombang tinggi
                mendorong air laut lebih jauh ke daratan.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white border border-gray-200 rounded-2xl shadow-lg grid md:grid-cols-3 m-4">
          <div className="col-span-2 p-8 text-left">
            <div className="py-4 px-2 w-auto h-auto bg-slate-900 text-white mb-2">
              <div className="text-white underline font-semibold text-2xl justify-center">
                Dampak banjir rob?
              </div>
              <div className="text-gray-200 text-left font-thin text-base my-2">
                Banjir rob dapat menyebabkan berbagai dampak negatif. Kerusakan
                infrastruktur seperti bangunan, jalan, dan fasilitas umum sering
                terjadi. Kerugian ekonomi juga dapat signifikan, mengganggu
                kegiatan perdagangan, perikanan, dan pariwisata. Dampak
                lingkungan termasuk erosi pantai dan kerusakan habitat pesisir.
                Selain itu, kesehatan masyarakat bisa terganggu akibat penyakit
                yang dibawa oleh air banjir dan masalah sanitasi.
              </div>
            </div>
          </div>
          <div className=" hidden md:block bg-white rounded-r-2xl h-full lg:max-h-[300px]">
            <img
              src={waves}
              className="w-full h-full object-cover rounded-r-2xl "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ilmu;
