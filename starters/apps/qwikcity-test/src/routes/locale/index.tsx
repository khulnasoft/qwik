import { component$, getLocale } from "@builder.io/qwik";
import type { RequestHandler } from "@khulnasoft.com/qwik-city";

export const onRequest: RequestHandler = ({ locale }) => {
  locale("test-locale");
};

export default component$(() => {
  return (
    <div>
      Current locale: <span class="locale">{getLocale()}</span>
    </div>
  );
});
