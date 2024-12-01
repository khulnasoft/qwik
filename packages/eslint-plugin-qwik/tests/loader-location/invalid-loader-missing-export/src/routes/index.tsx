// Expect error: { "messageId": "missingExport" }

import { routeLoader$ } from '@khulnasoft.com/qwik-city';

const useFormLoader = routeLoader$(() => {
  return null;
});
