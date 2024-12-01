/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope;

import { setupServiceWorker } from '@khulnasoft.com/qwik-city/service-worker';

setupServiceWorker();

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (ev) => ev.waitUntil(self.clients.claim()));
