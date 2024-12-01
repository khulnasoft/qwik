import { component$ } from '@khulnasoft.com/qwik';

export interface Props {
  serializableTuple: [string, number, boolean];
}

export const HelloWorld = component$((props: Props) => {
  return <button onClick$={() => props.serializableTuple}></button>;
});
