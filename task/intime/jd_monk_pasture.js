const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('0 0,1-22/2 1-31 4-7 *', () => {
  require(getTaskFile_inTimeActive('jd_monk_pasture'))
});