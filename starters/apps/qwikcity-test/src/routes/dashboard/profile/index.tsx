import { component$ } from "@khulnasoft.com/qwik";
import type { DocumentHead } from "@khulnasoft.com/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Profile</h1>
      <p>My Profile</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Profile",
};
