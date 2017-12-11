/**
 * Created by xiaoJun on 2017/12/11.
 */
var database = require('../dbconnect');

exports.getAllPhotos = function (callback) {
  var sql = '' +
    'SELECT photos.*, user.nickName, user.headUrl ' +
    'FROM photos ' +
    'INNER JOIN user ' +
    'ON photos.userId = user.id ' +
    'ORDER BY photoId DESC';
  database.query(sql, callback);
}

exports.getPhotosByUserId = function (id, callback) {
  var sql = 'SELECT * FROM photos WHERE userId = ?';
  var params = [id]
  database.query(sql, params, callback)
}
