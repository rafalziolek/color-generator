"use client";
import React from "react";
import ColorList from "./ColorList";
import { ColorPicker } from "./ColorPicker";
import { ColorItem } from "./ColorList";
import { Button } from "./button";
import ColorContext from "@/context/ColorContext";

export default function CustomColorsList() {
  const { customColors, setCustomColors } = React.useContext(ColorContext);
  return (
    <div className="flex flex-col gap-2">
      <ColorList title="Custom">
        {customColors.contrastColors.slice(1).map((colorFamily) => (
          <ColorItem
            key={`${colorFamily.name}-${colorFamily.values[5].name}`}
            color={colorFamily}
          />
        ))}
        <ColorPicker />
      </ColorList>
    </div>
  );
}
