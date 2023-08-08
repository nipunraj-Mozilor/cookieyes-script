var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    const footerElements = document.getElementsByTagName("footer");
    const footer = footerElements[0];
    var cky_div = document.createElement("div");
    cky_div.className = "button-container";
    var cky_a = document.createElement("a");
    cky_a.className = "button-link cky-banner-element";
    cky_a.href = href = "#";
    cky_a.textContent = "Change Cookie Preferences";
    cky_div.appendChild(cky_a);
    footer.insertAdjacentElement("afterend", cky_div);
  });
});
function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  if (element) return callback();
  checktimeout++;
  if (checktimeout < 120) {
    setTimeout(function () {
      waitForElement(selector, callback);
    }, 500);
  }
}
//
var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-btn-do-not-sell", function () {
    const footerElements = document.getElementsByTagName("footer");
    const footer = footerElements[0];
    var cky_div = document.createElement("div");
    cky_div.className = "button-container";
    var cky_a = document.createElement("a");
    cky_a.className = "button-link";
    cky_a.href = "javascript:void(0)";
    cky_a.setAttribute("onclick", "revisitCkyConsent()");
    cky_a.textContent = "Do Not Sell or Share My Personal Information";
    cky_div.appendChild(cky_a);
    footer.insertAdjacentElement("afterend", cky_div);
  });
});
function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  if (element) return callback();
  checktimeout++;
  if (checktimeout < 120) {
    setTimeout(function () {
      waitForElement(selector, callback);
    }, 500);
  }
}
//
