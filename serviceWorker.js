self.addEventListener("install", function(event) {
  console.log("SW Installed");
  event.waitUntil(
    caches.open("static").then(function(cache) {
      return cache.addAll([
        "https://www.sweetasnz.ml/ec/",

        "https://www.sweetasnz.ml/ec/css/cart.css",
        "https://www.sweetasnz.ml/ec/css/index.css",
        "https://www.sweetasnz.ml/ec/css/menu.css",
        "https://www.sweetasnz.ml/ec/css/orderSent.css",

        "https://www.sweetasnz.ml/ec/js/cart.js",
        "https://www.sweetasnz.ml/ec/js/menu.js",
        "https://www.sweetasnz.ml/ec/js/navbarModal.js",
        "https://www.sweetasnz.ml/ec/js/navbarModal2.js",

        "https://www.sweetasnz.ml/ec/json/dineInMenu.json",
        "https://www.sweetasnz.ml/ec/json/pickUpMenu.json",

        "https://www.sweetasnz.ml/ec/cart.html",
        "https://www.sweetasnz.ml/ec/index.html",
        "https://www.sweetasnz.ml/ec/index.js",
        "https://www.sweetasnz.ml/ec/manifest.json",
        "https://www.sweetasnz.ml/ec/menu.html",
        "https://www.sweetasnz.ml/ec/orderSent.html",
        "https://www.sweetasnz.ml/ec/serviceWorker.js",

        "https://www.sweetasnz.ml/ec/img/300/a1_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/a2_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/a3_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/a5_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/a6_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/a7_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/a8_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/a11_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/b1_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/b5_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/b6_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/b7_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/c2_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/c4_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/c7_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/c8_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/c9_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/d1_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/d5_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/d6_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/d7_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/f9_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/p2_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/p6_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/p7_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/p8_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/so1_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/so2_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/so3_300.jpg",
        "https://www.sweetasnz.ml/ec/img/300/so4_300.jpg",

        "https://www.sweetasnz.ml/ec/img/768/a1_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/a2_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/a3_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/a5_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/a6_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/a7_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/a8_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/a11_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/b1_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/b5_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/b6_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/b7_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/c2_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/c4_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/c7_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/c8_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/c9_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/d1_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/d5_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/d6_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/d7_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/f9_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/p2_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/p6_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/p7_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/p8_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/slide1_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/slide2_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/slide3_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/so1_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/so2_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/so3_768.jpg",
        "https://www.sweetasnz.ml/ec/img/768/so4_768.jpg",

        "https://www.sweetasnz.ml/ec/img/1200/a1_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/a2_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/a3_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/b5_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/d5_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/p6_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/slide1_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/slide2_1200.jpg",
        "https://www.sweetasnz.ml/ec/img/1200/slide3_1200.jpg",

        "https://www.sweetasnz.ml/ec/img/1800/a1_1800.jpg",
        "https://www.sweetasnz.ml/ec/img/1800/a3_1800.jpg",
        "https://www.sweetasnz.ml/ec/img/1800/b5_1800.jpg",
        "https://www.sweetasnz.ml/ec/img/1800/d5_1800.jpg",
        "https://www.sweetasnz.ml/ec/img/1800/p6_1800.jpg",
        "https://www.sweetasnz.ml/ec/img/1800/slide1_1800.jpg",
        "https://www.sweetasnz.ml/ec/img/1800/slide2_1800.jpg",
        "https://www.sweetasnz.ml/ec/img/1800/slide3_1800.jpg",

        "https://use.fontawesome.com/releases/v5.4.2/css/all.css",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
      ]);
    })
  );
});

self.addEventListener("activate", function() {
  console.log("SW Activated");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if (res) {
        return res;
      } else if (
        event.request.cache === "only-if-cached" &&
        event.request.mode !== "same-origin"
      ) {
        return;
      } else {
        return fetch(event.request);
      }
    })
  );
});
