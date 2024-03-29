import React, { FC } from "react";

interface CardProps {
  header: string;
  content: string;
  className?: string;
}

const Card: FC<CardProps> = ({ header, content, className }) => {
  return (
    <div
      className={`justify-center py-10 cursor-pointer flex flex-col transition lg:w-3/4  ease-in-out duration-300 bg-white rounded-3xl border-4 border-[#222] hover:shadow-[10px_10px_0_0_#0b0b0b] ${
        className ? className : ""
      }`}
    >
      <div className="p-[32px_24px_40px] sm:p-[35px_40px_40px] ">
        <p className="text-2xl sm:text-3xl font-bold mb-2">{header}</p>
        <p className="text-lg  tracking-wide text-gray-500">{content}</p>
      </div>
    </div>
  );
};

export default Card;
