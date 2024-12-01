import { createQwikCity } from '@khulnasoft.com/qwik-city/middleware/cloudflare-pages';
import qwikCityPlan from '@qwik-city-plan';
import render from './entry.ssr';

const fetch = createQwikCity({ render, qwikCityPlan });

export { fetch };
