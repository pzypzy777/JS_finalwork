<center><h1>2021-2022学年第2学期</h1></center>



![zucc](https://js-sigcc.vercel.app/zucc.png)





<div style="margin-left:38%">- 课程名称:跨平台脚本开发技术</div>
<div style="margin-left:38%">- 实验项目:期末大作业</div>
<div style="margin-left:38%">- 专业班级<u>计算1902、计算1902</u></div>
<div style="margin-left:38%">- 学生学号<u>31901049、31901050</u></div>
<div style="margin-left:38%">- 学生姓名<u>潘振宇、饶黎明</u></div>
<div style="margin-left:38%">- 实验指导教师:郭鸣</div>

## [实验内容](https://js-sigcc.vercel.app/#/lab/proj.final?id=实验内容)

1. 项目分工表格

- 1人项目权重为1.0
- 2人项目权重和为 1.9



------

# 一、项目分工与自我评估

## （一）项目分工

|  姓名  |   学号   |   班级   |                       任务                        | 权重 |
| :----: | :------: | :------: | :-----------------------------------------------: | ---- |
| 潘振宇 | 31901049 | 计算1902 |    功能设计 本地服务器搭建  排行榜  Cookie设计    | 0.95 |
| 饶黎明 | 31901050 | 计算1902 | 功能设计 游戏实现(包括5*5模式)  登录模块 游戏记录 | 0.95 |

## （二）项目自我评估表

| 技术点         | 自评等级:(1-5) | 备注                                                         |
| :------------- | :------------: | ------------------------------------------------------------ |
| sessionStorage |       5        | Cookie辨别用户身份，进行[Session](https://baike.baidu.com/item/Session/479100)跟踪而储存在用户本地终端上的数据（经过加密），由用户[客户端](https://baike.baidu.com/item/客户端/101081)计算机暂时或永久保存的信息 |
| Mysql          |       5        | 连接服务器端数据库                                           |
| 函数式编程     |       4        | 函数作为参数                                                 |
| express框架    |       5        |                                                              |
| RestAPI        |       4        | 采用Restful风格API                                           |





# 二、项目自评等级:(1-5)

​		**等级：**4





# 三、项目说明

## （一）使用的技术

|  前端  |  后端   |
| :----: | :-----: |
|  html  | nodejs  |
|   js   | express |
| jquery |   js    |
|  css   |  mysql  |
|   /    |  flap   |





## （二）项目基于现有的2048代码

### 1.参考说明

​		参考的代码来自：https://github.com/226YZY/my2048game



##### **改进 2048游戏界面：**

**增加关卡选择功能。**

**增加用户登录注册、游戏记录、排行榜**



### 2.用户登录&&注册

#### （1）实现说明	



### 3.游戏界面



### 4.排行榜

#### 	（1）实现说明

从游戏记录找所有用户的最高记录,只保留五个

```js
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
```



### **5.服务器**

​		使用express+nodejs+mysql，通过express框架创建服务器，使用mysql数据库，将数据存储在数据库中，开发过程中数据库查看通过Navicat查看。

##### **（1）数据库表结构**

```mysql
/*
 Navicat Premium Data Transfer

 Source Server         : aliyun
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : 121.199.49.79:3306
 Source Schema         : JS

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 31/05/2022 02:17:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `score` bigint NULL DEFAULT NULL,
  `time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `max` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```



##### **（2）保存游戏记录和查看记录**

```js
pool.query(
      "INSERT INTO record(username,score,time) VALUES (?,?,?);",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
```

```js
pool.query(
      "SELECT score,time FROM user LEFT OUTER JOIN record ON (user.name=record.username) where user.id=? ORDER BY time DESC limit ?,?",
      sqlparam,
      function (error, result) {
        if (error) throw error;
        callback(result);
      }
    );
```



##### **（3）配置过程**

`npm install`

`npm run start`

`npm run server.js`



**（4）主要代码**

**a、在myexpress文件夹中创建app.js**

```js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParse = require('body-parser')
require('./public/dblink/database')
var usersRouter = require('./routes/user');
var recordRouter = require('./routes/record');

var app = express();

//跨域
app.all('*', function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', usersRouter);
app.use('/record', recordRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

**b、database.js**

服务器mysql数据库

```js
var mysql = require('mysql');
var pool = mysql.createConnection({
    host: '121.199.49.79',
    port: '3306',
    user: 'root',
    password: '123',
    database: 'JS'
});

module.exports = {
    pool
}
```

**c、routes**文件夹

```js
var express = require('express');
var router = express.Router();
let {
  add,
  query,
  findByName,
  queryOne,
  update,
  findUsernameByID
} = require("../public/dbop/user"); // 数据库操作



router.post('/:id', function (req, res) {
  let urlParam = req.body;
  findByName(urlParam, function (success) {
    if (success != null && success.id != urlParam.id) {
      res.json({
        status: "400",
        data: '账号已经被用过了哦'
      });
    } else {
      update(urlParam, function (success) {
        if (success == null) {
          res.json({
            status: "400",
            data: '操作失败'
          });
        } else {
          res.json({
            status: "200",
            data: ""
          });
        }
      })
    }

  })

});


router.get('/find/:id', function (req, res) {
  let urlParam = req.params.id;
  findUsernameByID(urlParam, function (success) {
      res.json({
        status: "200",
        data: success
      });
  })

});


router.post('', function (req, res, next) {
  let urlParam = req.body;
  query(urlParam, function (success) {
    if (success == null) {
      res.json({
        status: "400",
        data: '账号或者密码错误'
      });
    } else {
      res.json({
        status: "200",
        data: success
      });
    }

  })
});




router.get('/:id', function (req, res, next) {
  let urlParam = req.params.id;


  queryOne(urlParam, function (success) {
    if (success == null) {
      res.json({
        status: "400",
        data: 'id有误'
      });
    } else {
      res.json({
        status: "200",
        data: success
      });
    }

  })
});



router.post('/sign/new', function (req, res, next) {
  let urlParam = req.body;
  console.log(urlParam)

  findByName(urlParam, function (success) {
    if (success != null) {
      res.json({
        status: "400",
        data: '账号已经被用过了哦'
      });
    } else {


      add(urlParam, function (success) {
        if (success == null) {
          res.json({
            status: "400",
            data: '操作失败'
          });
        } else {
          res.json({
            status: "200",
            data: success
          });
        }
      })
    }
  })
});




module.exports = router;
```



```js
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

```



**i、dbop文件夹**

对数据库进行操作的地方

```js
let { pool } = require("../dblink/database.js");
module.exports = {
  add: function (user, callback) {
    // users表中增加user操作
    let sqlparam = [user.name ? user.name : "", user.pass ? user.pass : ""];

    pool.query(
      "INSERT INTO user(name,password) VALUES (?,?);",
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
};

```



```js
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

```



# 四、解决技术要点说明

## 1.跨域问题(代码见上)

## 2.Mysql查询方式(代码见上)

## 3.5*5游戏开发(可以选择)

## 4.RestApi(代码见上)

## 5.Cookie

cookie加密后中文显示会出问题,需要解码

```js
function get_Cookie(cookie_name) {
  var allcookies = document.cookie;
  var cookie_pos = allcookies.indexOf(cookie_name);
  if (cookie_pos != -1) {
    cookie_pos += cookie_name.length + 1;
    var cookie_end = allcookies.indexOf(";", cookie_pos);

    if (cookie_end == -1) {
      cookie_end = allcookies.length;
    }

    var value = allcookies.substring(cookie_pos, cookie_end);
  }
  return value;
}
```

## 6.API文档见api.md



# 五、心得体会（结合自己情况具体说明）

- #### **大项目开发过程心得**
  
  - **遇到哪些困难，经历哪里过程，有哪些收获**
  
  - 潘振宇：
  
    ​		遇到了跨域问题,通过添加头部解决了. 
  
    ​		遇到了分页查找和数据库外连接查找,翻了之前的数据库教材才明白
  
    ​		CDN上导入不了js-cookie.js,直接从网上下了一个,加载速度变快很多,cookie取出来乱码,重写getcookie方法
    
    ​		使用APIfox测试接口,导出接口数据
    
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
  - 饶黎明：
  
    心得体会：
    
    
    
    
  
- #### **本课程建议**
  
  - **课程难度方面，进度方面，课程内容，授课方式等，给出你的意见**
  
  - <u>潘振宇：</u>
  
    ​		课程难度不是很大,进度我觉得可以稍微慢一点,每节课讲述的知识点过多,过于深究原理,有时候并不是谁都想这么干的,虽然计算机靠自觉自学比较多,一个两个新鲜的东西还可以接受,一下子来太多真的遭不住.
  
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  - <u>饶黎明：</u>
  
    ​		
