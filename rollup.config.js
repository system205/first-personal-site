import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

import dotenv from 'dotenv';
dotenv.config();


export default {
    input: './src/main.ts',
    output: { file: './scripts/bundle.js' },
    plugins: [
        resolve({ browser: true }),
        typescript({ module: "ESNext" }),
        replace({
            values: {
                'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
            },
            preventAssignment: true,
        }),
        terser(),
    ],
};