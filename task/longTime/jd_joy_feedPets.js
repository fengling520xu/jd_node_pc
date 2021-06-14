const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('15 0-23/1 * * *', () => {
  require(getTaskFile_longActive('jd_joy_feedPets'))
});