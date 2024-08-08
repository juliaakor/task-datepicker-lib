import { RollupOptions } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';

export default [
  {
    input: './src/index.ts',
    preserveModules: true,
    output: [
      {
        dir: 'build',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'build/index.cjs.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'build',
        sourceMap: false,
      }),
      terser(),
      babel({
        configFile: './.babelrc',
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'build/src/index.d.ts',
    output: [
      {
        file: 'build/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts()],
    external: [/\.css$/],
  },
] as RollupOptions;
