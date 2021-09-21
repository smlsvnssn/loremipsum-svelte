const
    currentCache = "V5",

    files = [
        './index.html',
        './style.css',
        './build/bundle.js',
    ],

    cacheOnInstall = async e => {
        const cache = await caches.open(currentCache);
        cache.addAll(files);
    },

    flushOldCaches = async e => {
        for (const name of await caches.keys())
            name !== currentCache && caches.delete(name);
    },

    getResponse = async request => {
        try {
            const cachedResponse = await caches.match(request);

            if (cachedResponse)
                return cachedResponse;

            const netResponse = await fetch(request),
                cache = await caches.open(currentCache);

            cache.put(request, netResponse.clone());

            return netResponse;

        } catch (err) {
            console.warn(err)
        }
    };

self.addEventListener('install', cacheOnInstall);

self.addEventListener('activate', flushOldCaches);

self.addEventListener('fetch', e => e.respondWith(getResponse(e.request)));

