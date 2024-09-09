"use client";
import React from "react";
import ColorContext from "@/context/ColorContext";
import { formatHex, oklch, rgb } from "culori";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const hexColor = "#FF5733";
const oklchColor = oklch(rgb(formatHex(hexColor)));

console.log(oklchColor); // { mode: 'oklch', l: 0.678, c: 0.153, h: 29.56 }

export function ColorPicker() {
  const { customColors, setCustomColors, setActiveColor } =
    React.useContext(ColorContext);
  const [color, setColor] = React.useState("#ffffff");
  return (
    <div className="relative flex items-center gap-2 w-fit h-fit">
      <input
        className={`w-8 h-8 rounded-md ${color !== "#ffffff" ? "" : "border"} border-input bg-transparent text-muted-foreground`}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        onBlur={(e) => {
          const oklchColor = oklch(rgb(formatHex(color)));
          const clampedLightness = Math.min(Math.max(oklchColor.l, 0), 1);
          const oklchCSS = `oklch(${clampedLightness.toFixed(3)} ${oklchColor.c} ${oklchColor.h ?? 0})`;
          if (!customColors.includes(oklchColor)) {
            setCustomColors([...customColors, oklchCSS]);
            setActiveColor(oklchCSS);
          }
          setColor("#ffffff");
          console.log(customColors);
        }}
      ></input>
      <span className="size-5 absolute pointer-events-none top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-full flex items-center justify-center">
        <PlusCircledIcon className="text-black" />
      </span>
    </div>
  );
}
