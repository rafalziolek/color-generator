function adjustColor(activeColor, lightnessStep, chromaStep) {
  const parseColor = (color) => {
    const lightnessMatch = color.match(/oklch\(([^ ]+)/);
    const chromaMatch = color.match(/oklch\([^ ]+ ([^ ]+)/);
    const hueMatch = color.match(/oklch\([^ ]+ [^ ]+ ([^ ]+)\)/);

    return {
      lightness: lightnessMatch ? parseFloat(lightnessMatch[1]) : 0,
      chroma: chromaMatch ? parseFloat(chromaMatch[1]) : 0,
      hue: hueMatch ? hueMatch[1] : "0",
    };
  };

  const { lightness, chroma, hue } = parseColor(activeColor);

  const adjustedLightnessForLighter = Math.min(
    Math.max(lightness + lightnessStep, 0),
    1,
  );
  const adjustedLightnessForDarker = Math.min(
    Math.max(lightness - lightnessStep, 0),
    1,
  );
  const adjustedChroma = Math.min(Math.max(chroma - chromaStep, 0), 1);

  return {
    lighterColor: `oklch(${adjustedLightnessForLighter} ${adjustedChroma} ${hue})`,
    darkerColor: `oklch(${adjustedLightnessForDarker} ${adjustedChroma} ${hue})`,
    lightness,
  };
}

export default adjustColor;
