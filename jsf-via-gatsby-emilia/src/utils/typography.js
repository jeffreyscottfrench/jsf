import Typography from 'typography';

const config = require('../../config/SiteConfig');

const typography = new Typography({
  title: 'JSF',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  scaleRatio: 2.5,
  headerWeight: 400,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['400'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
