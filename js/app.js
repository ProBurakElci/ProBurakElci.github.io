/*
 * The only script on the page.
 *
 * It does one thing: if somebody arrives from a video with ?go=reflex in the
 * link, send them straight there. A short video has no room for a full URL, so
 * the bio link carries a tag instead and this page does the routing.
 *
 * No analytics, no beacons, nothing recorded - the page has no server to
 * record anything with.
 */
(function () {
  "use strict";

  const DESTINATIONS = {
    life: "https://proburakelci.github.io/lifecard/",
    lifecard: "https://proburakelci.github.io/lifecard/",
    weeks: "https://proburakelci.github.io/lifecard/",
    code: "https://proburakelci.github.io/codepad/",
    codepad: "https://proburakelci.github.io/codepad/",
    editor: "https://proburakelci.github.io/codepad/",
    reflex: "https://proburakelci.github.io/reflex/",
    fast: "https://proburakelci.github.io/reflex/",
    name: "https://proburakelci.github.io/namestamp/",
    namestamp: "https://proburakelci.github.io/namestamp/",
    algo: "https://proburakelci.github.io/algovizor/",
    algovizor: "https://proburakelci.github.io/algovizor/",
    desktop: "https://github.com/ProBurakElci/codepad-desktop",
    "codepad-desktop": "https://github.com/ProBurakElci/codepad-desktop",
    android: "https://github.com/ProBurakElci/codepad-android",
    phone: "https://github.com/ProBurakElci/codepad-android",
    "codepad-android": "https://github.com/ProBurakElci/codepad-android",
    commitguard: "https://github.com/ProBurakElci/commitguard",
    reclaim: "https://github.com/ProBurakElci/reclaim",
    gitwrapped: "https://github.com/ProBurakElci/gitwrapped",
    github: "https://github.com/ProBurakElci",
  };

  const target = new URLSearchParams(location.search).get("go");
  if (!target) return;

  const destination = DESTINATIONS[target.toLowerCase().trim()];
  if (!destination) return;

  // replace(), not assign(): back should return to wherever they came from,
  // not bounce them forward again.
  location.replace(destination);
})();
