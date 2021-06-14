const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0 0-23/1 * * *', () => {
  require(getTaskFile_longActive('jd_super_redrain'))
});