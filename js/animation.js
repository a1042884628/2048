function ShowNumberWithAnimation(i, j, randNumber) {
	//先获取当前的数字格
	var numberCell = $("#number_cell_" + i + "_" + j);
	//设置当前的数字格的背景色和前背景色及数字值
	numberCell.css("background-color", getNumberBackgroundColor(randNumber));
	numberCell.css("color", getNumberColor(randNumber));
	numberCell.text(randNumber);
	// 设置当前的数字格的显示动画/
	numberCell.animate({
		width: "100px",
		height: "100px",
		top: getPosTop(i, j),
		left: getPosLeft(i, j)
	}, 50);
}

function showMoveAnimation(fromx, fromy, tox, toy) { //参数包括当前的和需要移动过去的
	// 获取到当前数字格的元素   当前的  目标的
	var numberCell = $("#number_cell_" + fromx + "_" + fromy);
	numberCell.animate({
		top: getPosTop(tox, toy),
		left: getPosLeft(tox, toy)
	}, 200);
}
