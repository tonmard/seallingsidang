import React from "react";
import { waves } from "../constants";

const Pengaturan = () => {
  return (
    <div className="w-full py-10 bg-white px-6">
      <div className="max-w-md md:w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden animated">
        <div className="md:justify-center">
          <div className="md:justify-center">
            <img
              className="h-48 w-full object-cover"
              src={waves}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-6">
            <h1 className="block mt-1 font-serif text-2xl md:text-3xl my-6 font-medium text-center text-slate-900">
              Pengaturan Threshold!
            </h1>

            <form>
              <label className="block">
                <span className="block text-sm font-normal pl-4 p-1 text-slate-900">
                  Nilai:
                </span>
                <div className="relative flex items-center">
                  <input
                    name="threshold"
                    type="text"
                    required
                    className="w-full text-sm text-black border border-black rounded-full p-2 pl-4 outline-none "
                    placeholder="Masukan nilai threshold"
                  />
                </div>
                <p className="text-slate-600 text-xs pl-4 p-1">
                  *Pastikan nilai threshold yang dimasukan benar!
                </p>
              </label>
            </form>
            <a href="/">
              <button className="w-full  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white bg-slate-900 text-white h-10 mt-5 rounded-full font-medium mx-auto">
                Kirim
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
