import Typography from 'typography'

const fontFamily = ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
