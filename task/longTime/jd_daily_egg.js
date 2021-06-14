const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('10 * * * *', () => {
  require(getTaskFile_longActive('jd_daily_egg'))
});