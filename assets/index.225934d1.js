import "https://unpkg.com/phosphor-icons@1.4.0";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const n of o.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && i(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = s(e);
    fetch(e.href, o);
  }
})();
window.onload = () => {
  const t = document.querySelector(".loader");
  (t.style.animation = "fade-out 1s forwards ease-in-out"),
    setTimeout(() => {
      t.style.display = "none";
    }, 1e3);
};
