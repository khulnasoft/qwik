import { Link, useLocation } from "@khulnasoft.com/qwik-city";
import { component$ } from "@khulnasoft.com/qwik";

export default component$(() => {
  const loc = useLocation();
  return (
    <div>
      <h1>id {loc.params.id}</h1>
      <Link id="pn-main" href="../">
        Go up
      </Link>
    </div>
  );
});
