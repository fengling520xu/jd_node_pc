const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('30 16-23/1 * * *', () => {
  require(getTaskFile_inTimeActive('jd_half_redrain'))
});