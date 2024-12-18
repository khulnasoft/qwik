import { component$, useStylesScoped$ } from '@khulnasoft.com/qwik';
import styles from './contributors.css?inline';
import { useDocumentHead } from '@khulnasoft.com/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);
  const { frontmatter } = useDocumentHead<{ contributors?: string[] }>();
  const contributors = frontmatter.contributors || [];

  if (!contributors.length) {
    return null;
  }

  return (
    <div class="wrapper card">
      <h3>Contributors</h3>
      <p>Thanks to all the contributors who have helped make this documentation better!</p>
      <ul class="list">
        {contributors.map((contributor: string) => (
          <li key={`contributor-${contributor}`} class="contributor">
            <a href={`https://github.com/${contributor}`} target="_blank" rel="noreferrer">
              <img
                loading="lazy"
                src={`https://github.com/${contributor}.png?size=80`}
                width="40"
                height="40"
                alt={contributor}
                class="avatar"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
