import { type RequestHandler } from '@khulnasoft.com/qwik-city';

export const onGet: RequestHandler = async ({ exit }) => {
  throw exit();
};
