var database = require('../dbconnect');

exports.getUserInfo = function (token, callback) {
  var sql = '' +
      'SELECT * FROM user WHERE id IN' +
    '(SELECT userId FROM login WHERE token = ?)';
  var param = [token];
  database.query(sql, param, callback);
}

exports.getUserInfoById = function (id, callback) {
  var sql = ''+
    'SELECT * FROM user WHERE id = ?';
  var param = [id]
  database.query(sql, param, callback)
}
