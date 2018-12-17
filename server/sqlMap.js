// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name) values (0, ?)'
  },
  test: {
    add: 'insert into test(id, name) values (0, ?)'
  }
}

module.exports = sqlMap;
