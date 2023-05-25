import Card from "@/components/Card";
import React from "react";

function Services() {
  return (
    <section
      id="services"
      className=" container mx-auto flex flex-col justify-center"
    >
      <div className="p-6 mb-4 !leading-normal font-bold text-center whitespace-nowrap sm:text-center text-3xl sm:text-5xl lg:text-7xl">
          You have a <span className="bg-surger_purple hover:bg-[#fffcf4] transition ease-in-out duration-300 hover:text-surger_purple text-white">problem</span>.
        <p>
          We create the{" "}
          <span className="bg-[#F2A11E] hover:bg-[#fffcf4] hover:text-[#F2A11E] text-white transition ease-in-out duration-300">solution</span>.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-20 h-1/2 gap-4 lg:gap-0  p-4 lg:p-0  justify-items-center">
        <Card
          header="Website Development"
          content="Boost your user acquisition rate with our easy-to-use, state-of-the-art websites. Built specifically to achieve your goals"
        />
        <Card
          header="Social Media Management"
          content="Handle every aspect of your social media strategy, ensuring your brand shines brightly and captivates your target audience"
        />
      </div>
    </section>
  );
}

export default Services;
