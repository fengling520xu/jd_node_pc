const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('5 10 * * *', () => {
  require(getTaskFile_longActive('jd_try'))
});