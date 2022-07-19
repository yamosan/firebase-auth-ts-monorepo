module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ["./tsconfig.json", "./packages/*/tsconfig.json"], // https://github.com/import-js/eslint-plugin-import/issues/2301
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "prefer-const": "error",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "error",
      { "newlines-between": "always", warnOnUnassignedImports: true },
    ],
  },
};
