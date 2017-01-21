/**
 * TODO document me
 */
(function () {
  'use strict';

  function setCurrentImage() {
    console.debug('we runnin'); // eslint-disable-line no-console
    // remove .current from current el
    // TODO
    // get anchor tag frm url, if not, get first .photo el
    var nextImage = document.querySelectorAll('.photo');
    console.debug(nextImage); // eslint-disable-line no-console
    // find in DOM
    // add current class to it!
  }

  window.addEventListener('load', setCurrentImage);
})();
