const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('5-45/20 * * * *', () => {
  require(getTaskFile_longActive('jd_health_collect'))
});