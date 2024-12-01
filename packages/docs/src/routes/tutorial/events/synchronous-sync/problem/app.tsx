import { component$ } from '@khulnasoft.com/qwik';

export default component$(() => {
  return (
    <a
      href="/"
      onClick$={(event) => {
        if (event.ctrlKey) {
          event.preventDefault();
        }
        console.log('clicked');
      }}
    >
      click me!
    </a>
  );
});
