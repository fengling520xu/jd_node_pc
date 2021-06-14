const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('12 0-23/6 * * *', () => {
  require(getTaskFile_longActive('jd_pigPet'))
});