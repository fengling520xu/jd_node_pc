const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('40 * * * *', () => {
  require(getTaskFile_longActive('jd_jxmc'))
});