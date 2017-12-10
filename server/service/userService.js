var database = require('../dbconnect');

exports.getUserInfo = function (token, callback) {
  var sql = '' +
      'SELECT * FROM user WHERE userId IN' +
    '(SELECT userId FROM login WHERE token = ?)';
  var param = [token];
  database.query(sql, param, callback);
}
