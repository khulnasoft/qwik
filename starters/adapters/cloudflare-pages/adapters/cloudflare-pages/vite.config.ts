import { cloudflarePagesAdapter } from "@khulnasoft.com/qwik-city/adapters/cloudflare-pages/vite";
import { extendConfig } from "@khulnasoft.com/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.cloudflare-pages.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [cloudflarePagesAdapter()],
  };
});
