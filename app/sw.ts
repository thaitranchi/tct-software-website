import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

// This declares the value of `injectionPoint` to the type checker.
// `injectionPoint` is the string that Serwist will replace with the
// precache manifest.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[];
  }
}

declare const self: WorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: [
    ...self.__SW_MANIFEST,
    { url: "/offline", revision: "v1" }, // Manually precache the offline page for v9
  ],
  runtimeCaching: defaultCache, // Use default caching strategies provided by Serwist
  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
  // You can add custom runtime caching rules here if needed.
  // For example, to cache Google Fonts:
  // runtimeCaching: [
  //   {
  //     urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
  //     handler: 'CacheFirst',
  //     options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
  //   },
  // ],
});

serwist.addEventListeners();