const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('0 0,1-23/3 * 6,7 *', () => {
  require(getTaskFile_inTimeActive('jd_mohe'))
});