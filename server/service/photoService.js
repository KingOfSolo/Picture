/**
 * Created by xiaoJun on 2017/12/11.
 */
var database = require('../dbconnect');
var fs = require('fs')

exports.getAllPhotos = function (callback) {
  var sql = '' +
    'SELECT photos.*, user.nickName, user.headUrl, user.id ' +
    'FROM photos ' +
    'INNER JOIN user ' +
    'ON photos.userId = user.id ' +
    'ORDER BY photoId DESC';
  database.query(sql, callback);
}

exports.getPhotosByUserId = function (id, callback) {
  var sql = 'SELECT * FROM photos WHERE userId = ?' +
  'ORDER BY photoId DESC';
  var params = [id]
  database.query(sql, params, callback)
}

exports.updatePhoto = function (file, callback) {
  var filepath = './server/public/images/' + Date.now().toString() + file.originalname
  console.log(filepath)
  console.log(file.path)
  fs.rename(file.path, filepath, function (err) {
    if (err) {
      callback({message: 21});
    } else {
      callback({
        message: 20,
        filepath: filepath.slice(15)
      })
    }
  })
}

exports.storePhoto = function (vo, callback) {
  var sql = 'INSERT INTO photos (title, photoUrl, userId, intro, date) VALUES (?, ?, ?, ?, ?)'
  var date = new Date();
  var photoUrl = 'http://localhost:3000'+vo.photoUrl
  var params = [vo.title, photoUrl, vo.userId, vo.intro, date.format('yyyy-MM-dd')];
  database.insert(sql, params, callback)
}
