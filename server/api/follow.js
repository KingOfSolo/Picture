/**
 * Created by xiaoJun on 2017/12/12.
 */
var express = require('express')
var router = express.Router()
var followService = require('../service/followService')

router.post('/follow',function (req, res) {
  followService.follow(req.body.vo, function (err, result) {
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
 * 获取关注信息列表
 */
router.post('/getFollowList',function (req, res) {
  console.log(req.body.followUserId)
  followService.getFollowList(req.body.followUserId, function (err, result) {
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
 * 获取粉丝信息列表
 */
router.post('/getFansList', function (req, res) {
  console.log(req.body.userId)
  followService.getFansList(req.body.userId, function (err, result) {
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
