let { pool } = require("../dblink/database.js");
module.exports = {
  add: function (record, callback) {
    let sqlparam = [
      record.username ? record.username : "",
      record.score ? record.score : "",
      record.time ? record.time : new Date(),
    ];
    pool.query(
      "INSERT INTO record(username,score,time) VALUES (?,?,?);",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
  },

  queryAllByUser: function (id, page, size, callback) { //游戏记录
    let sqlparam = [id, page * size, parseInt(size)];
    pool.query(
      "SELECT score,time FROM user LEFT OUTER JOIN record ON (user.name=record.username) where user.id=? ORDER BY time DESC limit ?,?",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
  },

  queryRank: function (id,callback) { //排行榜
    let sqlparam = []
    pool.query(
      "SELECT name,max FROM user ORDER BY max DESC limit 5",sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
  },

  updateMax: function (params, callback) {
    pool.query("UPDATE user set max = (select score from record where username=? ORDER BY score desc LIMIT 1) WHERE name=?;", [params.username,params.username], function (error, result) {
        if (error) throw error;
        callback(result);
    });
}
};
