const colorPalette = {
  white: '#FFFFFF',
  black: '#000000',

  primary10: '#E5FDFF',
  primary300: '#00ABBD',
  primary500: '#0099DD',

  secondary10: '#FFF2E5',
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
  text: {
    normal: colorPalette.gray700,
    light: colorPalette.white,
    dark: colorPalette.black,
  },
  background: {
    primaryLight: colorPalette.primary10,
    primary: colorPalette.primary300,
    primaryDark: colorPalette.primary500,
    secondaryLight: colorPalette.secondary10,
    secondary: colorPalette.secondary300,
    secondaryDark: colorPalette.secondary500,

    card: {
      automation: colorPalette.automation300,
      computing: colorPalette.computing300,
      telecomunications: colorPalette.telecomunications300,
      mandatory: colorPalette.gray200,
    },
  },
  input: {
    background: colorPalette.gray200,
    placeholder: colorPalette.gray500,
    text: colorPalette.gray700,
  },

  borderRadius: '0.5rem',
};

export type ThemeType = typeof theme;
