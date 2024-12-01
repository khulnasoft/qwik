// Expect error: { "messageId": "mutableIdentifier" }
import { component$ } from '@khulnasoft.com/qwik';
export const HelloWorld = component$(() => {
  let click: string = '';
  return (
    <button
      onClick$={() => {
        click = '';
      }}
    ></button>
  );
});
