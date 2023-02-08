module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
}
