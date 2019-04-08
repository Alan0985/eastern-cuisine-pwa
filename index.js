if ("serviceWorker" in navigator) {
  // navigator.serviceWorker.register("https://www.sweetasnz.ml/p/serviceWorker.js")
  navigator.serviceWorker.register("serviceWorker.js").then(function() {
    console.log("SW registered");
  });
}
