(function () {
  var recordId = "rec896190343";
  var checkIcon =
    "../usa-assets/software-engineer/tild3266-6137-4134-b939-656362613465__checkcirclefilled.svg";
  var heroImage =
    "../usa-assets/software-engineer/tild3837-3766-4861-a131-616663353963__frame_2087328970_1.svg";

  var items = [
    "<strong>Introduction to Software Engineering:</strong> Understand the software development life cycle and agile methodologies.",
    "<strong>Frontend Development:</strong> Learn HTML, CSS, JavaScript, and frameworks like React and Next.js for creating interactive user interfaces.",
    "<strong>Backend Development:</strong> Learn backend technologies such as Node.js, Django, and databases like SQL and NoSQL.",
    "<strong>Software Testing and Debugging:</strong> Learn testing frameworks and debugging techniques to ensure your code is bug-free.",
    "<strong>Real-World Project:</strong> Work on a capstone project that involves creating a fully functional software application.",
    "<strong>Bootcamp Advantage:</strong> This bootcamp is uniquely designed to build you into a world class software engineer with a globally recognized certificate and job placement support.",
  ];

  function ensureStyle() {
    if (document.getElementById("cc-se-ai-tools-style")) return;

    var style = document.createElement("style");
    style.id = "cc-se-ai-tools-style";
    style.textContent =
      "#" +
      recordId +
      "{display:block !important;background:#f2f1ee !important;}" +
      "#" +
      recordId +
      " .cc-se-ai-shell{max-width:1160px;margin:0 auto;padding:0 20px 80px;}" +
      "#" +
      recordId +
      " .cc-se-ai-card{background:#fff;border-radius:12px;padding:36px 34px 34px;display:grid;grid-template-columns:minmax(320px,.95fr) minmax(420px,1.05fr);column-gap:44px;row-gap:30px;align-items:start;}" +
      "#" +
      recordId +
      " .cc-se-ai-heading{margin:0;color:#1a1a1a;font:500 48px/1.02 'SuisseIntl',Arial,sans-serif;letter-spacing:-1px;}" +
      "#" +
      recordId +
      " .cc-se-ai-heading .accent{color:#f06a3a;}" +
      "#" +
      recordId +
      " .cc-se-ai-visual{align-self:end;}" +
      "#" +
      recordId +
      " .cc-se-ai-visual img{display:block;max-width:100%;height:auto;}" +
      "#" +
      recordId +
      " .cc-se-ai-copy-title{margin:0 0 18px;color:#1a1a1a;font:500 20px/1.2 'SuisseIntl',Arial,sans-serif;}" +
      "#" +
      recordId +
      " .cc-se-ai-copy{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 28px;}" +
      "#" +
      recordId +
      " .cc-se-ai-item{display:flex;align-items:flex-start;gap:10px;color:#1a1a1a;font:400 15px/1.42 'SuisseIntl',Arial,sans-serif;}" +
      "#" +
      recordId +
      " .cc-se-ai-item strong{font-weight:600;}" +
      "#" +
      recordId +
      " .cc-se-ai-check{flex:0 0 22px;width:22px;height:22px;margin-top:2px;display:block;}" +
      "#" +
      recordId +
      " .cc-se-ai-bubble{justify-self:end;max-width:280px;background:#ff976b;border-radius:12px;padding:20px 20px 18px;position:relative;color:#1a1a1a;}" +
      "#" +
      recordId +
      " .cc-se-ai-bubble:after{content:'';position:absolute;left:16px;bottom:-14px;border-width:14px 14px 0 0;border-style:solid;border-color:#ff976b transparent transparent transparent;}" +
      "#" +
      recordId +
      " .cc-se-ai-bubble p{margin:0 0 14px;font:400 15px/1.35 'SuisseIntl',Arial,sans-serif;}" +
      "#" +
      recordId +
      " .cc-se-ai-bubble .big{display:block;margin-bottom:2px;font:800 32px/1 'SuisseIntl',Arial,sans-serif;}" +
      "#" +
      recordId +
      " .cc-se-ai-bubble .small{font:500 14px/1.35 'SuisseIntl',Arial,sans-serif;}" +
      "#" +
      recordId +
      " .cc-se-ai-sources{margin-top:18px;color:rgba(0,0,0,.45);font:400 11px/1.25 'SuisseIntl',Arial,sans-serif;}" +
      "@media screen and (max-width:1199px){" +
      "#" +
      recordId +
      " .cc-se-ai-shell{padding:0 0 64px;}" +
      "#" +
      recordId +
      " .cc-se-ai-card{border-radius:0;padding:32px 28px 36px;grid-template-columns:1fr;}" +
      "#" +
      recordId +
      " .cc-se-ai-bubble{justify-self:start;}" +
      "#" +
      recordId +
      " .cc-se-ai-copy{grid-template-columns:repeat(2,minmax(0,1fr));}}" +
      "@media screen and (max-width:767px){" +
      "#" +
      recordId +
      " .cc-se-ai-shell{padding:0 0 44px;}" +
      "#" +
      recordId +
      " .cc-se-ai-card{padding:28px 20px 30px;border-radius:0;}" +
      "#" +
      recordId +
      " .cc-se-ai-heading{font-size:32px;line-height:1.05;}" +
      "#" +
      recordId +
      " .cc-se-ai-copy{grid-template-columns:1fr;gap:18px;}" +
      "#" +
      recordId +
      " .cc-se-ai-bubble{max-width:none;width:100%;box-sizing:border-box;}" +
      "#" +
      recordId +
      " .cc-se-ai-copy-title{font-size:18px;}}";

    document.head.appendChild(style);
  }

  function render() {
    var record = document.getElementById(recordId);
    if (!record) return;

    ensureStyle();
    record.style.setProperty("display", "block", "important");
    record.innerHTML =
      '<div class="cc-se-ai-shell"><div class="cc-se-ai-card">' +
      '<h2 class="cc-se-ai-heading"><span class="accent">Learn AI tools</span> used by 76%* of software engineers while mastering the core skills to do the job</h2>' +
      '<aside class="cc-se-ai-bubble"><p>Software fundamentals and AI experience make you more valuable and job-market ready.</p><span class="big">78%</span><div class="small">of organizations already use AI**</div></aside>' +
      '<div class="cc-se-ai-visual"><img src="' +
      heroImage +
      '" alt="" loading="lazy"></div>' +
      '<div><p class="cc-se-ai-copy-title">Course Structure:</p><div class="cc-se-ai-copy">' +
      items
        .map(function (item) {
          return (
            '<div class="cc-se-ai-item"><img class="cc-se-ai-check" src="' +
            checkIcon +
            '" alt=""><div>' +
            item +
            "</div></div>"
          );
        })
        .join("") +
      '</div><div class="cc-se-ai-sources">*Source: Developer Survey 2024&nbsp;&nbsp;&nbsp;&nbsp;**Source: Stanford HAI</div></div>' +
      "</div></div>";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  setTimeout(render, 300);
  setTimeout(render, 1000);
  setTimeout(render, 2200);
  setTimeout(render, 3500);
})();
