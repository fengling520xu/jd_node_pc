const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('1 0 * * *', () => {
  require(getTaskFile_longActive('jd_bean_sign'))
});