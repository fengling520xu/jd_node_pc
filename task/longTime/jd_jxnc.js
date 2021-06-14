const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0 9,12,18 * * *', () => {
  require(getTaskFile_longActive('jd_jxnc'))
});