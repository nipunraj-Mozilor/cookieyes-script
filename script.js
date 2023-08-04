window.addEventListener("load", function () {
  waitForElement(".cky-consent-container");
});
let bannerLoaded = false;
function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  if (element) {
    const display = getDisplayStyle(element);
    element.addEventListener("cookieyes_banner_show", function (event) {
      if (bannerLoaded) return;
      if (display !== "none") {
        // perform desired action.
      }
      bannerLoaded = true;
    });
    element.dispatchEvent(new CustomEvent("cookieyes_banner_show"));
  }
  setTimeout(() => {
    waitForElement(selector, callback);
  }, 200);
}

function getDisplayStyle(element) {
  return element.currentStyle
    ? element.currentStyle["display"]
    : window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue("display")
    : "";
}
