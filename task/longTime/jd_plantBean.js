const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('1 7-21/2 * * *', () => {
  require(getTaskFile_longActive('jd_plantBean'))
});