import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    external: ['react', 'react-dom', 'styled-components'],
    input: './src/index.ts',
    output: [
      {
        dir: 'build',
        exports: 'named',
        format: 'esm',
        sourcemap: true,
      },
      {
        exports: 'named',
        file: 'build/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: 'build',
        sourceMap: true,
        tsconfig: './tsconfig.json',
      }),
      terser(),
      babel({
        babelHelpers: 'runtime',
        configFile: './.babelrc',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: ['babel-plugin-styled-components'],
      }),
      eslint({
        exclude: 'node_modules/**',
      }),
    ],
    preserveModules: true,
  },
  {
    external: [/\.css$/],
    input: 'build/src/index.d.ts',
    output: [
      {
        file: 'build/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts()],
  },
] as RollupOptions;
