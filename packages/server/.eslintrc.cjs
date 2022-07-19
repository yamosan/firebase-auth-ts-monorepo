module.exports = {
  extends: ["../../.eslintrc.cjs"],
  env: {
    node: true,
    jest: true,
  },
  // https://github.com/typescript-eslint/typescript-eslint/issues/251
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
