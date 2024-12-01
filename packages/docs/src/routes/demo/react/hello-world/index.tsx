import { component$ } from '@khulnasoft.com/qwik';
import { QGreetings } from './react';

export default component$(() => {
  return (
    <main>
      <p>Hello from Qwik</p>
      <QGreetings />
    </main>
  );
});
