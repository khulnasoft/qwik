import { component$ } from '@khulnasoft.com/qwik';
import { QCounter } from './react';

export default component$(() => {
  console.log('Qwik Render');
  return (
    <main>
      <QCounter />
    </main>
  );
});
