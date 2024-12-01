import { component$, useStylesScoped$ } from '@khulnasoft.com/qwik';

export default component$(() => {
  return (
    <>
      <ComponentA />
      <ComponentB />
    </>
  );
});

export const ComponentA = component$(() => {
  useStylesScoped$(`
    .component {
      background-color: red;
    }`);
  return (
    <div class="component">
      <div>A</div>
    </div>
  );
});

export const ComponentB = component$(() => {
  useStylesScoped$(`
    .component {
      background-color: green;
    }`);

  return (
    <div class="component">
      <div>B</div>
    </div>
  );
});
