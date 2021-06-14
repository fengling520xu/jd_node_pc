const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0 7 * * *', () => {
  require(getTaskFile_longActive('jd_speed_sign'))
});