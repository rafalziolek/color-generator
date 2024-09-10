"use client";
import React from "react";
import ColorContext from "@/context/ColorContext";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { converter } from "culori";

export function ColorPicker() {
  const { customColors, setCustomColors, activeColor, setActiveColor } =
    React.useContext(ColorContext);
  const [color, setColor] = React.useState("#ffffff");
  const handleAddCustomColor = () => {
    const oklch = converter("oklch");
    const colorOklch = oklch(color);
    const colorFamily = {
      backgroundColor: `oklch(${colorOklch.l} ${colorOklch.c} ${
        colorOklch.h ?? 0
      })`,
      backgroundColorLight: `oklch(${Math.min(
        0.96,
        colorOklch.l + 0.15
      )} ${Math.max(0, colorOklch.c - 0.1)} ${colorOklch.h ?? 0})`,
      foregroundColor: `oklch(${
        colorOklch.l > 0.8
          ? `${colorOklch.l - 0.35} ${Math.max(0, colorOklch.c + 0.1)}`
          : `${colorOklch.l + 0.7} ${Math.min(1, colorOklch.c - 0.1)}`
      } ${colorOklch.h ?? 0})`,
      foregroundColorLight: `oklch(${colorOklch.l - 0.35} ${Math.max(
        0,
        colorOklch.c + 0.1
      )} ${colorOklch.h ?? 0})`,
    };
    setCustomColors((prev) => {
      const updatedColors = [
        ...prev,
        { [`CustomColor-${color}`]: colorFamily },
      ];
      // Set the active color to the newly added color
      setActiveColor({ color: colorFamily, custom: true });
      console.log(activeColor);
      console.log(updatedColors);
      return updatedColors;
    });
    setColor("#ffffff");
  };

  return (
    <div className="relative flex items-center gap-2 w-fit h-fit">
      <input
        className={`w-8 h-8 rounded-md ${
          color !== "#ffffff" ? "" : "border"
        } border-input bg-transparent text-muted-foreground`}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        onBlur={handleAddCustomColor} // Call the function to add custom color when focus is lost
      />
      <span className="size-5 absolute pointer-events-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full flex items-center justify-center">
        <PlusCircledIcon className="text-black" />
      </span>
    </div>
  );
}
