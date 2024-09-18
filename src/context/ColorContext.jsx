"use client";

import React, { createContext, useState } from "react";

const ColorContext = createContext();
import {
  colorPalette,
  customColorPalette,
  customAssignmentColors,
} from "@/utils/LeonardoColors";
import huetoneColors from "@/utils/huetoneColors.json";
const huetoneColorsObject = JSON.parse(JSON.stringify(huetoneColors));

export const ColorProvider = ({ children }) => {
  console.log(huetoneColorsObject);
  const [mode, setMode] = useState("dark");

  const [colors, setColors] = useState(huetoneColorsObject.hues);
  const [activeColor, setActiveColor] = useState({
    color: colors[0],
    custom: false,
  });
  const [customColors, setCustomColors] = useState([]);
  const [lightnessStep, setLightnessStep] = useState(0.5);
  const [chromaStep, setChromaStep] = useState(0.05);

  return (
    <ColorContext.Provider
      value={{
        activeColor,
        setActiveColor,
        colors,
        setColors,
        customColors,
        setCustomColors,
        lightnessStep,
        setLightnessStep,
        chromaStep,
        setChromaStep,
        mode,
        setMode,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
