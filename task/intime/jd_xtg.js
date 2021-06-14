const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('0 0 0 1-19 6 *', () => {
  require(getTaskFile_inTimeActive('jd_xtg'))
});