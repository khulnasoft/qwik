import { component$ } from '@khulnasoft.com/qwik';

export const Child = component$(() => {
  return <p>child</p>;
});

export const Parent = component$(() => {
  return (
    <section>
      <Child />
    </section>
  );
});

export default Parent;
