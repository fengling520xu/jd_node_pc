const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('20 8 * * *', () => {
  require(getTaskFile_longActive('jd_sgmh'))
});