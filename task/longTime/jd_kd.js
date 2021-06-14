const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('11 0 * * *', () => {
  require(getTaskFile_longActive('jd_kd'))
});