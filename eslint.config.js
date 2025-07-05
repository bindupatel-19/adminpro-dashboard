// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules",
      "dist",
      "package.json",
      "vite.config.js",
      "tailwind.config.js",
      "postcss.config.js",
      "*.md",
    ],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // ✅ For React 17+
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.json"],
    plugins: {
      json,
    },
    rules: {
      ...json.configs.recommended.rules,
    },
  },
]);
