import { converter } from "culori";

function adjustColor(activeColor, adjustments) {
  const oklch = converter("oklch");
  const { l: lightness, c: chroma, h: hue } = oklch(activeColor);

  const adjustedColors = {
    ForegroundLight: `oklch(${Math.min(Math.max(lightness + adjustments.ForegroundLight.l, 0), 1)} ${Math.min(Math.max(chroma + adjustments.ForegroundLight.c, 0), 1)} ${hue})`,
    ForegroundDark: `oklch(${Math.min(Math.max(lightness + adjustments.ForegroundDark.l, 0), 1)} ${Math.min(Math.max(chroma + adjustments.ForegroundDark.c, 0), 1)} ${hue})`,
    BackgroundLight: `oklch(${Math.min(Math.max(lightness + adjustments.BackgroundLight.l, 0), 1)} ${Math.min(Math.max(chroma + adjustments.BackgroundLight.c, 0), 1)} ${hue})`,
    BackgroundDark: `oklch(${Math.min(Math.max(lightness + adjustments.BackgroundDark.l, 0), 1)} ${Math.min(Math.max(chroma + adjustments.BackgroundDark.c, 0), 1)} ${hue})`,
    lightness: lightness, // Return the original lightness
  };

  console.log(adjustedColors);

  return adjustedColors;
}

export default adjustColor;
