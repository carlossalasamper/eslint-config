module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "google", "prettier"],
  plugins: ["unused-imports"],
  ignorePatterns: ["dist", "build", "node_modules", "coverage"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "new-cap": "off",
    "no-console": "off",
  },
};
