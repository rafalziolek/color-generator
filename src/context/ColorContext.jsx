"use client";

import React, { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [colors, setColors] = useState([
    "oklch(0.57 0.13 30)",
    "oklch(0.57 0.13 180)",
    "oklch(0.57 0.13 240)",
    "oklch(0.57 0.13 300)",
    "oklch(0.57 0.13 420)",
    "oklch(0.57 0.13 540)",
    "oklch(0.57 0.13 660)",
  ]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [customColors, setCustomColors] = useState([]);
  const [lightnessStep, setLightnessStep] = useState(0.5);
  const [chromaStep, setChromaStep] = useState(0.1);
  const [adjustments, setAdjustments] = useState({
    BackgroundLight: {
      l: 0.3,
      c: -0.08,
    },
    BackgroundDark: {
      l: 0.0,
      c: 0.0,
    },
    ForegroundLight: {
      l: -0.44,
      c: 0.15,
    },
    ForegroundDark: {
      l: 0.6,
      c: -0.1,
    },
  });

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
        adjustments,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
