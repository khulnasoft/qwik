import { type RequestHandler } from '@khulnasoft.com/qwik-city';

export const onGet: RequestHandler = async ({ basePathname, json }) => {
  json(200, { basePathname });
};
