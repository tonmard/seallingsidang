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
    <div className="flex font-md justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white hover-lg">
      <a className="block w-[10rem] xl:mr-8" href="#hero">
        <img src={logof} width={160} height={30} alt="sea" />
      </a>
      <ul className="hidden md:flex text-white">
        <li className="p-4 hover:text-slate-100">
          <a href="#berita">Berita</a>
        </li>
        <li className="p-4 hover:text-slate-100">
          <a href="#earlywarning">Early Warning</a>
        </li>
        <li className="p-4 hover:text-slate-100">
          <a href="#fitur">Fitur</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-white bg-slate-900 text-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <a className="block pt-4 w-[10rem] xl:mr-8 mb-10" href="#hero">
          <img
            onClick={handleNav}
            src={logof}
            width={160}
            height={30}
            alt="sea"
          />
        </a>
        <li className="p-4 border-b border-t border-white hover:text-slate-100">
          <a href="#berita" onClick={handleNav}>
            Berita
          </a>
        </li>
        <li className="p-4 border-b border-white hover:text-slate-100">
          <a href="#earlywarning" onClick={handleNav}>
            Early Warning
          </a>
        </li>
        <li className="p-4 border-b border-white hover:text-slate-100">
          <a href="#fitur" onClick={handleNav}>
            Fitur
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
