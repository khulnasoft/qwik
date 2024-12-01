import { renderToString, type RenderOptions } from '@khulnasoft.com/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
