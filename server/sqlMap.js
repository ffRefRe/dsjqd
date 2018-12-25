// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, email, password) values (0, ?, ?, ?)',
    addd: 'insert into user(id, name) values (0, ?)',
    get: 'select * from user',
  },
  test: {
    add: 'insert into test(id, name, email, password) values (0, ?)'
  },
  project:{
    count: 'select count(*) from click',
    clickCountSun: 'select sum(click_count) from click where app_id = ?',
    ipCountSun: 'select sum(ip_count) from click where app_id = ?',
    loadCountSun: 'select sum(valid_count) from click where app_id = ?',
  }





}

module.exports = sqlMap;
