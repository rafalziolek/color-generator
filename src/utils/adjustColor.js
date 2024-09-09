import { converter } from "culori";

function adjustColor(activeColor, adjustments) {
  const oklch = converter("oklch");
  const { l: lightness, c: chroma, h: hue } = oklch(activeColor);

  let adjustedLightness = lightness;
  let adjustedChroma = chroma;

  // Adjust lightness more significantly based on hue
  if (hue >= 100 && hue < 300) {
    // Greens
    adjustedLightness -= 0.03; // Heavier lightness adjustment for green
  } else if (hue < 100 || hue > 300) {
    // Reds
    adjustedChroma -= 0.01; // Reduce chroma for reds (optional)
  }

  const adjustedColors = {
    ForegroundLight: `oklch(${Math.min(Math.max(adjustedLightness + adjustments.ForegroundLight.l, 0), 1)} ${Math.min(Math.max(adjustedChroma + adjustments.ForegroundLight.c, 0), 1)} ${hue})`,
    ForegroundDark: `oklch(${Math.min(Math.max(adjustedLightness + adjustments.ForegroundDark.l, 0), 1)} ${Math.min(Math.max(adjustedChroma + adjustments.ForegroundDark.c, 0), 1)} ${hue})`,
    BackgroundLight: `oklch(${Math.min(Math.max(adjustedLightness + adjustments.BackgroundLight.l, 0), 1)} ${Math.min(Math.max(adjustedChroma + adjustments.BackgroundLight.c, 0), 1)} ${hue})`,
    BackgroundDark: `oklch(${Math.min(Math.max(adjustedLightness + adjustments.BackgroundDark.l, 0), 1)} ${Math.min(Math.max(adjustedChroma + adjustments.BackgroundDark.c, 0), 1)} ${hue})`,
    lightness,
  };

  return adjustedColors;
}

export default adjustColor;
