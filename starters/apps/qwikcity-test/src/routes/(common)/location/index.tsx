import { component$ } from "@builder.io/qwik";
import { useLocation } from "@khulnasoft.com/qwik-city";

export default component$(() => {
  const location = useLocation();
  return (
    <div>
      <h1>useLocation()</h1>
      <ul>
        <li>
          URL: <span class="url">{location.url.href}</span>
        </li>
      </ul>
    </div>
  );
});
