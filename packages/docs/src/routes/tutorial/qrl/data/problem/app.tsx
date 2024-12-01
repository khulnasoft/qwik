import { component$ } from '@khulnasoft.com/qwik';

export default component$(() => {
  return (
    <>
      <button onClick$={async () => alert('Hello World!')}>click me</button>
    </>
  );
});
