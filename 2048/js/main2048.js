var overflag = true;
//主函数
function torank() {
    window.location.href = '../../rank.html';
}
function newgame() {
    mapx = 4, mapy = 4, mapt = mapx * mapy; //设定表框大小，一般为4*4
    var table = document.getElementById("maintable"); //获取表格
    var tableStructure = ""; //储存表格结构
    var tdid = 1; //单元格id
    var mark = document.getElementById("mark");
    overflag = true;

    //加载表格结构(4行4列)
    for (var i = 1; i <= mapx; i++) {
        tableStructure += "<tr>"; //为表格加1行
        //为该行添加单元格
        for (var j = 1; j <= mapy; j++) {
            tableStructure += "<td id=" + tdid + "></td>"; //添加单元格与该单元格id
            tdid++;
        }
        tableStructure += "</tr>";
    }
    table.innerHTML = tableStructure; //向表格返回该表格结构
    tdRandom();
    tdRandom();
    tdcolor();
    mark.innerHTML = 0;
    document.getElementById("gameover").style.display = "none";
    document.getElementById("gameover").innerHTML = "";
    youwin = 2048;
}

//因为Math.random() 返回 0（包括） 至 1（不包括） 之间的随机数，随机的数不一定是整数。
function myrandom(min, max) {
    return min + Math.floor(Math.random() * max);
}

//随机为单元格随机填入2或4 (4出现的概率应相对较小)
function tdRandom() {
    var temp = myrandom(1, mapt);
    if (document.getElementById(temp).innerHTML == "") {
        document.getElementById(temp).innerHTML = Math.random() < 0.9 ? 2 : 4;
    } else {
        tdRandom();
    }
}


//上下左右操作函数


//向上操作
function Up() {
    for (var i = 1; i <= mapy; i++) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i + (mapx - 1) * mapy; j >= i; j -= mapy) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == "") {
                tempmap[z] = 0;
            } else {
                tempmap[z] = parseInt(thetd.innerHTML);
            }
            tempflag[z] = true;
            z++;
        }
        tempmap = changetd(tempmap, tempflag, tempmap.length, 0);
        z = 0;
        for (var j = i + (mapx - 1) * mapy; j >= i; j -= mapy) {
            var thetd = document.getElementById(j);
            if (tempmap[z] == 0) {
                thetd.innerHTML = "";
            } else {
                thetd.innerHTML = tempmap[z];
            }
            z++;
        }
    }
}

//向下操作
function Down() {

    for (var i = 1; i <= mapy; i++) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i; j <= i + (mapx - 1) * mapy; j += mapy) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == "") {
                tempmap[z] = 0;
            } else {
                tempmap[z] = parseInt(thetd.innerHTML);
            }
            tempflag[z] = true;
            z++;
        }
        tempmap = changetd(tempmap, tempflag, tempmap.length, 0);
        z = 0;
        for (var j = i; j <= i + (mapx - 1) * mapy; j += mapy) {
            var thetd = document.getElementById(j);
            if (tempmap[z] == 0) {
                thetd.innerHTML = "";
            } else {
                thetd.innerHTML = tempmap[z];
            }
            z++;
        }
    }
}

//向左操作
function Left() {
    for (var i = mapy; i <= mapy + (mapx - 1) * mapy; i += mapy) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i; j >= i - mapy + 1; j--) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == "") {
                tempmap[z] = 0;
            } else {
                tempmap[z] = parseInt(thetd.innerHTML);
            }
            tempflag[z] = true;
            z++;
        }
        tempmap = changetd(tempmap, tempflag, tempmap.length, 0);
        z = 0;
        for (var j = i; j >= i - mapy + 1; j--) {
            var thetd = document.getElementById(j);
            if (tempmap[z] == 0) {
                thetd.innerHTML = "";
            } else {
                thetd.innerHTML = tempmap[z];
            }
            z++;
        }
    }
}

//向右操作
function Right() {
    for (var i = 1; i <= 1 + (mapx - 1) * mapy; i += mapy) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i; j < i + mapy; j++) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == "") {
                tempmap[z] = 0;
            } else {
                tempmap[z] = parseInt(thetd.innerHTML);
            }
            tempflag[z] = true;
            z++;
        }
        tempmap = changetd(tempmap, tempflag, tempmap.length, 0);
        z = 0;
        for (var j = i; j < i + mapy; j++) {
            var thetd = document.getElementById(j);
            if (tempmap[z] == 0) {
                thetd.innerHTML = "";
            } else {
                thetd.innerHTML = tempmap[z];
            }
            z++;
        }
    }
}


