import { component$, $ } from '@khulnasoft.com/qwik';

export default component$(() => {
  return (
    <>
      <button onClick$={async () => alert(await $('Hello World!').resolve())}>click me</button>
    </>
  );
});
