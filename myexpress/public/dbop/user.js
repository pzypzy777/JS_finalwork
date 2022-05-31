let { pool } = require("../dblink/database.js");
module.exports = {
  add: function (user, callback) {
    // users表中增加user操作
    let sqlparam = [user.name ? user.name : "", user.pass ? user.pass : "", user.imgurl ? user.imgurl : ""];
    pool.query(
      "INSERT INTO user(name,password,head) VALUES (?,?,?);",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
  },
  queryOne: function (params, callback) {
    let sqlparam = [params];
    pool.query(
      "SELECT * FROM user WHERE id = ?;",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
  },
  query: function (params, callback) {
    // 根据用户名密码查用户  登录
    let { name, pass } = params;
    let sqlparam = [name, pass];
    pool.query(
      "SELECT * FROM user WHERE name = ? AND password = ?;",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result[0]);
      }
    );
  },

  findByName: function (params, callback) {
    // 根据用户名查用户
    let { name } = params;
    let sqlparam = [name];
    pool.query(
      "SELECT * FROM user WHERE name = ?;",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result[0]);
      }
    );
  },

  findUsernameByID: function (params, callback) {
    // 根据用户名查用户
    pool.query(
      "SELECT name FROM user WHERE id = ?;",
      params,
      function (error, result) {
        if (error) throw error;
        callback(result[0]);
      }
    );
  },

  queryAll: function (params, callback) {
    // users表中查询全部user操作
    pool.query("SELECT * FROM users", params, function (error, result) {
      if (error) throw error;
      callback(result);
    });
  },
  update: function (params, callback) {
    // users表中更新user操作
    pool.query(
      "UPDATE user set name= ?,password=? where id = ?;",
      [params.name, params.pass, params.id],
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
  },
  uploadhead: function (params, callback) {
    //用户上传头像
    pool.query("UPDATE user set head= ? where id = ?;",[params.head,params.id],
    function (error, result) {
      if (error) throw error;
      callback(result);
    });
  }
};
