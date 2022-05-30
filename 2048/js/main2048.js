var overflag = true;
var mark = 0;
var youwin;

function torank() {
    window.location.href = '../../rank.html';
}
function newgame() {
    // var cnt=document.getElementById("inputmap").value;
    // if(cnt<=4){
    //     mapx = 4, mapy = 4;
    // }else{
    //     mapx = cnt, mapy = cnt;
    // }
    // mapx = 5, mapy = 5, mapt = mapx * mapy; //设定表框大小，一般为4*4
    var cnt=document.getElementById("inputmap").value;
    if(cnt<=4){
        mapx = 4, mapy = 4, mapt = mapx * mapy;
    }else{
        mapx =parseInt(cnt), mapy =parseInt(cnt), mapt = mapx * mapy;
    }
    var table = document.getElementById("maintable"); 
    var tableStructure = ""; 
    var tdid = 1; 
    overflag = true;

    for (var i = 1; i <= mapx; i++) {
        tableStructure += "<tr>"; 
  
        for (var j = 1; j <= mapy; j++) {
            tableStructure += "<td id=" + tdid + "></td>"; 
            tdid++;
        }
        tableStructure += "</tr>";
    }
    table.innerHTML = tableStructure; 
    tdRandom();
    tdRandom();
    tdcolor();
    document.getElementById("score").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    document.getElementById("gameover").innerHTML = "";
    youwin = 2048;
}


function myrandom(min, max) {
    return min + Math.floor(Math.random() * max);
}


function tdRandom() {
    var temp = myrandom(1, mapt);
    if (document.getElementById(temp).innerHTML == "") {
        document.getElementById(temp).innerHTML = Math.random() < 0.9 ? 2 : 4;
    } else {
        tdRandom();
    }
}



function Up() {
    for (var i = 1; i <= mapy; i++) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i + (mapx - 1) * mapy; j >= i; j -= mapy) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == ""||thetd.innerHTML==null) {
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


function Down() {

    for (var i = 1; i <= mapy; i++) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i; j <= i + (mapx - 1) * mapy; j += mapy) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == ""||thetd.innerHTML==null) {
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

function Left() {
    for (var i = mapy; i <= mapy + (mapx - 1) * mapy; i += mapy) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i; j >= i - mapy + 1; j--) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == "" ||thetd.innerHTML==null) {
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

function Right() {
    for (var i = 1; i <= 1 + (mapx - 1) * mapy; i += mapy) {
        var tempmap = [];
        var tempflag = [];
        var z = 0;
        for (var j = i; j < i + mapy; j++) {
            var thetd = document.getElementById(j);
            if (thetd.innerHTML == "" ||thetd.innerHTML==null) {
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
            mark =mark+ tempmap[i];
        }
        tempmap = changetd(tempmap, tempflag, k, i);
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
        document.getElementById("gameover").innerHTML += "game over";
        document.getElementById("gameover").style.display = "block";
        document.getElementById("score").style.display = "block";
        document.getElementById("score").innerHTML="当前分数为" + mark+"分";
        overflag = false;
        gameover();
				updatemax();
    }
}


function gameover() {
	
	var xmlhttp = new XMLHttpRequest();
	var obj = {
	  username: decodeURI(get_Cookie('username')),
	  score: mark,
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
