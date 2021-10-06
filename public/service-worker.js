importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

// Cache page navigations (html) with a Network First strategy
workbox.routing.registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new workbox.strategies.NetworkFirst(),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
workbox.routing.registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new workbox.strategies.StaleWhileRevalidate(),
);
// Ensure your build step is configured to include /offline.html as part of your precache manifest.
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);


// // Catch routing errors, like if the user is offline
// worbox.routing.setCatchHandler(async ({ event }) => {
//   // Return the precached offline page if a document is being requested
//   if (event.request.destination === 'document') {
//     return workbox.precaching.matchPrecache('/offline.html');
//   }

//   return Response.error();
// });

// // Cache images with a Cache First strategy
// registerRoute(
//   // Check to see if the request's destination is style for an image
//   ({ request }) => request.destination === 'image',
//   // Use a Cache First caching strategy
//   new CacheFirst({
//     // Put all cached files in a cache named 'images'
//     cacheName: 'images',
//     plugins: [
//       // Ensure that only requests that result in a 200 status are cached
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//       // Don't cache more than 50 items, and expire them after 30 days
//       new ExpirationPlugin({
//         maxEntries: 50,
//         maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
//       }),
//     ],
//   }),
// );