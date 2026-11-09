(function () {
  "use strict";
  const D = ELYSIAN_DATA;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const naira = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });

  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), D);

  function populatePrices() {
    $$("[data-price]").forEach((el) => {
      const v = get("prices." + el.dataset.price);
      if (typeof v === "number") { el.textContent = naira.format(v); el.classList.remove("is-placeholder"); }
      else { el.textContent = "₦ Price to be announced"; el.classList.add("is-placeholder"); }
    });
  }

  function populatePayment() {
    const rows = { deposit: "Initial deposit", instalmentFrequency: "Instalment frequency", duration: "Payment duration", finalPaymentDeadline: "Final payment deadline" };
    const list = $("#payment-details");
    if (!list) return;
    const filled = Object.keys(rows).filter((k) => D.payment[k]);
    $("#payment-fallback").hidden = filled.length > 0;
    list.hidden = filled.length === 0;
    list.innerHTML = "";
    filled.forEach((k) => {
      const li = document.createElement("li");
      const b = document.createElement("strong"); b.textContent = rows[k];
      li.append(b, " " + D.payment[k]);
      list.appendChild(li);
    });
    $("#payment-outright").hidden = !D.payment.outright;
  }

  function waLink(msg) { return "https://wa.me/" + D.whatsappNumber + "?text=" + encodeURIComponent(msg); }
  window.ElysianWA = waLink; // shared with enquiry.js

  function populateWhatsApp() {
    $$("[data-wa]").forEach((a) => {
      a.href = waLink(D.messages[a.dataset.wa] || D.messages.general);
      a.target = "_blank"; a.rel = "noopener noreferrer";
    });
  }

  function nav() {
    const header = $(".site-header"), toggle = $(".nav-toggle"), menu = $("#menu");
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
      $(".to-top").classList.toggle("show", window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", menu).forEach((a) => a.addEventListener("click", () => { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
    $(".to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    const links = $$("#menu a[href^='#']");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((l) => { const s = $(l.getAttribute("href")); if (s) io.observe(s); });
  }

  function reveal() {
    const items = $$(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-clip, .reveal-stagger")
      .filter((item) => !item.parentElement.closest(".reveal-stagger"));
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) { items.forEach((i) => i.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("in", e.isIntersecting)), { threshold: 0.12 });
    items.forEach((i) => io.observe(i));
  }

  document.addEventListener("DOMContentLoaded", () => {
    populatePrices(); populatePayment(); populateWhatsApp(); nav(); reveal();
    $("#year").textContent = new Date().getFullYear();
  });
})();
