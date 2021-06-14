const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0,30 0-23/1 * * *', () => {
  require(getTaskFile_longActive('jd_live_redrain'))
});