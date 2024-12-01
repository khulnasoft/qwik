import { component$, useSignal, useTask$ } from '@khulnasoft.com/qwik';
import { isServer } from '@khulnasoft.com/qwik/build';

export const InsideTask = component$(() => {
  const mySig = useSignal(0);
  useTask$(async function initTask() {
    if (isServer) {
      await fetch('/url');
    }
  });

  useTask$(({ track }) => {
    track(() => mySig.value);
  });
  return <div></div>;
});
