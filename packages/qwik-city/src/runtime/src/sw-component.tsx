import { jsx } from '@khulnasoft.com/qwik';
import swRegister from '@qwik-city-sw-register';

/** @public */
export const ServiceWorkerRegister = (props: { nonce?: string }) =>
  jsx('script', { dangerouslySetInnerHTML: swRegister, nonce: props.nonce });
