import Image from "next/image";
import React from "react";
import socialSurger from "../../public/SocialSurgerBlack.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="py-9 relative self-center w-full z-50">
      <div className="max-w-md h-full mx-auto px-6 font-bold">
        <div className="sticky shadow-[7px_7px_0_0_#222] flex p-[10px_14px] justify-evenly items-center bg-white rounded-2xl border-2 border-[#222]">
          <Link href="#hero" scroll={false}>
            <Image
              className="w-32 sm:w-44 h-auto"
              src={socialSurger}
              alt="Social Surger logo"
            />
          </Link>
          <div className="flex items-center gap-x-3">
            <nav className="relative float-right">
            <ul className="hidden mb-0 pl-0 text-xl justify-end items-center">
              
              {/* <ul className="hidden lg:flex  mb-0 pl-0 text-xl justify-end items-center"> */}
                <li className="px-3 leading-5">
                  <Link
                    className="font-bold transition ease-in  hover:text-surger_purple cursor-pointer duration-300 scroll-smooth"
                    scroll={false}
                    href="#services"
                  >
                    What we do
                  </Link>
                </li>
                <li className="px-3 leading-5">
                  <Link
                    className="font-bold transition ease-in hover:text-surger_purple cursor-pointer duration-300 scroll-smooth"
                    scroll={false}
                    href=""
                  >
                    Why us
                  </Link>
                </li>
                <li className="px-3 leading-5">
                  <Link
                    className="font-bold transition ease-in hover:text-surger_purple cursor-pointer duration-300 scroll-smooth"
                    scroll={false}
                    href=""
                  >
                    Our work
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="justify-end flex ">
            <Link
              href="#contactUs"
              scroll={false}
              className="bg-surger_purple  scroll-smooth p-4 rounded-2xl transition text-center border-none text-white ease-in-out duration-300 hover:-translate-y-1 font-bold hover:bg-[#f2a11f]"
            >
              <svg
                fill="#000000"
                height="25px"
                width="25px"
                className="fill-white"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 75.294 75.294"
              >
                <g>
                  <path
                    d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
