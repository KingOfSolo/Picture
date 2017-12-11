/**
 * Created by xiaoJun on 2017/12/11.
 */
var database = require('../dbconnect');
require('./dateService')

exports.getCommentsById = function (id, callback) {
  var sql = '' +
    'SELECT comments.*, user.nickName, user.headUrl ' +
    'FROM comments, user ' +
    // 'INNER JOIN user ' +
    'WHERE comments.userId = user.id and photoId = ? ' +
    'ORDER BY commentId DESC';
  var params = [id]
  database.query(sql, params, callback);
}

exports.publishComment = function (vo, callback) {
  var sql = 'INSERT INTO comments (userId, photoId, content, date) VALUES (?, ?, ?, ?)';
  var date = new Date();
  var params = [vo.userId, vo.photoId, vo.content, date.format('yyyy-MM-dd')];
  database.insert(sql, params, callback)
  var sql2 = 'UPDATE photos SET (commentNum) = (?) WHERE photoId = ?';
  var num = vo.commentNum + 1
  var params2 = [num, vo.photoId];
  database.query(sql2, params2, function (err, result) {
    if(err){
      console.log(err)
    }else{
    }
  })
}


