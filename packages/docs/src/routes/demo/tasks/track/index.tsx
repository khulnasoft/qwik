import { component$, useSignal, useTask$ } from '@khulnasoft.com/qwik';
import { isServer } from '@khulnasoft.com/qwik/build';

export default component$(() => {
  const text = useSignal('Initial text');
  const delayText = useSignal('');

  useTask$(({ track }) => {
    track(() => text.value);
    const value = text.value;
    const update = () => (delayText.value = value);
    isServer
      ? update() // don't delay on server render value as part of SSR
      : delay(500).then(update); // Delay in browser
  });

  return (
    <section>
      <label>
        Enter text: <input bind:value={text} />
      </label>
      <p>Delayed text: {delayText}</p>
    </section>
  );
});

const delay = (time: number) => new Promise((res) => setTimeout(res, time));
