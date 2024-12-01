import { type RequestHandler } from '@khulnasoft.com/qwik-city';

export const onGet: RequestHandler = async ({ url, json }) => {
  json(200, { url: url.toString() });
};
