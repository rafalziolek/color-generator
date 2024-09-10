"use client";
import React from "react";
import ColorContext from "@/context/ColorContext";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Theme, Color, BackgroundColor } from "@adobe/leonardo-contrast-colors";

export function ColorPicker() {
  const { customColors, setCustomColors, activeColor, setActiveColor } =
    React.useContext(ColorContext);
  const [color, setColor] = React.useState("#ffffff");
  const [colorNumber, setColorNumber] = React.useState(0);
  // Initialize white background
  let white = new BackgroundColor({
    name: "White",
    colorKeys: ["#ffffff"],
    ratios: [1.03, 1.27, 1.67, 2.12, 3.07, 4.74, 6.19, 8.32, 9.89],
    colorspace: "RGB",
    smooth: false,
  });

  const handleAddCustomColor = () => {
    let customColor = new Color({
      name: `customColor_${color}`, // Unique name based on the color value
      colorKeys: [color],
      ratios: [1.06, 1.27, 1.67, 2.12, 3.07, 4.74, 6.19, 8.32, 9.89], // Ratios can be adjusted as necessary
    });

    // Instead of spreading customColors, we directly create a new Theme instance with updated colors array
    const updatedCustomColors = new Theme({
      colors: [...(customColors?.colors || []), customColor], // Safely add the new color to the colors array
      backgroundColor: white,
      lightness: 100,
      contrast: 1,
      saturation: 100,
    });

    // Update the state with the new theme
    setCustomColors(updatedCustomColors);
    console.log(updatedCustomColors);
    setActiveColor(updatedCustomColors.contrastColors.slice(1).at(-1));

    console.log(activeColor);
  };

  return (
    <div className="relative flex items-center gap-2 w-fit h-fit">
      <input
        className={`w-8 h-8 rounded-md ${color !== "#ffffff" ? "" : "border"} border-input bg-transparent text-muted-foreground`}
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
