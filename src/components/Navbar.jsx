import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { logof } from "../constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    if (nav) {
      setNav(false);
      enablePageScroll();
    } else {
      setNav(true);
      disablePageScroll();
    }
  };

  return (
    <div className="block top-0 left-0 w-full bg-slate-900">
      <div className="flex font-md justify-between items-center h-24 max-w-[1240px] mx-auto px-4 py-4 text-white hover-lg">
        <a className="block w-[10rem] xl:mr-8" href="/">
          <img src={logof} width={160} height={30} alt="sea" />
        </a>
        <ul className="hidden md:flex text-white">
          <li className="p-4 hover:text-slate-100">
            <a href="/penelitian">Penelitian</a>
          </li>
          <li className="p-4 hover:text-slate-100">
            <a href="/edukasi">Peralatan</a>
          </li>
          <li className="p-4 hover:text-slate-100">
            <a href="/edukasi">Edukasi</a>
          </li>
          <li className="p-4 hover:text-slate-100">
            <a href="/tentang-kami">Tentang Kami</a>
          </li>
        </ul>
        <a href="/peringatan-dini">
          <button className="hidden md:flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 bg-white h-auto text-center hover:bg-slate-100 md:w-[180px] rounded-full font-medium text-sm my-6 mx-auto px-4 py-2 text-slate-900">
            Daftar Peringatan Dini
          </button>
        </a>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r z-50 border-white bg-slate-900 text-white ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%] "
          }
        >
          <a className="block pt-4 w-[10rem] xl:mr-8 mb-10" href="/">
            <img
              onClick={handleNav}
              src={logof}
              width={160}
              height={30}
              alt="Logo Sealling"
            />
          </a>
          <li className="p-4 border-b border-t border-white hover:text-slate-100">
            <a href="/penelitian" onClick={handleNav}>
              Penelitian
            </a>
          </li>
          <li className="p-4 border-b border-white hover:text-slate-100">
            <a href="/peralatan" onClick={handleNav}>
              Peralatan
            </a>
          </li>
          <li className="p-4 border-b border-white hover:text-slate-100">
            <a href="/edukasi" onClick={handleNav}>
              Edukasi
            </a>
          </li>
          <li className="p-4 border-b border-white hover:text-slate-100">
            <a href="/tentang-kami" onClick={handleNav}>
              Tentang Kami
            </a>
          </li>
          <li className="p-4 font-lg  hover:text-slate-100">
            <a href="/peringatan-dini" onClick={handleNav}>
              Daftar Peringatan Dini
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
