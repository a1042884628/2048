function getPosTop(i, j) {
	// 第二个盒子距离顶部应该是20+100+20即 20+120
	return 20 + i * 120;
}

function getPosLeft(i, j) {
	return 20 + j * 120;
}

function getNumberBackgroundColor(number) {
	switch (number) {
		case 2:
			return "#eee4da";
			break;
		case 4:
			return "#ede0c8";
			break;
		case 8:
			return "#f2b179";
			break;
		case 16:
			return "#f59563";
			break;
		case 32:
			return "#f67c5f";
			break;
		case 64:
			return "#f65e3b";
			break;
		case 128:
			return "#edcf72";
			break;
		case 256:
			return "#edcc61";
			break;
		case 512:
			return "#9c0";
			break;
		case 1024:
			return "#33b5e5";
			break;
		case 2048:
			return "#09c";
			break;
		case 4096:
			return "#a6c";
			break;
		case 8192:
			return "#93c";
			break;
	}
}

function getNumberColor(number) {
	if (number <= 4) {
		return "#776e65"
	}
	return "white";
}

function canMoveLeft(board) {
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (board[i][j] != 0) {
				//当前数字格的左边第一个的格值为0的或者当前数字格的值与左边第一个数字格的值相等(可以叠加)
				if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveTop(board) {
	for (var i = 1; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j] != 0) {
				// 当前数字格的上边的格值为0 或者 数字格的值与上边第一个数字格的值相等(可以叠加)
				if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function noBlokHorizontalColLeft(row, col1, col2, board) { //判断中间的格子是否为空
	for (var i = col1 + 1; i < col2; i++) {
		if (board[row][i] != 0) {
			return false;
		}
	}
	return true;
}
//                              i   ,    k,   j, board
function noBlokHorizontalColTop(row1, row2, col, board) { //row1:当前行 row2:目标行
	for (var i = row2 + 1; i < row1; i++) {//continue
		if (board[i][col] != 0) {
			return false;
		}
	}
	return true;
}
