import { QWIK_REPL_DEPS_CACHE, QWIK_REPL_RESULT_CACHE } from './repl-constants';
import { receiveMessageFromMain } from './repl-messenger';
import { requestHandler } from './repl-request-handler';

self.onmessage = receiveMessageFromMain;

self.onfetch = requestHandler;

self.oninstall = (ev) => {
  self.skipWaiting();
  ev.waitUntil(
    Promise.all([caches.open(QWIK_REPL_DEPS_CACHE), caches.open(QWIK_REPL_RESULT_CACHE)])
  );
};

self.onactivate = () => self.clients.claim();

export interface ReplGlobalApi {
  qwikBuild?: typeof import('@khulnasoft.com/qwik/build');
  qwikCore?: typeof import('@khulnasoft.com/qwik');
  qwikOptimizer?: typeof import('@khulnasoft.com/qwik/optimizer');
  qwikServer?: typeof import('@khulnasoft.com/qwik/server');
  prettier?: typeof import('prettier');
  prettierPlugins?: any;
  rollup?: typeof import('rollup');
  Terser?: typeof import('terser');
  rollupCache?: any;
}

export interface QwikWorkerGlobal extends ReplGlobalApi {
  onmessage: (ev: MessageEvent) => void;
  onfetch: (ev: FetchEvent) => void;
  oninstall: (ev: ExtendableEvent) => void;
  onactivate: () => void;
  skipWaiting: () => void;
  clients: {
    claim: () => void;
  };
}

declare const self: QwikWorkerGlobal;
