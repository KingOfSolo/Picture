/**
 * Created by xiaoJun on 2017/12/11.
 */

var express = require('express')
var router = express.Router()
var photoService = require('../service/photoService')
var multer = require('multer')
var upload = multer({dest: './server/public/images'})

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

router.post('/uploadPhoto', upload.array('file'), function (req, res) {

  console.log(req.files);

  photoService.updatePhoto(req.files[0], function (result) {
    console.log(result)
    if (result.message === 20){
      res.send({
        message: 20,
        filepath: result.filepath
      });
    } else {
      res.send({
        message: result.message
      })
    }
  })
})

router.post('/storePhoto', function (req, res) {
  photoService.storePhoto(req.body.vo, function (err, result) {
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
