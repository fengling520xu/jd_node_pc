const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('18 0,22 * * *', () => {
  require(getTaskFile_longActive('jd_speed_redpocke'))
});