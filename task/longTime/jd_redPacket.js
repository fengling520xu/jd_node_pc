const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('1 1,2,23 * * *', () => {
  require(getTaskFile_longActive('jd_redPacket'))
});