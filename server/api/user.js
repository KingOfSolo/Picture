/**
 * Created by xiaoJun on 2017/12/10.
 */

var express = require('express');
var router = express.Router();
var userService = require('../service/userService');

/* GET users listing. */
router.post('/UserInfo', function (req, res) {
  // console.log(req.body.username)
  const token = req.body.token
  userService.getUserInfo(token, function(err, result) {
    if ( err || result.length === 0 ) {
      console.log(err);
      res.send({
        message: 21
      });
    } else  {
      res.send({
        message: 20,
        data: result[0]
      })
    }
  });
})

router.post('/getUserInfoById', function (req, res) {
  userService.getUserInfoById(req.body.id, function (err, result) {
    if ( err || result.length === 0 ) {
      console.log(err);
      res.send({
        message: 21
      });
    } else  {
      res.send({
        message: 20,
        data: result[0]
      })
    }
  })
})

module.exports = router;
