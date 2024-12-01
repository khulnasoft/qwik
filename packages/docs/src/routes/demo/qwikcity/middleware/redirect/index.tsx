import { type RequestHandler } from '@khulnasoft.com/qwik-city';

export const onGet: RequestHandler = async ({ redirect, url }) => {
  throw redirect(
    308,
    new URL('/demo/qwikcity/middleware/status/', url).toString()
  );
};
