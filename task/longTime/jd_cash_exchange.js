const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0,1,2 0 * * *', () => {
  require(getTaskFile_longActive('jd_cash_exchange'))
});