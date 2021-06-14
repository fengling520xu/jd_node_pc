const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('3 10 * * *', () => {
  require(getTaskFile_longActive('jd_jxlhb'))
});