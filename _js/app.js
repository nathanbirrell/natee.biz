/**
 * TODO document me
 */
(function () {
  'use strict';

  function getNextImageFromUrlAnchor() {
    // get anchor tag frm url, get that photo el
    var url = window.location.href;
    var idx = url.indexOf('#');
    var hash = idx !== -1 ? url.substring(idx + 1) : '';
    return hash;
  }

  function getNextImageInGallery() {
    var hash = getNextImageFromUrlAnchor();
    var nextImage = document.getElementById(hash);

    // if no anchor or image for it, get first .photo el
    if (!nextImage) {
      nextImage = document.querySelectorAll('.photo')[0];
    }

    return nextImage;
  }

  function getCurrentImageElementAndRemoveClass() {
    var currentImage = document.querySelectorAll('.photo.current')[0];
    currentImage.className = currentImage.className.replace(new RegExp('(^|\\b)' + 'current'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    return currentImage;
  }

  function setCurrentImage() {
    // remove default .current class from current el
    getCurrentImageElementAndRemoveClass();
    var nextImageEl = getNextImageInGallery();
    // console.debug(nextImageEl); // eslint-disable-line no-console
    nextImageEl.className += ' current';
  }

  function nextImage() {
    event.preventDefault(); // for anchor link compatability

    // remove default .current class from current el
    var currentImage = document.querySelectorAll('.photo.current')[0];
    currentImage.className = currentImage.className.replace(new RegExp('(^|\\b)' + 'current'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

    var nextImageEl = currentImage.nextElementSibling;

    if (!nextImageEl) {
      nextImageEl = document.querySelectorAll('.photo')[0];
    }

    var nextImageId = nextImageEl.id;
    window.location.hash = nextImageId;

    nextImageEl.className += ' current';

    return false;
  }

  var galleryElement = document.getElementById('gallery');

  if (galleryElement) {
    window.addEventListener('load', setCurrentImage);
    galleryElement.addEventListener('click', nextImage);
  }
})();
