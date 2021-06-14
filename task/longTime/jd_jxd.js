const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('30 8,16,20 * * *', () => {
  require(getTaskFile_longActive('jd_jxd'))
});