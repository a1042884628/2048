//定义一个javascript数组
var board = new Array();

$(function() {
	newgame();
});

function newgame() {
	//初始化棋盘格和数字格
	init();
	//在随机两个格子生成随机数字
	generateOneNumber();
	generateOneNumber();
}

function init() {
	//i表示4*4的格子中的行
	for (var i = 0; i < 4; i++) {
		//定义了一个二位数组
		board[i] = new Array();
		//j表示4*4的格子中的列
		for (var j = 0; j < 4; j++) {
			//初始化小格子为0  行是i 列是j
			board[i][j] = 0; // 下面的0 0 都得变成变量 从而取得16个格子
			var gridCell = $("#grid_cell_" + i + "_" + j)
			//通过getPosTop()方法设置每个盒子距顶端的距离
			gridCell.css("top", getPosTop(i, j))
			//通过getPosLeft()方法设置每个盒子距左端的距离
			gridCell.css("left", getPosLeft(i, j))
		}
	}
	updateBoardView();
}

function updateBoardView() { //设置数字层的样式
    $(".number_cell").remove();
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			$("#grid_container").append("<div class='number_cell' id='number_cell_" + i + "_" + j +
				"'></div>") /* 添加div 即数字层 */
			var numberCell = $("#number_cell_" + i + "_" + j + "");//设置数字层样式
			//如果棋盘格的值为0的话,设置数字格的高宽都为0
			if (board[i][j] == 0) {
				numberCell.css("width", "0px");
				numberCell.css("height", "0px");
				numberCell.css("top", getPosTop(i, j) + 50);
				numberCell.css("left", getPosLeft(i, j) + 50);
			}
			// 如果棋盘格的值不为0的话,设置数字	格宽高为100并设置背景色和前景色以及数字值
			else {
				numberCell.css("width", "100px");
				numberCell.css("height", "100px");
				numberCell.css("top", getPosTop(i, j));
				numberCell.css("left", getPosLeft(i, j));
				numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
				numberCell.css("color", getNumberBackgroundColor((board[i][j])*2));
				numberCell.text(board[i][j]);
			}
		}
	}
}

function generateOneNumber() {
	//生成一个随机位置的随机数字
	//1 生成一个随机的位置 x坐标 y坐标
	var randx = parseInt(Math.floor(Math.random() * 4))
	var randy = parseInt(Math.floor(Math.random() * 4))
	//定义一个死循环,完成就生成随机空格子
	while (true) {
		//如果当前格子的值为0,满足条件
		if (board[randx][randy] == 0) {
			break;
		}
		//否则重新随机一个位置  直到满足格子为0的条件
		var randx = parseInt(Math.floor(Math.random() * 4));
		var randy = parseInt(Math.floor(Math.random() * 4));
	}
	//2 生成一个随机的数字(根据游戏规则,新生成的数字只能为2或4)
	var randNumber = Math.random() < 0.5 ? 2 : 4;

	//3 在随机的位置上显示出随机的数字
	// 在随机位置显示随机的数字
	board[randx][randy] = randNumber;
	// 用动画的效果生成数字
	ShowNumberWithAnimation(randx, randy, randNumber);
}
