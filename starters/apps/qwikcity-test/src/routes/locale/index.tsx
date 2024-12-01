import { component$, getLocale } from "@khulnasoft.com/qwik";
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
