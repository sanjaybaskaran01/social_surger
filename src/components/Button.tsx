import React, { FC } from "react";

interface CardProps {
  header: string;
  content: string;
  className?: string;
}

const Button: FC<CardProps> = ({ header, content, className }) => {
  return (
    <div
      className={`justify-center cursor-pointer flex hover:transform-[translate3d(0px, -10px, 0.01px)] flex-col transition max-w-full ease-in-out duration-300 bg-white rounded-3xl border-4 border-[#222] hover:shadow-[10px_10px_0_0_#0b0b0b] ${
        className ? className : ""
      }`}
    >
      <div className="p-[35px_40px_40px] ">
        <p className="text-3xl font-bold">{header}</p>
        <p className="text-lg text-gray-500">{content}</p>
      </div>
    </div>
  );
};

export default Button;
