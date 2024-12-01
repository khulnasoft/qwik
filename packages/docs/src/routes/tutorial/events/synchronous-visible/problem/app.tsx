import { component$ } from '@khulnasoft.com/qwik';

export default component$(() => {
  return (
    <a href="/" onClick$={() => window.open('http://qwik.dev')}>
      click me!
    </a>
  );
});
