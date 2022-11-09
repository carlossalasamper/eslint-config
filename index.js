module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "google", "prettier"],
  ignorePatterns: ["dist", "build"],
  rules: {
    "no-unused-vars": "off",
    "require-jsdoc": "off",
    "new-cap": "off",
    "no-console": "error",
  },
};
