// Expect error: { "messageId": "noUseVisibleTask" }

import { component$, useVisibleTask$ } from '@khulnasoft.com/qwik';
export default component$(() => {
  useVisibleTask$(() => {});
  return <></>;
});
