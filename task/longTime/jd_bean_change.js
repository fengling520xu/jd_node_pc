const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('30 22 * * *', () => {
  require(getTaskFile_longActive('jd_bean_change'))
});