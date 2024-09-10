"use client";
import React from "react";
import ColorList from "./ColorList";
import { ColorPicker } from "./ColorPicker";
import { ColorItem } from "./ColorList";
import { Button } from "./button";
import ColorContext from "@/context/ColorContext";

export default function ColorsList() {
  const { colors } = React.useContext(ColorContext);
  return (
    <div className="flex flex-col gap-2">
      <ColorList title="Colors">
        {colors.map((colorFamily) => (
          <ColorItem
            key={`${colorFamily.name}-${colorFamily.values[5].name}`}
            color={colorFamily}
          />
        ))}
      </ColorList>
    </div>
  );
}
