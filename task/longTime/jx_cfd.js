const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('2 8,13,19 * * *', () => {
  require(getTaskFile_longActive('jx_cfd'))
});