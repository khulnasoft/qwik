import { Link } from "@khulnasoft.com/qwik-city";
import { component$ } from "@khulnasoft.com/qwik";

export default component$((props) => {
  return (
    <div>
      <h1>Issue 4792</h1>
      <p>link with attr `reload` was not refreshing the page</p>
      <Link id="reload" reload={true} href="docs">
        reload the page
      </Link>
    </div>
  );
});
