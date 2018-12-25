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

    clickCountSunH: 'select sum(click_count) from click where app_id = ? and date = ? and hour = ?',
    ipCountSunH: 'select sum(ip_count) from click where app_id = ? and date = ? and hour = ?',
    loadCountSunH: 'select sum(valid_count) from click where app_id = ? and date = ? and hour = ?',

    os: 'select sum(OS_13_count), sum(OS_17_count), sum(OS_19_count), sum(ip_count) from click where app_id=?',
    dv: 'select sum(dv_0_count), sum(dv_1_count), sum(dv_2_count), sum(ip_count) from click where app_id=?',

    doubleX: 'select sum(click_count) from click where app_id = ? and date = ? group by hour',

    adSponsor: 'select sum(click_count), sum(ip_count), sum(valid_count), sum(OS_13_count), sum(dv_1_count) from click where app_id = ?',

  }





}

module.exports = sqlMap;
