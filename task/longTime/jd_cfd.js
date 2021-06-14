const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('4 8,13,19 * * *', () => {
  require(getTaskFile_longActive('jd_cfd'))
});