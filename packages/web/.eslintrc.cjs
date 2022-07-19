module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  // https://github.com/typescript-eslint/typescript-eslint/issues/251
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  extends: [
    "../../.eslintrc.cjs",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
          },
        ],
      },
    ],
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-pascal-case": "error",
  },
};
