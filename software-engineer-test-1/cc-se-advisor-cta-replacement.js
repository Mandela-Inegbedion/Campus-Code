(function () {
  var recordId = "rec745762215";
  var imageSrc = "custom-images/advisors-trio.png";

  function ensureStyle() {
    if (document.getElementById("cc-se-advisor-cta-style")) return;

    var style = document.createElement("style");
    style.id = "cc-se-advisor-cta-style";
    style.textContent =
      "#" +
      recordId +
      "{display:block !important;background:#f2f1ee !important;}" +
      "#" +
      recordId +
      " .cc-se-advisor-shell{max-width:1160px;margin:0 auto;padding:0 20px 24px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-card{background:#ffe3a4;border-radius:16px;padding:36px 32px 30px;display:grid;grid-template-columns:minmax(0,1.12fr) minmax(360px,.88fr);gap:28px;align-items:start;}" +
      "#" +
      recordId +
      " .cc-se-advisor-left{padding-right:12px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-avatars{display:block;width:172px;max-width:100%;height:auto;margin-bottom:24px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-title{margin:0 0 26px;color:#1a1a1a;font:500 62px/.92 'SuisseIntl',Arial,sans-serif;letter-spacing:-1.8px;max-width:560px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-points{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px;max-width:660px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-point{color:#1a1a1a;font:500 18px/1.25 'SuisseIntl',Arial,sans-serif;}" +
      "#" +
      recordId +
      " .cc-se-advisor-point strong{display:block;font-weight:500;}" +
      "#" +
      recordId +
      " .cc-se-advisor-check{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#1a1a1a;color:#fff;font:700 14px/1 Arial,sans-serif;margin-bottom:12px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-panel{background:#fff;border-radius:12px;padding:52px 32px 54px;box-sizing:border-box;min-height:520px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-eyebrow{margin:0 0 18px;color:#5f6670;font:600 13px/1.4 'SuisseIntl',Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;}" +
      "#" +
      recordId +
      " .cc-se-advisor-panel h3{margin:0 0 26px;color:#1a1a1a;font:500 40px/.95 'SuisseIntl',Arial,sans-serif;letter-spacing:-1px;max-width:320px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-label{margin:0 0 10px;color:#5f6670;font:600 13px/1.4 'SuisseIntl',Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;}" +
      "#" +
      recordId +
      " .cc-se-advisor-links{margin-bottom:22px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-link{display:block;color:#0f2233;text-decoration:none;font:400 21px/1.45 'SuisseIntl',Arial,sans-serif;margin:0 0 2px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-button{display:inline-flex;align-items:center;justify-content:center;min-width:116px;height:48px;padding:0 18px;border-radius:14px;text-decoration:none;font:600 16px/1 'SuisseIntl',Arial,sans-serif;}" +
      "#" +
      recordId +
      " .cc-se-advisor-button.primary{background:linear-gradient(180deg,#3b3b3b 0%,#1a1a1a 85%);color:#fff;}" +
      "#" +
      recordId +
      " .cc-se-advisor-button.secondary{background:#f1eeea;color:#1a1a1a;}" +
      "#" +
      recordId +
      " .cc-se-advisor-note{grid-column:1 / -1;margin:2px 0 0;color:rgba(26,26,26,.65);font:400 13px/1.35 'SuisseIntl',Arial,sans-serif;}" +
      "@media screen and (max-width:1199px){" +
      "#" +
      recordId +
      " .cc-se-advisor-shell{padding:0 0 24px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-card{border-radius:0;padding:34px 28px 28px;grid-template-columns:1fr;}" +
      "#" +
      recordId +
      " .cc-se-advisor-left{padding-right:0;}" +
      "#" +
      recordId +
      " .cc-se-advisor-title{font-size:52px;max-width:none;}" +
      "#" +
      recordId +
      " .cc-se-advisor-panel{min-height:0;padding:36px 28px 40px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-panel h3{max-width:none;}}" +
      "@media screen and (max-width:767px){" +
      "#" +
      recordId +
      " .cc-se-advisor-shell{padding:0 0 16px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-card{padding:28px 16px 24px;border-radius:12px;gap:22px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-avatars{width:150px;margin-bottom:18px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-title{font-size:46px;line-height:.96;margin-bottom:22px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-points{grid-template-columns:1fr;gap:18px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-point{font-size:16px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-panel{padding:28px 18px 24px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-panel h3{font-size:32px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-link{font-size:17px;}" +
      "#" +
      recordId +
      " .cc-se-advisor-actions{flex-direction:column;}" +
      "#" +
      recordId +
      " .cc-se-advisor-button{width:100%;}" +
      "#" +
      recordId +
      " .cc-se-advisor-note{font-size:12px;}}";

    document.head.appendChild(style);
  }

  function hideOriginalCTAForm() {
    var original = document.getElementById("cta-form");
    if (original) {
      var wrapper = original.closest(".t-width") || original.parentElement;
      if (wrapper) {
        wrapper.style.setProperty("display", "none", "important");
      } else {
        original.style.setProperty("display", "none", "important");
      }
    }
  }

  function render() {
    var record = document.getElementById(recordId);
    if (!record) return;

    ensureStyle();
    hideOriginalCTAForm();

    record.innerHTML =
      '<div class="cc-se-advisor-shell"><section class="cc-se-advisor-card">' +
      '<div class="cc-se-advisor-left">' +
      '<img class="cc-se-advisor-avatars" src="' +
      imageSrc +
      '" alt="Code Campus advisors" loading="lazy">' +
      '<h2 class="cc-se-advisor-title">Book a call with an advisor today!</h2>' +
      '<div class="cc-se-advisor-points">' +
      '<div class="cc-se-advisor-point"><span class="cc-se-advisor-check">✓</span><strong>Guarantee:</strong>Job or 100% money back</div>' +
      '<div class="cc-se-advisor-point"><span class="cc-se-advisor-check">✓</span><strong>No IT or STEM</strong>background needed</div>' +
      '<div class="cc-se-advisor-point"><span class="cc-se-advisor-check">✓</span><strong>Flexible program</strong>with personal support</div>' +
      "</div>" +
      "</div>" +
      '<div class="cc-se-advisor-panel">' +
      '<p class="cc-se-advisor-eyebrow">Need help now?</p>' +
      "<h3>Talk to an advisor directly.</h3>" +
      '<p class="cc-se-advisor-label">Emails</p>' +
      '<div class="cc-se-advisor-links">' +
      '<a class="cc-se-advisor-link" href="mailto:info@codecampus.com.ng">info@codecampus.com.ng</a>' +
      '<a class="cc-se-advisor-link" href="mailto:enquiries@codecampus.com.ng">enquiries@codecampus.com.ng</a>' +
      "</div>" +
      '<p class="cc-se-advisor-label">Phone</p>' +
      '<div class="cc-se-advisor-links">' +
      '<a class="cc-se-advisor-link" href="tel:+2348172820839">+ (234) 817 282 0839</a>' +
      '<a class="cc-se-advisor-link" href="tel:+2348172820869">+ (234) 817 282 0869</a>' +
      "</div>" +
      '<div class="cc-se-advisor-actions">' +
      '<a class="cc-se-advisor-button primary" href="mailto:enquiries@codecampus.com.ng">Email the team</a>' +
      '<a class="cc-se-advisor-button secondary" href="tel:+2348172820839">Call now</a>' +
      "</div>" +
      "</div>" +
      '<p class="cc-se-advisor-note">Discount applies to Software Engineering, Cybersecurity Engineering, Cloud Engineering, Product Design, Project Management, Data Analytics, Artificial Intelligence (AI), Blockchain Engineering, Digital Marketing, and Product Management. Book a call before 11:59 pm PST on July 6th, 2026, to qualify for the promotion. This offer is available to new students who enroll in the upfront and monthly payment options.</p>' +
      "</section></div>";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  setTimeout(render, 300);
  setTimeout(render, 1000);
  setTimeout(render, 2200);
})();
