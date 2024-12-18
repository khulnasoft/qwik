import { cloudRunAdapter } from "@khulnasoft.com/qwik-city/adapters/cloud-run/vite";
import { extendConfig } from "@khulnasoft.com/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.cloud-run.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [cloudRunAdapter()],
  };
});
