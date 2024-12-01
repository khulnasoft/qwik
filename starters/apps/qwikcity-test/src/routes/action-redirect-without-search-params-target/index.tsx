import { useLocation } from "@khulnasoft.com/qwik-city";
import { component$ } from "@khulnasoft.com/qwik";

export default component$(() => {
  const location = useLocation();

  return (
    <div>
      <h1>
        Should <strong>not</strong> have searchParams
      </h1>
      <pre>{JSON.stringify(location.url.searchParams.get("id"))}</pre>
    </div>
  );
});
