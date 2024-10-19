import { createRoot } from 'react-dom/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import Application from './app/Application';

const rootElement = document.getElementById('root');

if (rootElement) {
  const cache = createCache({ key: 'css', nonce: 'dev' });
  createRoot(rootElement).render(
    <CacheProvider value={cache}>
      <HelmetProvider>
        <Application />
      </HelmetProvider>
    </CacheProvider>,
  );
}
