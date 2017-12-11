/**
 * Created by xiaoJun on 2017/12/11.
 */
var express = require('express')
var router = express.Router()
var commentService = require('../service/commentService')

/**
 * 根据图片id来获取评论
 */
router.post('/getCommentsById', function (req, res) {
  const id = req.body.id;
  console.log(id)
  commentService.getCommentsById(id, function (err, result) {
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

router.post('/publishComment', function (req, res) {
  const data = req.body.vo
  commentService.publishComment(data, function (err, result) {
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
