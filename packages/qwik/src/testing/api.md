## API Report File for "@khulnasoft.com/qwik"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { JSXOutput } from '@khulnasoft.com/qwik';
import { RenderResult } from '@khulnasoft.com/qwik';

// @public
export const createDOM: ({ html }?: {
    html?: string;
}) => Promise<{
    render: (jsxElement: JSXOutput) => Promise<RenderResult>;
    screen: HTMLElement;
    userEvent: (queryOrElement: string | Element | keyof HTMLElementTagNameMap | null, eventNameCamel: string | keyof WindowEventMap, eventPayload?: any) => Promise<void>;
}>;

// (No @packageDocumentation comment for this package)

```
