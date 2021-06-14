const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('14 9,20 * 5,6 *', () => {
  require(getTaskFile_inTimeActive('jd_adolf_superbox'))
});