const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0 0-16/8 * * *', () => {
  require(getTaskFile_longActive('jd_joy_reward'))
});