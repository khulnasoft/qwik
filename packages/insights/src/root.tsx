import './global.css';
import { component$ } from '@khulnasoft.com/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@khulnasoft.com/qwik-city';
import { Insights } from '@khulnasoft.com/qwik-labs';
import { RouterHead } from './components/router-head/router-head';
export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <Insights
          publicApiKey={import.meta.env.PUBLIC_QWIK_INSIGHTS_KEY}
          postUrl="/api/v1/${publicApiKey}/post/"
        />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
