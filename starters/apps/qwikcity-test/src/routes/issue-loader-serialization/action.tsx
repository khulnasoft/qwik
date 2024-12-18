import { component$ } from "@khulnasoft.com/qwik";
import { Form, globalAction$ } from "@khulnasoft.com/qwik-city";

export const useOtherAction = globalAction$(() => {
  return {
    secret: "this is the secret",
    date: new Date(),
  };
});

export default component$(() => {
  const other = useOtherAction();
  return (
    <div>
      <Form action={other}>
        <button id="submit">Submit</button>
      </Form>
    </div>
  );
});
