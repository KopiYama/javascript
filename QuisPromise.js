const util = require('util');

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

// Ubah fungsi getProvinces menjadi Promise-based menggunakan util.promisify
const getProvincesPromise = util.promisify(getProvinces);

module.exports = { getProvinces: getProvincesPromise };
