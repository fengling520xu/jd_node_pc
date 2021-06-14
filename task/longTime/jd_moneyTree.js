const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('3 0-23/2 * * *', () => {
  require(getTaskFile_longActive('jd_moneyTree'))
});