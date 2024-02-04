'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ae4c83ad432f7717552e491d738cda4e",
"index.html": "f50637662151a505041dc0f979e734d7",
"/": "f50637662151a505041dc0f979e734d7",
"main.dart.js": "55bad9824bd4784da793e6f9aae7ef97",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "57464cd83015301f22d2c76ff7c4586a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66ef5871c3b4421f9abcd213f254ae18",
".git/ORIG_HEAD": "25d5a7bdafffeab54d175e2dc87403cd",
".git/config": "c0976ad8c6a471010d5f50ece96a9345",
".git/objects/95/b97d44d8394bf03c7e2f4f2939640c5a7f46d5": "6e24c8692527de39f5886785467fdc70",
".git/objects/95/6b373a7d0d2efcbb32a5a3245db88e87440984": "cb39bee6e1bf079f14669da4666c62ae",
".git/objects/68/04c7e842bedb7a44e59adc98592cb65b1ff0a0": "8093f06b8b0b6960583c421de9d0be56",
".git/objects/57/8eb98e5b81c4d85bdb626855166869b51b06b8": "4065b44f04adb5f8c69e2e815f6b0d2a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/8ce9c232144a2130cdc62138dbbfdc2b650825": "bbf20a440f0424ebbc2b606afc306ba9",
".git/objects/6a/efa8c0ac2c39b18d5795e2ad3e8a8b80663600": "dad9380ccb3309686c00a37b5aef0c7d",
".git/objects/35/1c84d4f5ee77308e06bef35f112e484d8d7241": "ec21537e101160a526b35b4f869470fd",
".git/objects/69/cb546f469db72f966dba80554d1c15738533c8": "a2f7effb331dfeac828665794564b194",
".git/objects/51/b7daa415eafd619ea0287285e777c4ca128514": "775b8784adece70dd528fdc9ed06be43",
".git/objects/67/d8861a98bc4f38929420cf7f30bad52b296439": "2b97d52fcbeba73ccd94948856c8ff13",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/f000da538a3d91f60e511ab6a619dfe43e34bc": "2040c05af0d2a1be9e213f50d66a69e7",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/1634b871462645c87cda31a09b49b5d1b14abc": "ae39a964f7e5b746b91ba85a83730fa4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/064cd1ac19b3a82f1329735d5744524983e3da": "f79042e8d3c67c0c064e63355fc49563",
".git/objects/c9/46bceda590247291d01065d98ca8a7d8d88a84": "05f661bb59e7f07ac22f4ea56030c956",
".git/objects/cf/02332a8bcb81cf5d72a8febdf9bf148a925a8d": "4e4c300acfb7fa7a95f0d56be116daf0",
".git/objects/ca/27a36bd543741911040f529345f32e728a67cd": "0f62bbe10e9e65943289db39981383bb",
".git/objects/e4/29d5642a2d5abd4d811b5bfc90368b965443ab": "e4d4793ef3e1bb25214ad466e093ff95",
".git/objects/e4/afb2dddc7cca2221ac3a4ceee1010d717827b5": "93c9ed8369699854f6fc2131162b4068",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/b915b767871b3892fce81fde602e484197d131": "75f6cd9c9c988c34a94e147f15f15e9e",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/1f/e3d2321c93b9f4b0105d19b68a72cb95ef30ff": "8e392b8ab63db0a87e4587d457f4bde0",
".git/objects/73/649a4050c831ae6f3ed248053d5dde1e68041d": "d2603fc072994b93c86c1500387145c3",
".git/objects/8f/184a435ab0b6b65751d12620288e082fd8170f": "8a12d59a17e811c25a5ae1b6320d0c1d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/81/bb8d009c68477cd9eaad1a9011a09c49c6c411": "a6963d9d758a61a1603ff05ad6649a84",
".git/objects/72/2dbd8729ca8ca2cac43b92e11b24b81e0685fa": "a2ab2d1d1ecae20421dbeaacb49846d9",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2abfcc5a444de04fff3b3c946e86364e7c4247": "8a6ebd8bdcd381e430b0583b7a266b2d",
".git/objects/07/e4b7991c5c409974032dd32e1f0768abc32643": "e632909ec019de0d3787f7e6387a29fd",
".git/objects/38/a67f5a0e26b9fa142520c39b7f567363bc27b0": "005d7d87fcad264ab22724904262778e",
".git/objects/6e/86175c7300416060dbac13de8e5332259dc4af": "45106d19b05deef34578345bd10ece15",
".git/objects/36/3061295b7f034331d976dc0eeff96082529627": "d6eb56492533e58c1fede19d1800e8c5",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/3716607ffb3cb00b13d1b26d87023840701e97": "892446c55eb2be1e0712ab7d8c98c46e",
".git/objects/65/ae90c4009873c4611c927591978145d5c8671e": "d268827be4af3f75572a3f06e548f17d",
".git/objects/62/e8c4ab73bd0ee843fefd7793eae4e7b9b00f51": "d868ab864eebf2c73cf277498e6c6ffd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/cea1c846bbc95819a8adb25777a46ddf0dbb7b": "25c9ec42785b3b405bf1a015cfe03ebb",
".git/objects/37/9a46bc313ac373e457128bfef49bbe5c6f6dd7": "2e221b57fe3a8136a79400a33ab013d9",
".git/objects/6d/a5666a0ba346699e61d341e170ccf3094d656e": "4352f5467068ee4e16f7d8110afd26d3",
".git/objects/01/86b48adb5995102cec8f510da2979ad2bdbd4a": "5a1c0eeaf2541fb9d1d265ccf702b7da",
".git/objects/06/465b68147bb3ad18dcb06602f5a7c93260ad11": "1680d2c978bd8c2f94a872143096d622",
".git/objects/6c/2b8e45649da21d78746f553906935b8b5f1115": "309d9fbe0b8afe7ace09cdb8879feb02",
".git/objects/6c/79e6674fbf020582d643f23552313909eef9a4": "76abc98b936b8a92a1de8b7504792dbd",
".git/objects/97/45cb5ef14e88469914725857eb10b9aee75746": "d1504821f37b906ae4092afa11132828",
".git/objects/bf/06406e206780ba23377c97675cfa0fb61b9982": "7f898e40f0d8f1c604ca5651ece88a8d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dd/e4ed985dd6dcf522388a9663c5cd301a6721a7": "60029b1a4151bd1fecbc46e4bbe23520",
".git/objects/dc/16d1300f2beae5e8dc3d498481f5e170f33a69": "2897f5bc18351724417f9eb91db124df",
".git/objects/a9/bceb2cbc5b0ff93980e681b8ccbadd91c4e397": "b46a6c919aa0e8812683b61f1cf3d174",
".git/objects/af/ce15f0c5baad877f2329175b9cefac10de6712": "317df3f56ef2d5d34def869ac0cf7123",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/f7e3796c021bae5f15a22b3bc4538429f88b50": "49da2932cae71c2d29c86461c48184c1",
".git/objects/a6/7cfa395a418e57e7b63087eda87a913ef2e347": "f956a63b50b283f8f2e075b9a50010f9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/8ac0f46762ed1f670f0b82db9447c698214daa": "05a9b922009f831ade2f512f08bf105e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/00ebd4b38298fc58c86ba14179f9e741610d74": "886223b2ee5c9ede924f53f4d2ded62f",
".git/objects/fa/ce08d9235e28df359f4ad790e7c3de62ecd5f8": "56d6af15bc920fdf4f2b25505e716970",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/f6/8e78c5c9ba4991406a3e6875fd27060b6c3f92": "8f63d92bb5654d60605df894ae94ff5e",
".git/objects/e9/272e54eb720bec06bc222e996b04f10f9764f5": "46a8753e4bf39eacafd58e52670b2d20",
".git/objects/f8/90e634fcb7ca688f89b2d97652723c1cb320f8": "e42f26307ff2e094ecf69269d6c8bf46",
".git/objects/e0/29486438e4cf7205615c8279c1503ecdd8061d": "59061ce4de5db854c04ce0a79daefff9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/8e90cabbcfe77f5cb6669609213a4769358de4": "f5fc88aa5cbdd99bacaabfbc20c081d7",
".git/objects/41/f8517a75b1320d3c742aff7179f49648ff6aa0": "877f05a3f2d1111c34e362fe0837304e",
".git/objects/41/15387938219045b270f306a14e049f4c42e220": "bb8ad720ecd3325a3407293a6c0cfb6c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/1bd47a39d3f86df670750815e46fef3efca857": "43c116790a5a1d59f554b95eea1d3548",
".git/objects/84/c2cbeee134b513184f34227248108c942aec5e": "5463f1133840074a2656253c312491a8",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/76/284e0e6a861c4fe258cbedfc8519ba1250338c": "e3ebf858ae0cebdb8987eec6462c3bde",
".git/objects/40/28884e787a4fe0050a0a7fb1b742346a3b0791": "499498d8d7ad036be913f692619c54f3",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/a9c9b2b711f47dd1202a6d8682d50dcb58de4c": "74a142180e519533e48a1922a7b187ce",
".git/objects/22/7dd4debd667c000d3e6d151e17a0e316ded606": "2739da555e1ad466a96b331da0f637b5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb7084426af18a7ab4d5de23adebeac5",
".git/logs/refs/heads/main": "bfec76b10eb11863dd0deca8286909ed",
".git/logs/refs/remotes/origin/main": "ba78df2b9c0e14bdcc2d9d2ff55e6763",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1f50a48739316df20b812966e1a3f564",
".git/refs/remotes/origin/main": "1f50a48739316df20b812966e1a3f564",
".git/index": "90e6eaecb17a0064e2ea000bd7c26cae",
".git/COMMIT_EDITMSG": "5bce9035410c2bfc19051458a993ebeb",
".git/FETCH_HEAD": "e8234e5715e3a7964ca542726bcde23f",
"assets/AssetManifest.json": "a891586663fcf62a3a31f13300fbd7a8",
"assets/NOTICES": "7861d1c8d89b2e92d922d4b525d2afe6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a6d2d80d97b1844d6f7797a2365aa3ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f47c0bc1dddbbbf130758dde19b4dd8d",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/us-en.txt": "a8b3b051de415fcff138383cb6e7838a",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
