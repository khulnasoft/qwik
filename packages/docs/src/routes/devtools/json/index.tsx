import type { RequestHandler } from '@khulnasoft.com/qwik-city';
import { devtoolsJsonSRC } from '@khulnasoft.com/qwik-labs';

export const onGet: RequestHandler = async ({ send, headers, cacheControl }) => {
  headers.set('Content-Type', 'application/javascript');
  headers.set('Access-Control-Allow-Origin', '*');
  cacheControl('no-cache');
  send(200, devtoolsJsonSRC);
};
