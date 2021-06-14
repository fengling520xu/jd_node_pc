const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('19 * * * *', () => {
  require(getTaskFile_longActive('jd_big_winner'))
});