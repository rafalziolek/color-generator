"use client";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ColorContext from "@/context/ColorContext";
import { Card } from "./card";
export function ModeSwitcher({ className }) {
  const { mode, setMode } = React.useContext(ColorContext);
  return (
    <Card className={`p-1 ${className}`}>
      <ToggleGroup type="single" defaultValue={mode}>
        <ToggleGroupItem value="dark" onClick={() => setMode("dark")}>
          Dark theme
        </ToggleGroupItem>
        <ToggleGroupItem value="light" onClick={() => setMode("light")}>
          Light theme
        </ToggleGroupItem>
      </ToggleGroup>
    </Card>
  );
}
