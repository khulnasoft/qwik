import { component$ } from '@khulnasoft.com/qwik';

export default component$(() => {
  return <button onClick$={() => alert('Hello World!')}>Click Me</button>;
});
