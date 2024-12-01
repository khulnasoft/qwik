import { routeAction$, Form } from "@khulnasoft.com/qwik-city";
import { component$ } from "@khulnasoft.com/qwik";

export const useAction = routeAction$(() => ({ ok: true }));

export default component$(() => {
  const action = useAction();

  return (
    <Form action={action}>
      <button name="test" value="test">
        Submit
      </button>

      {action.value?.ok && <span id="status">Submitted</span>}
    </Form>
  );
});
