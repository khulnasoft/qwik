import { component$ } from '@khulnasoft.com/qwik';

export const HelloWorld = component$(({ onClick }: any) => {
  return <button onClick$={onClick}></button>;
});
