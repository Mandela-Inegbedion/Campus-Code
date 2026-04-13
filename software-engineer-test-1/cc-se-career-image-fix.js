(function () {
  var localCareerImage = '../usa-assets/software-engineer/tild3730-3736-4565-b462-303336386232__frame_2087328338_1.svg';
  var targetToken = 'tild3730-3736-4565-b462-303336386232__frame_2087328338_1.svg';

  function forceCareerImage() {
    document
      .querySelectorAll(
        'img[src*="' +
          targetToken +
          '"], img[data-original*="' +
          targetToken +
          '"]'
      )
      .forEach(function (img) {
        img.src = localCareerImage;
        img.setAttribute('src', localCareerImage);
        img.setAttribute('data-original', localCareerImage);
        img.removeAttribute('srcset');
        if (img.dataset) {
          img.dataset.original = localCareerImage;
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceCareerImage);
  } else {
    forceCareerImage();
  }

  setTimeout(forceCareerImage, 300);
  setTimeout(forceCareerImage, 1000);
  setTimeout(forceCareerImage, 2000);
})();
