const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('15 9 1-18 5,6 *', () => {
  require(getTaskFile_inTimeActive('jd_adolf_flp'))
});