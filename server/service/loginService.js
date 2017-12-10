/**
 * Created by xiaoJun on 2017/12/10.
 */

var database = require('../dbconnect');
var md5 = require('md5')

exports.signUp = function (vo, callback) {
  console.log(vo);
  var sql_users = 'INSERT INTO user(nickName, intro, follows, fans, gender, phone, headUrl) VALUES(?,?,?,?,?,?,?)';
  var param_users = [vo.nickName, vo.intro, vo.follows, vo.fans, vo.gender, vo.phone, vo.headUrl];
  database.insert(sql_users, param_users, function (err, result) {
    if(err){
      console.log(err);
      callback(err, result);
    }else {
      console.log(result);
      var sql_login = 'INSERT INTO login(username, password, userId, token) VALUES(?,?,?,?)';
      var token = createToken(vo.username);
      var param_login = [vo.username, vo.password, result.lastID, token];
      database.insert(sql_login, param_login, function(err, result) {
        callback(err,result,token);
      });
    }
  });
};

exports.signIn = function (username, password, callback) {
  var sql = '' +
    'SELECT userId FROM login WHERE username = ? AND password = ?';
  var param = [username, password];
  database.query(sql, param, function (err, result) {
    if (err) {
      callback(err, result, 22);
    } else {
      if (result.length === 0){
        callback(err, result, 21);
      } else {
        var token = createToken(username);
        sql = '' +
          'UPDATE login SET token = ? WHERE userId = ?';
        param = [token, result[0].userId];
        database.query(sql, param, function(err, result) {
          if(err){
            callback(err, result , 22);
          } else {
            callback(err, result , 20, token);
          }
        })
      }
    }
  })
};

function createToken(username) {
  var string = username + Math.random().toString() + new Date().getSeconds().toString();
  console.log(string);
  return md5(string);
}
