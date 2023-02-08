module.exports = {
  plugins: {
    stylelint: {},
    'postcss-import': {},
    'postcss-preset-env': { stage: 1 },
    autoprefixer: {},
    'postcss-reporter': { clearReportedMessages: true },
    cssnano: {},
  },
}
