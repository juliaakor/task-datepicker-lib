import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const external = ['react', 'react-dom', 'styled-components', 'luxon'];

const createPlugins = (declarationDir: string) => [
  peerDepsExternal(),
  nodeResolve(),
  commonjs(),
  typescript({
    declaration: true,
    declarationDir,
    rootDir: 'src',
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
  postcss({
    extensions: ['.css'],
    extract: false,
    inject: true,
  }),
];

export default [
  {
    external,
    input: './src/index.ts',
    output: [
      {
        dir: 'build/esm',
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: createPlugins('build/esm/types'),
  },
  {
    external,
    input: './src/index.ts',
    output: [
      {
        dir: 'build/cjs',
        format: 'cjs',
        sourcemap: false,
      },
    ],
    plugins: createPlugins('build/cjs/types'),
  },
  {
    external: [/\.css$/],
    input: 'build/esm/types/index.d.ts',
    output: [
      {
        file: 'build/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts()],
  },
] as RollupOptions;
