"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "../../public/heroPage.svg";

function Hero() {
  return (
    <section
      id="Hero"
      className="flex container justify-center h-screen items-center mx-auto "
    >
      <div className="flex flex-col  justify-center">
        <div>
          <div className="text-6xl leading-normal mb-4 font-bold p-4 mx-auto">
            Revolutionize your{" "}
            <span className="bg-surger_purple capitalize hover:bg-[#fffcf4] hover:text-surger_purple transition duration-300 ease-in-out text-white px-1 ">
              digital presence
            </span>{" "}
            <span className="ml-11">
              Be the talk of the{" "}
              <span className="bg-[#F2A11F] capitalize hover:bg-[#fffcf4] hover:text-[#F2A11F] transition duration-300 ease-in-out text-white px-1 ">
                virtual town
              </span>
            </span>
          </div>
          <p className="mt-2 text-lg p-4">
            Social Surger specializes in delivering exceptional Social media
            management and cutting-edge website development services that will
            elevate your online presence and deliver remarkable results.
          </p>
        </div>

        <div className="mr-6 justify-start flex p-4">
          <Link
            href="#contactUs"
            scroll={false}
            className="bg-surger_purple text-2xl scroll-smooth rounded-2xl cursor-pointer transition text-center border-none px-7 py-4 text-white ease-in-out duration-300 hover:-translate-y-1 font-bold hover:bg-[#f2a11f]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="justify-end">
        <div className="rounded-[32px] shadow-[13px_13px_0_0_#222] border-4 w-[450px] p-6 border-[#222]">
          <Image src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
