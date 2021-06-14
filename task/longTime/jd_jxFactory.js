const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('9 * * * *', () => {
  require(getTaskFile_longActive('jd_jxFactory'))
});