function keyboardEvents() {
    if (overflag) {
        if (event.keyCode == 37 || event.keyCode == 65) Left();
        else if (event.keyCode == 38 || event.keyCode == 87) Up();
        else if (event.keyCode == 39 || event.keyCode == 68) Right();
        else if (event.keyCode == 40 || event.keyCode == 83) Down();
        //保证其它按键不会触发
        if (flag_r) {
            tdRandom();
            flag_r = false;
        }
    }

    tdcolor();
    if (overflag)
        isover();
}

function changetd(tempmap, tempflag, k, u) {
    for (var i = k - 1; i > u; i--) {
        if (tempmap[i - 1] != 0 && tempmap[i] == 0) {
            tempmap[i] = tempmap[i - 1];
            tempmap[i - 1] = 0;
            if (tempflag[i - 1] == false) {
                tempflag[i - 1] = true;
                tempflag[i] = false;
            }
            flag_r = true;
        } else if (tempmap[i - 1] != 0 && tempmap[i] == tempmap[i - 1] && tempflag[i] == true && tempflag[i - 1] == true) {
            tempmap[i] *= 2;
            tempmap[i - 1] = 0;
            tempflag[i] = false;
            flag_r = true;
            mark.innerHTML = parseInt(mark.innerHTML) + tempmap[i];
        }
        tempmap = changetd(tempmap, tempflag, k, i);
        // else if(tempmap[i]!=0&&tempmap[i+1]==tempmap[i]&&tempflag[i]==false){

        // }
    }
    return tempmap;
}

function tdcolor() {
    var tdcolors = {
        "": "#cdc1b4",
        "2": "#eee4da",
        "4": "#ede0c8",
        "8": "#f2b179",
        "16": "#f59563",
        "32": "#f67c5f",
        "64": "#f65e3b",
        "128": "#edcf72",
        "256": "#edcc61",
        "512": "#9c0",
        "1024": "#33b5e5",
        "2048": "#09c",
        "4096": "#a6c",
        "8192": "#93c"
    }
    for (var i = 1; i <= mapx * mapy; i++) {
        var thetd = document.getElementById(i);
        thetd.style.backgroundColor = tdcolors[thetd.innerHTML];
        if (thetd.innerHTML == 2 || thetd.innerHTML == 4) {
            thetd.style.color = "#776e65";
        } else {
            thetd.style.color = "#f8f5f1";
        }
    }
}

function isover() {
    var f = 0;
    for (var i = 1; i <= mapx * mapy; i++) {
        var td = document.getElementById(i);
        if (td.innerHTML >= youwin) {
            document.getElementById("gameover").innerHTML = "恭喜你达到了 " + td.innerHTML;
            document.getElementById("gameover").style.display = "block";
            youwin = parseInt(td.innerHTML);
        }
        if (td.innerHTML == "") {
            //空值跳过
        } else if (i <= (mapx - 1) * mapy && td.innerHTML == document.getElementById(i + mapy).innerHTML) {
            //判断该格子下方的数是否与之相同
        } else if (i % mapy != 0 && td.innerHTML == document.getElementById(i + 1).innerHTML) {
            //判断该格子右边的数是否与之相同
        } else {
            f++;
        }
    }
    if (f == mapx * mapy) {
        document.getElementById("gameover").innerHTML += "<br>GAME OVER"
        document.getElementById("gameover").style.display = "block";
        overflag = false;
        gameover();
				updatemax();
    }
}


function gameover() {
	
	var xmlhttp = new XMLHttpRequest();
	var obj = {
	  username: decodeURI(get_Cookie('username')),
	  score: parseInt(mark.innerHTML),
	};
	xmlhttp.open("POST", myurl+"/record", true);
	xmlhttp.setRequestHeader("Content-Type"
	  , "application/json");
  
	xmlhttp.send(JSON.stringify(obj));
  
  
  }
  
	function updatemax() {
		var xmlhttp = new XMLHttpRequest();
		var obj = {
			username: decodeURI(get_Cookie('username')),
		};
		xmlhttp.open("POST", myurl+"/record/update", true);
		xmlhttp.setRequestHeader("Content-Type"
			, "application/json");
		xmlhttp.send(JSON.stringify(obj));
	}

  


	function get_Cookie(cookie_name) {
		var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);
    if (cookie_pos != -1)
    {
        cookie_pos += cookie_name.length + 1;
        var cookie_end = allcookies.indexOf(";", cookie_pos);

        if (cookie_end == -1)
        {
            cookie_end = allcookies.length;
        }

        var value = allcookies.substring(cookie_pos, cookie_end);
    }
    return value;
}
