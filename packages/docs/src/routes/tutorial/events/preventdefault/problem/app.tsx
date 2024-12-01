import { component$ } from '@khulnasoft.com/qwik';

export default component$(() => {
  return (
    <a href="/" onClick$={() => alert('do something else.')}>
      click me!
    </a>
  );
});
