/**
 * Created by xiaoJun on 2017/12/10.
 */

var express = require('express');
var router = express.Router();
var userService = require('../service/userService');

/* GET users listing. */
router.post('/UserInfo', function (req, res) {
  console.log(req.body.username)
  // var value = req.username
  res.json({data: 'helloworld'})
  // userService.getUserInfo(req.token, function (err, result) {
  //   if( err || result.length ==0 ){
  //     console.log(err);
  //     res.send({
  //       message:21
  //     });
  //   }else {
  //     res.json({
  //       message:20,
  //       data: result[0]
  //     })
  //   }
  // })
})

module.exports = router;
