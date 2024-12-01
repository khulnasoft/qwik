import { type RequestHandler } from '@khulnasoft.com/qwik-city';

export const onGet: RequestHandler = async ({ json }) => {
  json(200, { hello: 'world' });
};
