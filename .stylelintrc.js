module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': true,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'declaration-block-no-redundant-longhand-properties': null,
    'no-descending-specificity': null,
  },
  ignoreFiles: ['node_modules/**/*.css'],
}
