import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@khulnasoft.com/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Settings</h1>
      <p>My Settings</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Settings",
};
