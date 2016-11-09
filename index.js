const disk = require('./app/diskusage');
const { CronJob } = require('cron');

new CronJob('*/5 * * * * *', () => {
  disk.check('c:', (err, info) => {
    console.log(info.available);
    console.log(info.free);
    console.log(info.total);
  });
}, null, true);
