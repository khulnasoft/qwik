import { ContextId, useContext } from '@khulnasoft.com/qwik';
export const ID: ContextId<{ value: any }> = null!;

export function noUseSession() {
  useContext(ID);
}

// Expect error: { "messageId": "useWrongFunction" }
