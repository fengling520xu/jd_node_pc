const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('10 0,7,23 * * *', () => {
  require(getTaskFile_longActive('jd_syj'))
});