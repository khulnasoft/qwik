import { renderToStream, RenderOptions } from "@khulnasoft.com/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

/**
 * Qwik server-side render function.
 */
export default function (opts: RenderOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
  });
}
