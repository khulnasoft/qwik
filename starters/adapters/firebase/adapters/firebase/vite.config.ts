import { nodeServerAdapter } from "@khulnasoft.com/qwik-city/adapters/node-server/vite";
import { extendConfig } from "@khulnasoft.com/qwik-city/vite";
import baseConfig from "../../vite.config";
import { builtinModules } from "module";
export default extendConfig(baseConfig, () => {
  return {
    ssr: {
      external: builtinModules,
      noExternal: /./,
    },
    build: {
      minify: false,
      ssr: true,
      rollupOptions: {
        input: ["./src/entry-firebase.tsx", "@qwik-city-plan"],
      },
      outDir: "./functions/server",
    },
    plugins: [nodeServerAdapter({ name: "firebase" })],
  };
});
