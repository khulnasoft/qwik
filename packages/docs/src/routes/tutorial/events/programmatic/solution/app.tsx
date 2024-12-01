import { component$, useOn, $ } from '@khulnasoft.com/qwik';

export default component$(() => {
  useOn(
    'click',
    $(() => alert('Hello World!'))
  );

  return <p>App Component. Click me.</p>;
});
