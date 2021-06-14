const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('1 0,11,21 * * *', () => {
  require(getTaskFile_inTimeActive('jd_jump'))
});