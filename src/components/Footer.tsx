import React from "react";
import SocialSurgerLogo from "../../public/SocialSurgerLogo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#222] px-6 mx-auto text-white">
      <div className="p-16 text-right">
        <div className="grid items-center grid-cols-[0.3fr_1fr] ">
          <Image src={SocialSurgerLogo} alt="Social Surger Logo" />
          <p className="font-medium">
            Social Surgers | hello@socialsurgers.com | Chennai, IN
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
