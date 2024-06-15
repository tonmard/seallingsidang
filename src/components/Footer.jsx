import React from "react";
import {
  FaGoogle,
  FaInstagram,
  FaMapPin,
  FaTwitterSquare,
} from "react-icons/fa";
import { logof } from "../constants";

const Footer = () => {
  return (
    <div className="block top-0 left-0 w-full bg-slate-900">
      <div className="max-w-[1240px]  mx-auto py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <a className="block w-[10rem] xl:mr-8" href="/">
            <img src={logof} width={240} height={60} alt="sea" />
          </a>
          <p className="py-4">Copyright © Sealling 2024.</p>
        </div>
        <div className="lg:col-span-2 flex justify-between ">
          <div>
            <h6 className="font-medium text-gray-400">Navigator</h6>
            <ul>
              <li className="py-2 text-sm hover:text-white">
                <a href="/penelitian">Penelitian</a>
              </li>
              <li className="py-2 text-sm hover:text-white">
                <a href="/peralatan">Peralatan</a>
              </li>
              <li className="py-2 text-sm hover:text-white">
                <a href="/edukasi">Edukasi</a>
              </li>
              <li className="py-2 text-sm hover:text-white">
                <a href="/tentang-kami">Tentang Kami</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium px-5 text-gray-400">Contact Us</h6>
            <div className="flex justify-between md:w-[100%] my-6 ">
              <FaGoogle size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
            </div>
          </div>
          <div>
            <h6 className="font-medium  text-gray-400">Find Us</h6>
            <div className="flex right-1  my-6">
              <a href="https://maps.app.goo.gl/mMPTE2TiEzgByeif6">
                <FaMapPin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
