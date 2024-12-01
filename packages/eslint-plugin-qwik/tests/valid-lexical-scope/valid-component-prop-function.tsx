import { component$, type QRL } from '@khulnasoft.com/qwik';

export default component$<{ onClick$: QRL<() => void> }>(({ onClick$ }) => {
  return (
    <button
      onClick$={() => {
        onClick$();
      }}
    />
  );
});
