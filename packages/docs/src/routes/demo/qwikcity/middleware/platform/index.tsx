import { type RequestHandler } from '@khulnasoft.com/qwik-city';

export const onGet: RequestHandler = async ({ platform, json }) => {
  json(200, Object.keys(platform));
};
