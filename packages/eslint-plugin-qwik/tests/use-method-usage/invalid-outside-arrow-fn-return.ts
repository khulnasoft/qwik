import { ContextId, useContext } from '@khulnasoft.com/qwik';
export const ID: ContextId<{ value: any }> = null!;

export const noUseSession = () => {
  return useContext(ID);
};

// Expect error: { "messageId": "useWrongFunction" }
