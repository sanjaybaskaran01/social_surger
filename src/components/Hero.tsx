"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "../../public/heroPage.svg";

function Hero() {
  return (
    <section
      id="Hero"
      className="flex flex-col lg:flex-row container lg:px-0 md:px-10 justify-center lg:mt-24  items-center mx-auto"
    >
      <div className="flex flex-col justify-center">
        <div className=" lg:w-4/5 text-center lg:text-left">
          <div className="text-4xl sm:text-7xl !leading-normal font-bold p-4">
              Struggling to stand out in the {/* Be the talk of the{" "} */}
            <span className="bg-surger_purple whitespace-nowrap  capitalize  hover:bg-[#fffcf4] hover:text-surger_purple transition duration-300 ease-in-out text-white px-1 ">
              digital world?
            </span>
          </div>
          <p className="mt-2 font-medium text-[#393939] text-xl sm:text-lg  md:text-3xl p-4">
            We help businesses elevate their online presence through Social
            media management and Website Development
          </p>
        </div>

        <div className="lg:mr-6 justify-center lg:justify-start flex p-4">
          <Link
            href="#contactUs"
            scroll={false}
            className="bg-surger_purple text-xl sm:text-2xl scroll-smooth rounded-2xl cursor-pointer transition text-center border-none px-7 py-5 text-white ease-in-out duration-300 hover:-translate-y-1 font-bold w-full sm:w-auto hover:bg-[#f2a11f]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="justify-end hidden sm:block">
        <div className="rounded-[32px] shadow-[13px_13px_0_0_#222] border-4 w-[450px] p-6 border-[#222]">
          <Image src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
