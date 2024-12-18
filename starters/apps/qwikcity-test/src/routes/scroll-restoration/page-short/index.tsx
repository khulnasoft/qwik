import { component$, useStylesScoped$ } from "@khulnasoft.com/qwik";
import { Link } from "@khulnasoft.com/qwik-city";

export default component$(() => {
  useStylesScoped$(`
    .container {
      position: absolute;
      top: 0;
      height: 2000px;
    }
  `);
  return (
    <>
      <Link
        id="to-page-long"
        class="nav-link"
        href="/qwikcity-test/scroll-restoration/page-long/"
      >
        To Page Long
      </Link>
      <div class="container">
        <h1>Page Short</h1>
      </div>
    </>
  );
});
