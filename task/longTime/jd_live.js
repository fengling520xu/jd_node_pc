const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('10-20/5 12 * * *', () => {
  require(getTaskFile_longActive('jd_live'))
});