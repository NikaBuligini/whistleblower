const disk = require('diskusage');
function formatBytes(bytes, decimals) {
  if (bytes == 0) return '0 Byte';
  var k = 1000; // or 1024 for binary
  var dm = decimals + 1 || 3;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

module.exports = {
  check (path, callback) {
    // get disk usage. Takes path as first parameter
    disk.check(path, (err, info) => {
      if (err) callback(err);
      Object.keys(info).map((key, index) => {
        info[key] = formatBytes(info[key], 1);
      })
      callback(null, info);
    })
  }
}