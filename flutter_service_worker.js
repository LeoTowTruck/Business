'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0671c47ada0095c6c21bd88da42508d4",
"version.json": "b458e9a5e3e9e6e6809a657b7954de72",
"splash/img/light-2x.png": "90370e74b7a799cc72ebaabfc80015f5",
"splash/img/dark-4x.png": "905296d1567884219480ffec76c49da0",
"splash/img/light-3x.png": "dd4ef62b5ce454f1fac81f3744fd055b",
"splash/img/dark-3x.png": "dd4ef62b5ce454f1fac81f3744fd055b",
"splash/img/light-4x.png": "905296d1567884219480ffec76c49da0",
"splash/img/dark-2x.png": "90370e74b7a799cc72ebaabfc80015f5",
"splash/img/dark-1x.png": "20e39a6042da0ad1d3c16eef4b355ed4",
"splash/img/light-1x.png": "20e39a6042da0ad1d3c16eef4b355ed4",
"index.html": "283f9892d8d881b743fe3ee35bc51387",
"/": "283f9892d8d881b743fe3ee35bc51387",
"main.dart.js": "f9eda43ecc83374da28b7d44b2bf40a2",
"worker.js": "e6a9ebff5491829357acdb93774888b7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "3ab8571fde5041d72ff0c61c1b06ee0e",
"icons/Icon-192.png": "a96281f55ea1fde92a56e45a59b0b667",
"icons/Icon-maskable-192.png": "a96281f55ea1fde92a56e45a59b0b667",
"icons/Icon-maskable-512.png": "129c2db9452d75583753c9a5b6f6bd9e",
"icons/Icon-512.png": "129c2db9452d75583753c9a5b6f6bd9e",
"manifest.json": "28f54721d6a897995cba0704a6826a54",
"assets/AssetManifest.json": "fded1eae84449722ae8cc52b28f76ad9",
"assets/NOTICES": "9946e2d5613d09f8ea538dc3321aeb11",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "67469fc13bf85e4e634263bd34949ec6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d13f2f9b64ed1da0e49f176e5aebcf60",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "427e96487fd68170778e53b909658802",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "deb103b5a20f3319f6e92ddafba899db",
"assets/fonts/MaterialIcons-Regular.otf": "8f01451b53004ad8c4d14a01ecdded88",
"assets/assets/images/logo_foreground.png": "061bb051ca66e1b48cc7ddcf158672a0",
"assets/assets/images/logo_business.png": "2582f24addfe2878378297dffb0013a6",
"assets/assets/images/logo.png": "d53e72c478d73dc1a715647bb491041a",
"assets/assets/images/tow.png": "b4c35509778d60b6e553f195b68f6ea0",
"assets/assets/images/relocation.png": "6fb2fa0bbb31ee733957d91616a9e8f9",
"assets/assets/images/crane.png": "5d7e5f864ca4072003c45ad284c6d044",
"assets/assets/images/truck.png": "ed739718e291286ce2421dce6dee0ef7",
"assets/assets/images/logo_business_foreground.png": "9a0454ea5064892281c827551c2e6766",
"assets/assets/images/excavator.png": "f5a6f4d11f5fd8bcc696a9afa34fe7d6",
"assets/assets/sounds/message.wav": "7a3389aa036b9739d6a74dcba348c76e",
"assets/assets/icons/find.png": "1cff0e1518798e943149dab2d8d14f8b",
"assets/assets/icons/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/icons/man.png": "11a2fb83a7cbbf9e77c88bf303230852",
"assets/assets/icons/gpsRed.png": "08dc00a066dff67a037b46e76bd12625",
"assets/assets/icons/gpsGreen.png": "d176315590f7a7cd4ffd683e004d11cc",
"assets/assets/icons/google.png": "5305ab182caeb619650da7e39019d8d1",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
