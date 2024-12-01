import { component$ } from "@khulnasoft.com/qwik";

export const NoResume = component$(() => {
  return (
    <button
      onClick$={() => {
        document.body.style.background = "black";
      }}
    >
      Click me
    </button>
  );
});
