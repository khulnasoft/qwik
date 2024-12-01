import { component$, useSignal, $ } from '@khulnasoft.com/qwik';

export default component$(() => {
  const count = useSignal(0);
  const increment = $(() => count.value++);
  return (
    <>
      <button onClick$={increment}>Increment</button>
      <p>Count: {count.value}</p>
    </>
  );
});
