"use client";
import React, { useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import adjustColor from "../../utils/adjustColor";

export default function Event({ data }) {
  const { activeColor, chromaStep, lightnessStep, mode } =
    React.useContext(ColorContext);

  const { lighterColor, darkerColor, lightness } = adjustColor(
    activeColor,
    lightnessStep,
    chromaStep,
  );

  return (
    <div
      className="relative overflow-hidden rounded-lg px-4 py-2 min-w-56 leading-0 text-[13px]"
      style={{ backgroundColor: mode == "dark" ? activeColor : lighterColor }}
    >
      <div className="flex flex-col">
        {mode === "light" && (
          <span
            className="w-[5px] h-full bg-black absolute top-0 left-0"
            style={{ backgroundColor: activeColor }}
          ></span>
        )}
        <span
          className="font-semibold leading-4"
          style={{
            color: lightness > 0.7 ? darkerColor : lighterColor,
          }}
        >
          {data.name}
        </span>
        <span
          className="font-semibold leading-4"
          style={{
            color: lightness > 0.7 ? darkerColor : lighterColor,
          }}
        >
          {data.time}
        </span>
        {data.service && (
          <span
            className="leading-4"
            style={{ color: lightness > 0.7 ? darkerColor : lighterColor }}
          >
            service: {data.service}
          </span>
        )}
      </div>
    </div>
  );
}
