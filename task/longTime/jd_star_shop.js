const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0 1,21 * * * ', () => {
  require(getTaskFile_longActive('jd_star_shop'))
});