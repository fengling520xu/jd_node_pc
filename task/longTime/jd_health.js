const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('13 1,6,22 * * *', () => {
  require(getTaskFile_longActive('jd_health'))
});