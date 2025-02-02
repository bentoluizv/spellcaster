import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    output: [
      { dir: "./dist/index.js", format: "cjs", sourcemap: true },
      { dir: "./dist/index.mjs", format: "esm", sourcemap: true },
    ],

    plugins: [
      commonjs(),
      resolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      peerDepsExternal(),
      postcss(),
    ],
    external: ["react, react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ dir: "./dist/index.d.ts" }],
    plugins: [dts.default()],
  },
];
