"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "../../public/heroPage.svg";

function Hero() {
  return (
    <section
    id="Hero"
    className="container flex justify-center items-center mx-auto"
  >
    <div className="flex flex-col w-1/2 justify-center">
      <div>
        <div className="text-7xl leading-normal mb-4 font-bold p-4 mx-auto">
          Expert{" "}
          <span className="bg-surger_purple hover:bg-[#fffcf4] hover:text-surger_purple transition duration-300 ease-in-out text-white px-1 ">
            Web Development
          </span>{" "}
          for Next-Gen{" "}
          <span className="bg-[#1E73A8] hover:bg-[#fffcf4] hover:text-[#1E73A8] transition duration-300 ease-in-out text-white px-1 ">
            Startups{" "}
          </span>
        </div>
        <p className="mt-2 p-4">
          We help companies create web experiences that convert visitors
          into customers and lifelong fans.
        </p>
      </div>

      <div className="mr-6 justify-start flex p-4">
        <Link
          href="#contactUs"
          scroll={false}
          className="bg-surger_purple scroll-smooth rounded-2xl transition text-center border-none px-7 py-4 text-white ease-in-out duration-300 hover:-translate-y-1 font-bold hover:bg-[#f2a11f]"
        >
          Book a call
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
