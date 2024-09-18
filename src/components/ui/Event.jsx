"use client";
import React, { useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import adjustColor from "../../utils/adjustColor";

export default function Event({ data, customColor = false }) {
  const { activeColor, chromaStep, lightnessStep, mode } =
    React.useContext(ColorContext);

  const backgroundColor =
    customColor === true
      ? activeColor.color.backgroundColor
      : activeColor.color[5];
  const backgroundColorLight =
    customColor === true
      ? activeColor.color.backgroundColorLight
      : activeColor.color[1];
  const foregroundColor =
    customColor === true
      ? activeColor.color.foregroundColor
      : activeColor.color[0];
  const foregroundColorLight =
    customColor === true
      ? activeColor.color.foregroundColorLight
      : activeColor.color[7];

  return (
    <div
      className="relative overflow-hidden rounded-lg px-4 py-2 min-w-56 leading-0 text-[13px]"
      style={{
        backgroundColor:
          mode === "light" ? backgroundColorLight : backgroundColor,
      }}
    >
      <div className="flex flex-col">
        {mode === "light" && (
          <span
            className="w-[5px] h-full bg-black absolute top-0 left-0"
            style={{ backgroundColor: backgroundColor }}
          ></span>
        )}
        <span
          className="font-semibold leading-4"
          style={{
            color: mode === "light" ? foregroundColorLight : foregroundColor,
          }}
        >
          {data.name}
        </span>
        <span
          className="font-semibold leading-4"
          style={{
            color: mode === "light" ? foregroundColorLight : foregroundColor,
          }}
        >
          {data.time}
        </span>
        {data.service && (
          <span
            className="leading-4"
            style={{
              color: mode === "light" ? foregroundColorLight : foregroundColor,
            }}
          >
            service: {data.service}
          </span>
        )}
      </div>
    </div>
  );
}
