var express = require("express");
var router = express.Router();
let {
  add,
	queryAllByUser,
	queryRank,
	updateMax
} = require("../public/dbop/record"); // 数据库操作

router.post("", function (req, res) {
  let urlParam = req.body;
  add(urlParam, function (success) {
    res.json({
      status: "200",
      data: "保存记录成功",
    });
  });
});

router.post("/update", function (req, res) {
  let urlParam = req.body;
	updateMax(urlParam, function (success) {
    res.json({
      status: "200",
      data: "更新记录成功",
    });
  });

});

router.get("/:id", function (req, res) {
  let urlParam = req.params.id;
  let page = req.query.page;
  let size = req.query.size;
  queryAllByUser(urlParam, page, size, function (success) {
    res.json({
      status: "200",
      data: success,
    });
  });
});


router.get("/:id/rank", function (req, res) {
  let urlParam = req.params.id;
  queryRank(urlParam,function (success) {
    res.json({
      status: "200",
      data: success,
    });
  });
});

module.exports = router;
