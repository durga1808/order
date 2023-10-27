/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { register } from './serviceWorkerRegistration';

// Define cache names for different types of caching.
const cacheNames = {
  precache: 'sample-cache',
  runtime: 'sample-runtime',
  apiData: 'sample-api-data', // New cache for API data
};

clientsClaim();

// Define a list of assets to be precached.
const precacheManifest = [
  { url: '/index.html', revision: '1' },
  // Add more assets to be precached here
];

precacheAndRoute(precacheManifest);

// Set up routing for the App Shell.
registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/admin/')) {
      return false;
    }
    if (url.pathname.match(/\.html$/)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL('/index.html')
);

// Customize runtime caching for API data.
registerRoute(
  ({ url }) => {
    // Customize this to match the API endpoints you want to cache.
    // Here, we are caching responses from your provided API URLs.
    return (
      url.href.startsWith(process.env.REACT_APP_APIURL_LOGS) ||
      url.href.startsWith(process.env.REACT_APP_APIURL_TRACES) ||
      url.href.startsWith(process.env.REACT_APP_APIURL_METRICS) ||
      url.href.startsWith(process.env.REACT_APP_APIURL_AUTH)
    );
  },
  new StaleWhileRevalidate({
    cacheName: cacheNames.apiData,
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

register({
  onUpdate: (registration) => {
    // Handle service worker updates here
    // For example, you can show a notification to the user to refresh the page
    // when updates are available.
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
  onSuccess: (registration) => {
    // Handle successful service worker registration here
    // For example, you can display a message indicating that the app is now available offline.
    console.log('Service worker registered successfully.');
  },
});

// Add any other custom service worker logic below.
