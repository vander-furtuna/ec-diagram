const colorPalette = {
  primary10: '#FAFFFF',
  primary300: '#00ABBD',
  primary500: '#0099DD',

  secondary10: '#FFFCFA',
  secondary300: '#FF9934',
  secondary500: '#FE7F01',

  automation300: '#FFD400',
  computing300: '#58D0F5',
  telecomunications300: '#99EE6F',

  gray200: '#EAEAEA',
  gray500: '#9B9B9B',
  gray700: '#4A4A4A',
  gray900: '#2E2E2E',
};

export const theme = {
  ...colorPalette,
  logo: {
    primary: colorPalette.primary300,
    primaryBold: colorPalette.primary500,
    secondary: colorPalette.secondary300,
    secondaryBold: colorPalette.secondary500,
  },
};

export type ThemeType = typeof theme;
