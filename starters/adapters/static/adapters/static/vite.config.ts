import { staticAdapter } from "@khulnasoft.com/qwik-city/adapters/static/vite";
import { extendConfig } from "@khulnasoft.com/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdapter({
        origin: "https://yoursite.qwik.dev",
      }),
    ],
  };
});
