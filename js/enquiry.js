(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiry-form");
    if (!form) return;
    const status = document.getElementById("form-status");
    const rules = {
      name: (v) => v.trim().length >= 2 || "Please enter your full name.",
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
      phone: (v) => /^\+?[0-9\s\-()]{7,20}$/.test(v.trim()) || "Please enter a valid phone number.",
      interest: (v) => v !== "" || "Please choose an interest category.",
      message: (v) => v.trim().length >= 10 || "Please write a short message (at least 10 characters)."
    };
    const check = (f) => {
      const r = rules[f.name](f.value), err = f.parentElement.querySelector(".err");
      err.textContent = r === true ? "" : r;
      f.setAttribute("aria-invalid", String(r !== true));
      return r === true;
    };
    Array.from(form.elements).filter((f) => rules[f.name]).forEach((f) => f.addEventListener("blur", () => check(f)));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = Array.from(form.elements).filter((f) => rules[f.name]);
      const ok = fields.map(check).every(Boolean);
      if (!ok) { status.textContent = "Please correct the highlighted fields."; fields.find((f) => f.getAttribute("aria-invalid") === "true").focus(); return; }
      const v = Object.fromEntries(fields.map((f) => [f.name, f.value.trim()]));
      const msg = ["Hello Elysian Farms & Resort,", "", "Name: " + v.name, "Email: " + v.email, "Phone: " + v.phone,
        "Interest: " + v.interest, "", "Message: " + v.message].join("\n");
      status.textContent = "Opening WhatsApp with your prepared message. Please press Send there to deliver it. Nothing has been sent to a server.";
      window.open(window.ElysianWA(msg), "_blank", "noopener");
    });
  });
})();
