import { denoServerAdapter } from "@khulnasoft.com/qwik-city/adapters/deno-server/vite";
import { extendConfig } from "@khulnasoft.com/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.deno.ts", "@qwik-city-plan"],
      },
      minify: false,
    },
    plugins: [
      denoServerAdapter({
        ssg: {
          include: ["/*"],
          origin: "https://yoursite.dev",
        },
      }),
    ],
  };
});
