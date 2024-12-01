import {
  renderToStream,
  type RenderToStreamOptions,
} from "@khulnasoft.com/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    base: "/qwikcity-test/build/",
    ...opts,
  });
}
