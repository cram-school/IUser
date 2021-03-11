const mysql = require('mysql')
const config = require('../constant/mysql.config')
// // 创建数据池
export const pool  = mysql.createPool({
  ...config
})
 
