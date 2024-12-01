import type { RequestHandler } from "@khulnasoft.com/qwik-city";

export const onRequest: RequestHandler<void> = async (onRequestArgs) => {
  const { redirect, url } = onRequestArgs;
  throw redirect(302, `${url.pathname}/route/`);
};
