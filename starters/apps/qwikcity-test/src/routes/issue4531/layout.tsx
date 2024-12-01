import type { RequestHandler } from "@khulnasoft.com/qwik-city";

export const onRequest: RequestHandler<void> = async (onRequestArgs) => {
  const { headers } = onRequestArgs;
  headers.set("x-qwikcity-test", "issue4531");
};
