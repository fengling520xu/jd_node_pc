const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('24 9 1-20 5,6 *', () => {
  require(getTaskFile_inTimeActive('jd_adolf_oneplus'))
});