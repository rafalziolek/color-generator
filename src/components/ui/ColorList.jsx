"use client";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { customAssignmentColors } from "@/utils/LeonardoColors";

import ColorContext from "@/context/ColorContext";
export default function ColorList({ children, title, className }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h3 className="text-md font-bold">{title}</h3>
      <ul className="grid grid-cols-auto-fill-2 gap-2">{children}</ul>
    </div>
  );
}

export function ColorItem({ color, custom }) {
  const { activeColor, setActiveColor, setCustomColors } =
    React.useContext(ColorContext);
  const backgroundColor =
    custom === true ? color.backgroundColor : color.values[5].value;

  return (
    <div className="group relative">
      <button
        className={`  w-8 h-8 rounded-md `}
        style={{ backgroundColor: backgroundColor }}
        onClick={() => setActiveColor({ color: color, custom: custom })}
      >
        <span className="sr-only">{backgroundColor}</span>
      </button>
      {custom && (
        <button
          onClick={() => {
            setActiveColor(backgroundColor);
          }}
          className="hover:scale-110 border hidden group-hover:block border-white text-black hover:text-white bg-gray-300 hover:bg-red-500 p-1 absolute rounded-full top-[-5px] right-[-5px] "
        >
          <Cross1Icon className="size-2 " />
        </button>
      )}
    </div>
  );
}
