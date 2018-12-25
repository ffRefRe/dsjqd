var models = require('../dbProject');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  // var sql = $sql.test.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.email, params.password ], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

router.post('/count', (req, res) => {
  var sql = $sql.project.count;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

router.post('/clickCountSun', (req, res) => {
  var sql = $sql.project.clickCountSun;
  conn.query(sql, [1],function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      // console.log(result);
    }
  })
});

router.post('/ipCountSun', (req, res) => {
  var sql = $sql.project.ipCountSun;
  conn.query(sql, [1],function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      // console.log(result);
    }
  })
});

router.post('/loadCountSun', (req, res) => {
  var sql = $sql.project.loadCountSun;
  conn.query(sql, [1],function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      // console.log(result);
    }
  })
});


//hour
router.post('/clickCountSunH', (req, res) => {
  var sql = $sql.project.clickCountSunH;
  var params = req.body;
  conn.query(sql, [params.appid, params.datetime, params.hour],function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      // console.log(result);
    }
  })
});

router.post('/ipCountSunH', (req, res) => {
  var sql = $sql.project.ipCountSunH;
  var params = req.body;
  conn.query(sql, [params.appid, params.datetime, params.hour],function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      // console.log(result);
    }
  })
});

router.post('/loadCountSunH', (req, res) => {
  var sql = $sql.project.loadCountSunH;
  var params = req.body;
  conn.query(sql, [params.appid, params.datetime, params.hour],function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});


//os
router.post('/os', (req, res) => {
  var sql = $sql.project.os;
  var params = req.body;
  conn.query(sql, [params.appid] ,function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      // console.log(result);
    }
  })
});

//dv
router.post('/dv', (req, res) => {
  var sql = $sql.project.dv;
  var params = req.body;
  conn.query(sql, [params.appid] ,function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      // console.log(result);
    }
  })
});

//doubleX
router.post('/doubleX', (req, res) => {
  var sql = $sql.project.doubleX;
  var params = req.body;
  conn.query(sql, [params.appid, params.datetime] ,function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
      console.log(result);
    }
  })
});


module.exports = router;

