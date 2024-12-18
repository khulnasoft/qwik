import { component$ } from "@khulnasoft.com/qwik";
import { type BsComponentProps } from "~/models/bootstrap";

export const Alert = component$<BsComponentProps>(({ text, colorVariant }) => (
  <div class={`alert alert-${colorVariant}`} role="alert">
    {text || `A simple ${colorVariant} alert—check it out!`}
  </div>
));
