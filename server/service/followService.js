/**
 * Created by xiaoJun on 2017/12/12.
 */

var database = require('../dbconnect');

exports.follow = function (vo, callback) {
  var sql = 'INSERT INTO follows (userId, followUserId) VALUES (?, ?)'
  var params = [vo.userId, vo.followUserId]
  database.insert(sql, params, callback)
  var sql2 = 'UPDATE user set fans = fans + 1 where id = ?'
  var params2 = [vo.userId]
  database.query(sql2, params2, function (err, result) {
    if(err){
      console.log(err)
    }else{
    }
  })
  var sql3 = 'UPDATE user set follows = follows + 1 where id = ?'
  var params3 = [vo.followUserId]
  database.query(sql3, params3, function (err, result) {
    if(err){
      console.log(err)
    }else{
    }
  })
}

exports.getFollowList = function (id, callback) {
  var sql = '' +
    'SELECT user.*' +
    'FROM user, follows ' +
    'WHERE user.id = follows.userId and follows.followUserId = ?';
  var params = [id]
  database.query(sql, params, callback);
}


exports.getFansList = function (id, callback) {
  var sql = '' +
    'SELECT user.*' +
    'FROM user, follows ' +
    'WHERE user.id = follows.followUserId and follows.userId = ?';
  var params = [id]
  database.query(sql, params, callback)
}
