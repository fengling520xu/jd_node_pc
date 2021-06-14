const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('1 0-23/4 * * *', () => {
  require(getTaskFile_longActive('jd_cash'))
});