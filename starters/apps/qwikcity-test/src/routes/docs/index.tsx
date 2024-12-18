import { component$ } from "@khulnasoft.com/qwik";
import type { DocumentHead } from "@khulnasoft.com/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Welcome to the Docs!</h1>

      <p>
        <a href="/qwikcity-test/docs">
          Docs link with trailing slash (should redirect without slash)
        </a>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome!",
};
