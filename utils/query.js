import { resolve } from "any-promise";
import { pool } from "./database";

export const query = (sql) => new Promise(resolve => {
  pool.getConnection((err, connection) => {
    if (err) {
      resolve(false)
    }

    connection.query(sql,  (error, results, fields) => {
      // 结束会话
      connection.release();
      if (error) {
        resolve(false)
      }
      resolve(results)
    })
  })
})