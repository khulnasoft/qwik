import { component$, Slot } from '@khulnasoft.com/qwik';
import type { RequestHandler } from '@khulnasoft.com/qwik-city';

export default component$(() => {
  return <Slot />;
});

export const onGet: RequestHandler = ({ cacheControl }) => {
  // cache for pages using this layout
  cacheControl({
    public: true,
    maxAge: 3600,
    sMaxAge: 3600,
    staleWhileRevalidate: 86400,
  });
};
