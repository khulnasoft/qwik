import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@khulnasoft.com/qwik";

export type SomeContextType = {
  value: string;
};

export const SomeContext = createContextId<SomeContextType>("some-context");
export const SomeProvider = component$(() => {
  const contextStore = useStore({ value: "__CONTEXT_VALUE__" });
  useContextProvider(SomeContext, contextStore);
  return <Slot />;
});
