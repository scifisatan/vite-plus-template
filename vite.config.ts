import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite-plus"

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix"
  },
  fmt: {
    semi: false,
    trailingComma: "none",
    sortImports: {
      groups: [
        "type-import",
        ["value-builtin", "value-external"],
        "type-internal",
        "value-internal",
        ["type-parent", "type-sibling", "type-index"],
        ["value-parent", "value-sibling", "value-index"],
        "unknown"
      ]
    },
    sortTailwindcss: {
      stylesheet: "./src/index.css",
      functions: ["clsx", "cn"],
      preserveWhitespace: true
    },
    sortPackageJson: {
      sortScripts: true
    }
  },
  lint: {
    env: {
      browser: true,
      es2024: true
    },
    plugins: ["typescript", "react", "react-perf", "eslint", "oxc"],
    ignorePatterns: ["dist", "node_modules"],
    options: { typeAware: true, typeCheck: true }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  plugins: [react(), tailwindcss()]
})
