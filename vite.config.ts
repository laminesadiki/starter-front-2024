/// <reference types="vite/client" />
import { loadEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';
import sass from 'sass';
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
   test: InlineConfig;
}

type WithMode = { mode: string };

// https://vitejs.dev/config/
export default ({ mode }: WithMode) => {
   Object.assign(process.env, loadEnv(mode, process.cwd()));
   const VITE_APP_PORT = +process.env.VITE_APP_PORT! || 3000;
   return defineConfig({
      plugins: [react(), tsconfigPaths()],
      test: {
         // 👋 add the line below to add jsdom to vite
         environment: 'jsdom',
         globals: true,
         setupFiles: ['dotenv/config', './test/setup.ts'], // assuming the test folder is in the root of our project
         env: loadEnv('', process.cwd()),
         pool: 'forks',
      },
      server: {
         port: VITE_APP_PORT,
      },
      resolve: {
         alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
         },
      },
      css: {
         modules: {
            localsConvention: 'camelCase',
            generateScopedName:
               mode === 'production'
                  ? '[hash:base64:5]'
                  : '[name]_[local]_[hash:base64:5]',
         },
         preprocessorOptions: {
            scss: {
               implementation: sass,
            },
         },
      },
   } as VitestConfigExport);
};
