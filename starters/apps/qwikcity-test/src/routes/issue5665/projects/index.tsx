import { component$ } from "@khulnasoft.com/qwik";
import { Link, useLocation } from "@khulnasoft.com/qwik-city";

export default component$((props) => {
  const {
    url: { pathname },
  } = useLocation();

  const isProjects = pathname.includes("projects");
  const hrefPath = isProjects ? "projekte" : "projects";

  return (
    <div>
      <h1>Issue 5665</h1>
      <p>
        Translated routes from rewriteRoutes get ignored for [...catchall] route
        in same folder
      </p>
      <Link href={`/qwikcity-test/issue5665/${hrefPath}`}>
        Go to {isProjects ? "projekte" : "projects"}
      </Link>
    </div>
  );
});
