/**
 * Created by xiaoJun on 2017/12/11.
 */

var express = require('express')
var router = express.Router()
var photoService = require('../service/photoService')

router.get('/getAllPhotos', function (req, res) {
  photoService.getAllPhotos(function (err, result) {
    if ( err || result.length === 0 ) {
      console.log(err);
      res.send({
        message: 21
      });
    } else  {
      res.send({
        message: 20,
        data: result
      })
    }
  })
})

/**
 * 根据用户id获取图片列表
 */
router.post('/getPhotosByUserId', function (req, res) {
  photoService.getPhotosByUserId(req.body.id, function (err, result) {
    if ( err || result.length === 0 ) {
      console.log(err);
      res.send({
        message: 21
      });
    } else  {
      res.send({
        message: 20,
        data: result
      })
    }
  })
})

module.exports = router;
