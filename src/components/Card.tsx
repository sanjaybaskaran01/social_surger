import React, { FC } from "react";

interface CardProps {
  header: string;
  content: string;
  className?: string;
}

const Card: FC<CardProps> = ({ header, content, className }) => {
  return (
    <div
      className={`justify-center cursor-pointer flex transition ease-in-out duration-300 bg-white rounded-3xl border-4 border-[#222] hover:shadow-[10px_10px_0_0_#0b0b0b] ${
        className ? className : ""
      }`}
    >
      <div className="p-[35px_40px_40px] ">
        <p className="text-3xl font-bold">{header}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
