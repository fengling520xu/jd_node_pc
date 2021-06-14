const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('55 23 * * *', () => {
  require(getTaskFile_longActive('jd_unsubscribe'))
});