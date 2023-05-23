import Card from "@/components/Card";
import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="h-screen container mx-auto flex flex-col justify-center"
    >
      <div className="p-6 mb-4 font-bold text-center text-7xl">
        <p className="mb-7">
          You have a <span className="bg-surger_purple hover:bg-[#fffcf4] hover:text-surger_purple text-white">Problem</span>.
        </p>
        <p>
          We create the{" "}
          <span className="bg-[#F2A11E] hover:bg-[#fffcf4] hover:text-[#F2A11E] text-white">Solution</span>.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          header="Website Design"
          content="Improve your user acquisition rate with easy to use, state of the art websites built specifically to achieve your goals."
        />
        <Card
          header="Done-For-You Content Creation"
          content="Turn your audience into fans with organic, engaging content that reaches every corner of the internet."
        />
        <Card
          header="Done-For-You Content Creation"
          content="Turn your audience into fans with organic, engaging content that reaches every corner of the internet."
        />
      </div>
    </section>
  );
}

export default Services;
