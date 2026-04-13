(function () {
  var green = '#118847';
  var lightGreen = '#dff1e6';

  function applyGuaranteeGreen() {
    var styleId = 'cc-se-money-back-green-style';
    if (document.getElementById(styleId)) {
      return;
    }

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent =
      '#rec737435324 .tn-elem[data-elem-id="1713530292464"] .tn-atom{background-color:' +
      lightGreen +
      ' !important;box-shadow:0 16px 25px 0 rgba(17,136,71,0.18) !important;}' +
      '#rec737435324 .tn-elem[data-elem-id="1713530292467"]{display:none !important;}' +
      '#rec737435324 .tn-elem[data-elem-id="1713531262372"] img{filter:hue-rotate(82deg) saturate(1.8) brightness(0.92) !important;}' +
      '#rec737435324 .tn-elem[data-elem-id="1713352125954"]{display:none !important;}' +
      '#rec737435324 .tn-elem[data-elem-id="1713530782554"]{display:none !important;}' +
      '#rec737435324 .tn-elem[data-elem-id="1713351775793"] .tn-atom{position:relative !important;overflow:visible !important;}' +
      '#rec737435324 .tn-elem[data-elem-id="1713351775793"] .tn-atom:before{content:"";position:absolute;left:0;top:-6px;width:716px;height:102px;background:' +
      green +
      ';clip-path:polygon(0 6%,96.3% 6%,100% 50%,96.3% 94%,0 94%);z-index:2;}' +
      '#rec737435324 .tn-elem[data-elem-id="1713351775793"] .tn-atom:after{content:"";position:absolute;left:378px;top:26px;color:#1a1a1a;font-size:14px;font-family:"SuisseIntl",Arial,sans-serif;line-height:1.2;font-weight:500;z-index:3;white-space:nowrap;}' +
      '@media screen and (max-width:1199px){#rec737435324 .tn-elem[data-elem-id="1713351775793"] .tn-atom:before{left:-2px;top:-5px;width:564px;height:80px;}#rec737435324 .tn-elem[data-elem-id="1713351775793"] .tn-atom:after{left:273px;top:23px;font-size:12px;}}' +
      '@media screen and (max-width:767px){#rec737435324 .tn-elem[data-elem-id="1713351775793"] .tn-atom:before{left:2px;top:-3px;width:324px;height:60px;}#rec737435324 .tn-elem[data-elem-id="1713351775793"] .tn-atom:after{left:133px;top:19px;font-size:11px;}}';
    document.head.appendChild(style);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyGuaranteeGreen);
  } else {
    applyGuaranteeGreen();
  }

  setTimeout(applyGuaranteeGreen, 300);
  setTimeout(applyGuaranteeGreen, 1000);
  setTimeout(applyGuaranteeGreen, 2000);
})();
