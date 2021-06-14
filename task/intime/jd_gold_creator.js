const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('12 1,22 * * *', () => {
  require(getTaskFile_inTimeActive('jd_gold_creator'))
});