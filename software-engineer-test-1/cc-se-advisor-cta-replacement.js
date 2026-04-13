(function () {
  var noteText =
    "Discount applies to Software Engineering, Cybersecurity Engineering, Cloud Engineering, Product Design, Project Management, Data Analytics, Artificial Intelligence (AI), Blockchain Engineering, Digital Marketing, and Product Management. Book a call before 11:59 pm PST on July 6th, 2026, to qualify for the promotion. This offer is available to new students who enroll in the upfront and monthly payment options.";

  function ensureStyle() {
    if (document.getElementById("cc-se-advisor-cta-style")) return;

    var style = document.createElement("style");
    style.id = "cc-se-advisor-cta-style";
    style.textContent =
      "#cta-form .discount-span," +
      "#cta-form .discount-span__decoration{" +
      "display:none !important;}" +
      "#cta-form .cta-form__text-info{" +
      "white-space:normal !important;}";

    document.head.appendChild(style);
  }

  function updateMountedCTA() {
    var root = document.querySelector("#cta-form .cta-form");
    if (!root) return false;

    var note = root.querySelector(".cta-form__text-info");
    if (note) {
      note.textContent = noteText;
    }

    return true;
  }

  function run() {
    ensureStyle();
    updateMountedCTA();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  [200, 800, 1600, 3000].forEach(function (delay) {
    window.setTimeout(run, delay);
  });
})();
