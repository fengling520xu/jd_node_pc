const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('4 0,23 * * *', () => {
  require(getTaskFile_longActive('jd_club_lottery'))
});