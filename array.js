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
Array.prototype.max2d = function ( si, ei, sj, ej, calc_maxm, update_array ) {
	var maxm = 0.0;
	for ( var ip = si; ip <= ei; ip++ ) {
		for ( iq = sj; iq <= ej; iq++ ) {
			if ( calc_maxm ) {
				this[ip][iq] = calc_maxm.call(this,this[ip][iq]);
			}
			//this[ip][iq] = Math.log10( pic[ip][iq] + 1.0 );
			if ( this[ip][iq] > maxm ) {
				maxm = this[ip][iq];
			}
		}
	}

  if ( update_array ) {
  	for ( var i = si; i <= ei; i++) {
			var na = [];
			var ca = this[i];
			for (var j = sj; j <= ej; j++ ) {
				na[j] = update_array.call(this, maxm, ca[j]);
				//ca[j] / maxm;
			}
			this[i] = na;
		}
  }
	
}