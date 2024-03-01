const ExifReader = require("exifreader");
const fs = require("fs");

const IMAGE_REGEX = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
const PINBOARD_DIR = "img/pinboard";
const pins = fs
  .readdirSync(PINBOARD_DIR)
  .filter((filename) => filename !== ".DS_Store");

const pinboardCollection = pins.map((filename) => {
  return {
    filename,
    name: filename.split(IMAGE_REGEX)[0],
    src: `/${PINBOARD_DIR}/${filename}`,
    path: `${PINBOARD_DIR}/${filename}`,
  };
});

/* Parse date string in YYYY-MM-DD hh:mm:ss format
 ** separator can be any non-digit character
 ** e.g. 2017:03:09 14:49:21
 */
function parseExifDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
}

module.exports = async function readPinsCollection() {
  const photosWithExif = [];

  await Promise.all(
    pinboardCollection.map(async (photo) => {
      if (!photo) return;
      var date = fs.statSync(photo.path).birthtime;
      // var date = fs.statSync(photo.path).mtime;
      const baseData = Object.assign({}, photo, { date });
      photosWithExif.push({
        ...baseData,
      });
    })
  );

  const sortedPhotosWithExif = photosWithExif.sort(
    (itemA, itemB) => itemB.date - itemA.date
  );

  return sortedPhotosWithExif;
};
