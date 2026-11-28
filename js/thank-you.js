(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("whatsapp-continue");
    const note = document.getElementById("whatsapp-note");
    const detailsUnavailable = new URLSearchParams(window.location.search).get("details") === "unavailable";
    let message = null;

    try {
      message = sessionStorage.getItem("elysianEnquiryMessage");
      sessionStorage.removeItem("elysianEnquiryMessage");
    } catch (error) {
      note.textContent = "Your enquiry details could not be attached. You can still continue on WhatsApp and send us a message.";
    }

    if (message) {
      link.href = "https://wa.me/" + ELYSIAN_DATA.whatsappNumber + "?text=" + encodeURIComponent(message);
    } else if (detailsUnavailable) {
      note.textContent = "Your enquiry details could not be attached. You can still continue on WhatsApp and send us a message.";
    }
  });
})();
