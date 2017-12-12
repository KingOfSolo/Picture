/**
 * Created by xiaoJun on 2017/12/12.
 */

var database = require('../dbconnect');

exports.like = function (photoId, callback) {
  var sql = 'UPDATE photos set liked = liked + 1 where photoId = ?'
  var params = [photoId]
  database.query(sql, params, callback)
}
