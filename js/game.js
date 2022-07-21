// keydown 事件表示键盘被按下
$(document).keydown(function(event) { //event是keydown事件自带的
	switch (event.keyCode) { //根据keyCode取键盘内容
		case 37: //left
			/* 
			moveLeft()方法
			  * 完成向左移动的逻辑
			  * 返回值是Boolean类型,判断是否可以向左移动
			 */
			// if (moveLeft()) {
			// 	// 重新随机的生成两个数字
			// 	generateOneNumber();
			// 	generateOneNumber();
			// 	// 判断当这次移动完成后,游戏是否结束
			// 	// isgameover();
			// }
			break;
		case 38: //top
			if (moveTop()) {
				// 重新随机的生成两个数字
				generateOneNumber();
				generateOneNumber();
				// 判断当这次移动完成后,游戏是否结束
				// isgameover();
			}
			break;
		case 39: //right
			if (moveRight()) {

			}
			break;
		case 40: //down
			if (moveDown()) {

			}
			break;
	}
});
// function isgameover(){}
function moveLeft() {
	//返回值是Boolean类型,判断是否可以向左移动
	if (!canMoveLeft(board)) {
		//当前的格子无法移动
		return false;
	}
	//完成左移动的逻辑
	for (var i = 0; i < 4; i++) { //遍历12个小格子  不遍历第一列
		for (var j = 1; j < 4; j++) { //抛开第一列 因为左移时,第一列无法移动
			if (board[i][j] != 0) { // 代表当前的数字格有值,可能是(2,4,8... 一定不是0)
				//向左移动的逻辑
				for (var k = 0; k < j; k++) {
					//判断当前数字格左边的数字格必须值为0 并且中间的数值格值必须也为0
					if (board[i][k] == 0 && noBlokHorizontalColLeft(i, k, j, board)) {
						// 才能往左移动
						showMoveAnimation(i, j, i, k); //动画 ij表示当前的格子 ik代表目标格子
						board[i][k] = board[i][j]; //把指定格子的值变成当前格子的值
						board[i][j] = 0; // 并当前格子的值改为0  下面方法: 判断中间的格子是否为空
					} else if (board[i][k] == board[i][j] && noBlokHorizontalColLeft(i, k, j, board)) {
						// 才能往左移动
						//move
						showMoveAnimation(i, j, i, k);
						//add
						board[i][k] += board[i][j];
						board[i][j] = 0;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();", 200);
	return true;
};

function moveTop() {
	//返回值是Boolean类型,判断是否可以向上移动
	if (!canMoveTop(board)) {
		//当前的格子无法移动
		return false;
	}
	//完成向上移动逻辑
	for (var i = 1; i < 4; i++) { //遍历12个小格子  不遍历第一行
		for (var j = 0; j < 4; j++) { //抛开第一行 因为上移时,第一行无法移动
			if (board[i][j] != 0) { // 代表当前的数字格有值,可能是(2,4,8... 一定不是0)
				// 向上移动的逻辑
				for (var k = 0; k < i; k++) {
					//判断当前数字格上边的数字格必须值为0 并且中间的数值格值必须也为0 //k比i小1单位
					if (board[k][j] == 0 && noBlokHorizontalColTop(i, k, j, board)) { //row1, row2, col, board
						//才能向上移动
						showMoveAnimation(i,j,k,j); // i,j 当前表格  k,j 目标表格 
						board[k][j] = board[i][j];
						board[i][j]= 0;
					} else if (board[k][j] = board[i][j] && noBlokHorizontalColTop(i, k, j,board)) { //row1, row2, col, board 两个格子相等
					//才能向上移动
						//move
						showMoveAnimation(i, j, k, j);// i,j 当前表格  k,j 目标表格 
						//add
						board[k][j] += board[i][j];
						board[i][j] = 0;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();", 200);
	return true;
}
