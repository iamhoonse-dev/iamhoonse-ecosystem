import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { config } from "@iamhoonse-js/eslint-config/react-internal";

export default tseslint.config(
  { ignores: ["dist", "storybook-static"] },
  {
    extends: [...config],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
