import { nodeServerAdapter } from "@khulnasoft.com/qwik-city/adapters/node-server/vite";
import { extendConfig } from "@khulnasoft.com/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.fastify.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [nodeServerAdapter({ name: "fastify" })],
  };
});
