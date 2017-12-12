/**
 * Created by xiaoJun on 2017/12/12.
 */

var express = require('express')
var router = express.Router()
var likeService = require('../service/likeService')

router.post('/like',function (req, res) {
  likeService.like(req.body.photoId, function (err, result) {
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
