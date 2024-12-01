import { component$, Slot } from "@khulnasoft.com/qwik";
import type { RequestHandler } from "@khulnasoft.com/qwik-city";
import { extractLang, useI18n } from "~/routes/[locale]/i18n-utils";

export const onRequest: RequestHandler = ({ locale, params }) => {
  locale(extractLang(params.locale));
};

export default component$(() => {
  useI18n();
  return <Slot />;
});
