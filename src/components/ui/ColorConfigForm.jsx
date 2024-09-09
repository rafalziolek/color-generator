"use client";
import React from "react";
import ColorContext from "../../context/ColorContext";
import { Input } from "./input";
import { Label } from "./label";
export default function ColorConfigForm() {
  const { chromaStep, lightnessStep, setChromaStep, setLightnessStep } =
    React.useContext(ColorContext);
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-md font-bold">Configuration</h3>
      <fieldset className="flex flex-col gap-4">
        <div>
          <Label htmlFor="lightness">Lightness</Label>
          <Input
            id="lightness"
            type="number"
            label="Lightness Step"
            value={lightnessStep}
            step="0.01"
            min="0"
            max="1"
            onChange={(e) => setLightnessStep(parseFloat(e.target.value))}
          />
          <span className="text-xs text-muted-foreground leading-4 inline-block mt-1">
            For lighter colors, increases the lightness by a specified amount.
            If darker colors, decreases it.
          </span>
        </div>
        <div>
          <Label htmlFor="chroma">Chroma</Label>
          <Input
            id="chroma"
            type="number"
            value={chromaStep}
            step="0.01"
            min="0"
            onChange={(e) => setChromaStep(parseFloat(e.target.value))}
          />
          <span className="text-xs text-muted-foreground leading-4 inline-block mt-1">
            Increases the chroma by a specified amount
          </span>
        </div>
      </fieldset>
    </div>
  );
}
