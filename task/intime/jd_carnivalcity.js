const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('0 0-18/6 1-20 6 *', () => {
  require(getTaskFile_inTimeActive('jd_carnivalcity'))
});