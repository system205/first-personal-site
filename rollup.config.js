import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: './src/main.js',
    output: { file: './scripts/bundle.js' },
    plugins: [
        resolve({ browser: true }),
        terser(),
    ],
};