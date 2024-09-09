"use client";

import React, { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [colors, setColors] = useState([
    "oklch(0.6 0.14 30)",
    "oklch(0.6 0.14 180)",
    "oklch(0.6 0.14 240)",
    "oklch(0.6 0.14 300)",
    "oklch(0.6 0.14 420)",
    "oklch(0.6 0.14 540)",
    "oklch(0.6 0.14 660)",
    "oklch(0.7 0.2 80)",
    "oklch(0.95 0.14 900)",
    "oklch(0.4 0.14 100)",
  ]);
  const [activeColor, setActiveColor] = useState(colors[0]);
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
