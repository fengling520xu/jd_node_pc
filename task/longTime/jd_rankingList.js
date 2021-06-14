const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('11 9 * * *', () => {
  require(getTaskFile_longActive('jd_rankingList'))
});