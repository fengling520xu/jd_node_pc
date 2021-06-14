const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('16 22 * * *', () => {
  require(getTaskFile_longActive('jd_small_home'))
});