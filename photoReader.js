const ExifReader = require('exifreader');
const fs = require("fs");


const PHOTOS_DIR = 'img/photos'
const photos = fs.readdirSync(PHOTOS_DIR);

const photoCollection = photos.map((filename) => {
  return {
    filename,
    name: filename.split('.jpeg')[0],
    src: `/${PHOTOS_DIR}/${filename}`,
    path: `${PHOTOS_DIR}/${filename}`,
  }
})

/* Parse date string in YYYY-MM-DD hh:mm:ss format
** separator can be any non-digit character
** e.g. 2017:03:09 14:49:21
*/
function parseExifDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0],b[1]-1,b[2],b[3],b[4],b[5]);
}

module.exports = async function readPhotosWithExif() {
  const photosWithExif = []
  await Promise.all(photoCollection.map(async (photo) => {
    const exifData = await ExifReader.load(photo.path)
    const lensFocalLength= (exifData.FocalLength?.value.toString() || '').split(',1')[0]
    const date = exifData.DateTimeOriginal?.description ? parseExifDate(exifData.DateTimeOriginal?.description) : parseExifDate(exifData.DateTime.description)

    const baseData = Object.assign({}, photo, {date})

    const make = exifData.Make?.description || ''

    // we only want exif for reliable fuji pics
    if (!make.toLowerCase().includes('fujifilm')) {
      photosWithExif.push(baseData)
      return
    }

    const exifDataForCollection = {
      make,
      model: exifData.Model?.description || '',
      lens: exifData.Lens?.value || '',
      lensFocalLength: lensFocalLength || '',
      lensFocalLengthEquivalent: (lensFocalLength && lensFocalLength  * 1.5) || '',
      iso: exifData.ISOSpeedRatings?.value || '',
      aperture: exifData.FNumber?.description || '',
      shutter: exifData.ExposureTime?.description || '',
    }

    photosWithExif.push({
      ...baseData,
      ...exifDataForCollection,
      //
    })
    console.log(exifData)
  }));
  // console.log(photosWithExif)

  const sortedPhotosWithExif = photosWithExif.sort((itemA, itemB) => itemB.date - itemA.date)

  return sortedPhotosWithExif
}