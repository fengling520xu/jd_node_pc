const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('9 7 * * *', () => {
  require(getTaskFile_longActive('jd_car'))
});