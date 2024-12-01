import { component$ } from "@khulnasoft.com/qwik";
import type { DocumentHead } from "@khulnasoft.com/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        <a href="/qwikcity-test/sign-out/">Sign Out</a>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
