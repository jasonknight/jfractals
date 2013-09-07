Array.prototype.fill = function (x, y, v, starti, startj) {
	if ( ! starti ) {
		starti = 0;
	}
	if ( ! startj ) {
		startj = 0;
	}
	var matrix = this;
	for ( var i = starti; i <= x; i++ ) {
		for ( var j = startj; j <= y; j++ ) {
			matrix[i][j] = v;
		}
	}
}
Array.prototype.sum = function () {
	var t = 0;
	for (var i = 0; i < this.length; i++ ) {
		t += this[i];
	}
	return t;
}