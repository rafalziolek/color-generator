import { Theme, Color, BackgroundColor } from "@adobe/leonardo-contrast-colors";

let white = new BackgroundColor({
  name: "White",
  colorKeys: ["#ffffff"],
  ratios: [1.03, 1.27, 1.67, 2.12, 3.07, 4.74, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let veryLightPink = new Color({
  name: "Very light pink",
  colorKeys: ["#b84671"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let jadeGreen = new Color({
  name: "Jade green",
  colorKeys: ["#fd4e4e"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let lightishBlue = new Color({
  name: "Lightish blue",
  colorKeys: ["#b94b01"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let lightishPurple = new Color({
  name: "Lightish purple",
  colorKeys: ["#fdb653"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let dullGreen = new Color({
  name: "Dull green",
  colorKeys: ["#8a951b"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let kellyGreen = new Color({
  name: "Kelly green",
  colorKeys: ["#61a352"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let lightTurquoise = new Color({
  name: "Light turquoise",
  colorKeys: ["#27ddbc"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let mint = new Color({
  name: "Mint",
  colorKeys: ["#1ca1ba"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let mediumBlue = new Color({
  name: "Medium blue",
  colorKeys: ["#2daef8"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let darkHotPink = new Color({
  name: "Dark hot pink",
  colorKeys: ["#687eee"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let babyPurple = new Color({
  name: "Baby purple",
  colorKeys: ["#b993fb"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let lightNavy = new Color({
  name: "Light navy",
  colorKeys: ["#a346a9"],
  ratios: [1.04, 1.27, 1.67, 2.12, 3.07, 5, 6.19, 8.32, 9.89],
  colorspace: "RGB",
  smooth: false,
});

let assignmentPalette = new Theme({
  colors: [
    veryLightPink,
    jadeGreen,
    lightishBlue,
    lightishPurple,
    dullGreen,
    kellyGreen,
    lightTurquoise,
    mint,
    mediumBlue,
    darkHotPink,
    babyPurple,
    lightNavy,
  ],
  backgroundColor: white,
  lightness: 100,
  contrast: 1,
  saturation: 100,
});

export let customAssignmentColors = new Theme({
  colors: [],
  backgroundColor: white,
  lightness: 100,
  contrast: 1,
  saturation: 100,
});

export let colorPalette = assignmentPalette.contrastColors.slice(1);
export let customColorPalette = customAssignmentColors.contrastColors.slice(1);
