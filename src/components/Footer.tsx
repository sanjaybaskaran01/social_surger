import React from "react";
import SocialSurgerLogo from "../../public/SocialSurgerLogo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section className="h-full bottom-0 bg-[#222] mt-6 sm:mt-0 px-6 mx-auto text-white">
      <div className="p-16 text-right">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between text-left items-center gap-4  ">
          <Link href={"/"}>
            <Image src={SocialSurgerLogo} alt="Social Surger Logo" />
          </Link>
          <p className="font-medium text-base sm:text-lg">
            Social Surger |{" "}
            <Link href={"mailto:contact@socialsurger.com"} target="_blank" className="hover:underline transition hover:text-surger_purple ease-in-out duration-300">
              contact@socialsurger.com
            </Link>{" "}
            | Chennai, IN
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
