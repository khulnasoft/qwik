import { type RequestHandler } from '@khulnasoft.com/qwik-city';

export const onRequest: RequestHandler = async ({ method, json }) => {
  json(200, { method });
};
