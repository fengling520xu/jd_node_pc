const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('1 15 * * * *', () => {
  require(getTaskFile_longActive('pk'))
});