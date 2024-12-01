import type { RequestHandler } from "@khulnasoft.com/qwik-city";

export const onRequest: RequestHandler = ({ json }) => {
  json(200, {
    issue: 2441,
  });
};
