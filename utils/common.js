const path = require('path')
const cron = require('node-cron')
const longActive_JS_FilE_PATH = 'longActive'
const inTimeActive_JS_FilE_PATH = 'inTimeActive'

function getTaskFile_longActive(name) {
  return path.join(__dirname, '..', longActive_JS_FilE_PATH, name)
}
function getTaskFile_inTimeActive(name) {
  return path.join(__dirname, '..', inTimeActive_JS_FilE_PATH, name)
}
module.exports = {
  getTaskFile_longActive,
  getTaskFile_inTimeActive,
  cron
}