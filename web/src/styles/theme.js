const colors = {
  light: {
    primary: '#E4D7D0',
    secondary: '#0A4158',
    background: '#ffffff',
  },
  dark: {
    primary: '#0A4158',
    secondary: '#FF9636',
    background: '#4B8378',
  },
};

const getTheme = (type) => ({
  color: colors[type],
  font: {
    lineHeight: '',
    family: '',
    weight: {},
    size: {},
  },
  spacing: {},
  image: {
    mobile: {},
    desktop: {},
  },
  mediaQuery: {},
});

export default getTheme;
