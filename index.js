const path = require('path')
const fs = require('fs')
const cron = require('node-cron')
const JS_TASK_File_PATH_LONG = './task/longTime'
const JS_TASK_File_PATH_INTIME = './task/intime'

function pathResolve(name, pathUrl) {
  return path.join(__dirname, pathUrl, name)
}

// 长期任务
fs.readdirSync('./task/longTime').forEach(item => {
    console.log(item)
  require(pathResolve(item, JS_TASK_File_PATH_LONG))
})

// 限时任务
fs.readdirSync('./task/intime').forEach(item => {
    console.log(item)
  require(pathResolve(item, JS_TASK_File_PATH_INTIME))
})