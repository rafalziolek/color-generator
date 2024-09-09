"use client";
import React, { useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import adjustColor from "../../utils/adjustColor";

export default function Event({ data }) {
  const { activeColor, adjustments, mode } = React.useContext(ColorContext);

  const {
    BackgroundDark,
    BackgroundLight,
    ForegroundDark,
    ForegroundLight,
    lightness,
  } = adjustColor(activeColor, adjustments);
  const foregroundColor =
    mode === "dark" && lightness > 0.65
      ? ForegroundLight
      : mode === "light" && lightness > 0.2
        ? ForegroundLight
        : ForegroundDark;

  return (
    <div
      className="relative overflow-hidden rounded-lg px-4 py-2 min-w-56 leading-0 text-[13px]"
      style={{
        backgroundColor: mode == "dark" ? BackgroundDark : BackgroundLight,
      }}
    >
      <div className="flex flex-col">
        {mode === "light" && (
          <span
            className="w-[5px] h-full bg-black absolute top-0 left-0"
            style={{ backgroundColor: BackgroundDark }}
          ></span>
        )}
        <span
          className="font-semibold leading-4"
          style={{
            color: foregroundColor,
          }}
        >
          {data.name}
        </span>
        <span
          className="font-semibold leading-4"
          style={{
            color: foregroundColor,
          }}
        >
          {data.time}
        </span>
        {data.service && (
          <span
            className="leading-4"
            style={{
              color: foregroundColor,
            }}
          >
            service: {data.service}
          </span>
        )}
      </div>
    </div>
  );
}
