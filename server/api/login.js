/**
 * Created by xiaoJun on 2017/12/10.
 */

var express = require('express')
var router = express.Router()
var loginService = require('../service/loginService')


router.post('/signUp', function(req, res) {
  const data = req.body.vo;
  loginService.signUp(data, function (err, result, token) {
    if(err) {
      console.log(err);
      switch (err.code) {
        case 'ER_DUP_ENTRY':
          res.send({message: 21});
          break;
      }
    } else {
      console.log(result);
      console.log(token);
      res.send({
        message: 20,
        token: token
      });
    }
  })
});

router.post('/signIn', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  loginService.signIn(username, password, function(err, result, message, token) {
    if(message === 20) {
      res.send({
        message: 20,
        token: token
      }).end();
    } else if (message === 21) {
      res.send({
        message: 21
      }).end();
    } else {
      res.status(500).send('Wrong with the database.').end();
    }
  })
});

module.exports = router;
