import { useColorTheme } from '../providers';
import type { BackgroundColors, TextColors } from '../type-defs';

export const useColor = () => {
  const colorTheme = useColorTheme();

  return {
    shade: colorTheme.shade,
    colors: colorTheme.colors,
    backgroundColors: colorTheme.backgroundColors,
    fontColors: colorTheme.fontColors,
  };
};

export const useColorForTextColor = (textColor: keyof TextColors) => {
  const colorTheme = useColorTheme();

  const colorNameForTextColor = colorTheme.fontColors[textColor];
  const color = colorTheme.colors[colorNameForTextColor];

  return color;
};

export const useColorsForTextColorsCollection = (textColorCollection: (keyof TextColors)[]): string[] => {
  const colorTheme = useColorTheme();
  const mappedColors = textColorCollection.map((textColor) => {
    const colorNameForTextColor = colorTheme.fontColors[textColor];
    const color = colorTheme.colors[colorNameForTextColor];
    return color;
  });
  return mappedColors;
};

export const useColorForBackgroundColor = (backgroundColor: keyof BackgroundColors) => {
  const colorTheme = useColorTheme();

  const colorNameForBackgroundColor = colorTheme.backgroundColors[backgroundColor];

  const color = colorTheme.colors[colorNameForBackgroundColor];
  return color;
};

export const useColorsForBackgroundColorsCollection = (
  backgroundColorCollection: (keyof BackgroundColors)[],
): string[] => {
  const colorTheme = useColorTheme();
  const mappedColors = backgroundColorCollection.map((backgroundColor) => {
    const colorNameForBackgroundColor = colorTheme.backgroundColors[backgroundColor];
    const color = colorTheme.colors[colorNameForBackgroundColor];
    return color;
  });
  return mappedColors;
};
