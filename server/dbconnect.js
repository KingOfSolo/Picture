/**
 * Created by xiaoJun on 2017/12/10.
 */

// var mysql = require('mysql')
var sqlite3 = require('sqlite3')

console.log('hahhahah')

/**
 * 查询函数
 * @param sql sql查询语句，必选
 * @param param 可选参数
 * @param callback 回调函数，必选
 */
var query = function (sql, param, callback) {
  callback = callback || param
  var sqlite3Connect = new sqlite3.Database('./database/database.db')
  sqlite3Connect.all(sql, param, function (err, result) {
    callback(err, result)
    sqlite3Connect.close()
  })
}

exports.query = query
exports.insert = function (sql, param, callback) {
  callback = callback || param
  var sqlite3Connect = new sqlite3.Database('./database/database.db')
  sqlite3Connect.run(sql, param, function (err) {
    callback(err, this)
    sqlite3Connect.close()
  })
}
exports.multiInsert = function (sql, params, callback) {
  var sqlite3Connect = new sqlite3.Database('./database/database.db')
  sqlite3Connect.run('BEGIN TRANSACTION')
  for (var i = 0; i < params.length; i += 1) {
    sqlite3Connect.run(sql, params[i])
  }
  sqlite3Connect.run('END TRANSACTION', function (err) {
    if (err) {
      console.log(err)
      callback(21)
    } else {
      callback(20)
    }
  })
  sqlite3Connect.close()
}
exports.checkToken = function (token, callback) {
  var sql = '' +
    'SELECT userId FROM login WHERE token=?'
  var param = [token]
  var sqlite3Connect = new sqlite3.Database('./database/database.db')
  sqlite3Connect.all(sql, param, function (err, result) {
    callback(err, result)
    sqlite3Connect.close()
  })
}
