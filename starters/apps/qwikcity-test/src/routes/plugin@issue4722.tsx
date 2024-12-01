import { routeLoader$ } from "@khulnasoft.com/qwik-city";

export const usePlugin = routeLoader$(() => {
  return {
    message: "works",
  };
});
