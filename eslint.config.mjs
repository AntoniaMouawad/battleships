import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import * as pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Files to lint
  },
  {
    languageOptions: {
      globals: globals.browser, // Global variables for browser environment
    },
  },
  pluginJs.configs.recommended, // Recommended JS config
  pluginReact.configs.flat.recommended, // Recommended React config
  {
    plugins: {
      import: pluginImport, // Correct use of pluginImport
    },
    rules: {
      "import/no-unresolved": "error", // Flag unresolved imports as errors
      "react/react-in-jsx-scope": "off", // Disable the rule for React 17+
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
      "import/resolver": {
        node: {
          paths: ["node_modules"], // Ensure ESLint looks in node_modules
        },
      },
    },
  },
];
