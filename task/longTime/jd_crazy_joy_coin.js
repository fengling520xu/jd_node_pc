const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('30 * * * *', () => {
  require(getTaskFile_longActive('jd_crazy_joy'))
});