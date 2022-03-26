const path = require("path")

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true
  },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    semi: [2, "never"],
    "@typescript-eslint/semi": [2, "never"],
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "@typescript-eslint/quotes": [
      2,
      "double",
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: false
      }
    ],
    // "space-before-function-paren": ["error", {
    //   "anonymous": "never",
    //   "named": "never",
    //   "asyncArrow": "never"
    // }],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "import", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      webpack: {
        config: path.join(__dirname, "/frontend/webpack.config.js"),
        "config-index": 1
      }
    },
    react: {
      version: "detect"
    }
  }
}
