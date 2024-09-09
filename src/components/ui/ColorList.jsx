"use client";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

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
  const { activeColor, setActiveColor, setCustomColors, colors } =
    React.useContext(ColorContext);

  return (
    <div className="group relative">
      <button
        className={`  w-8 h-8 rounded-md ${color == activeColor ? "outline-2 outline-offset-1 outline-blue-400" : ""}`}
        style={{ backgroundColor: color }}
        onClick={() => setActiveColor(color)}
      >
        <span className="sr-only">{color}</span>
      </button>
      {custom && (
        <button
          onClick={() => {
            setCustomColors((customColors) =>
              customColors.filter((c) => c !== color),
            );
            setActiveColor(colors[0]);
          }}
          className="hover:scale-110 border hidden group-hover:block border-white text-black hover:text-white bg-gray-300 hover:bg-red-500 p-1 absolute rounded-full top-[-5px] right-[-5px] "
        >
          <Cross1Icon className="size-2 " />
        </button>
      )}
    </div>
  );
}
