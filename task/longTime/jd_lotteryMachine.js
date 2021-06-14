const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0 10 * * *', () => {
  require(getTaskFile_longActive('jd_lotteryMachine'))
});