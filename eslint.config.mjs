import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "OneDrive/**",
      "scripts/**",
      "*.json",
      "baseline-lh.json",
      "contrast_fixer.js",
      "copy-logo.js",
      "fix_logos.js",
      "fix_partner_apply.js",
      "theme_converter.js"
    ]
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "off"
    }
  }
];

export default eslintConfig;
