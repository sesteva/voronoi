import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "iife",
    name: "define",
  },
  plugins: [
    babel({
      presets: ["@babel/preset-env"],
      plugins: ["bundled-import-meta"],
    }),
    resolve(),
  ],
};
