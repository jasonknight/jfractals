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
Math.log10 = function ( num ) {
	return Math.log( num ) / Math.LN10;
}
Markov = {};
Markov.arrays = {};
Markov.arrays[ 'tetra' ] = [];
Markov.arrays[ 'tetra' ][ 1 ] = [ 0,0,1.0 ];
Markov.arrays[ 'tetra' ][ 2 ] = [ 0,-0.9428090415820634,-0.3333333333333333 ];
Markov.arrays[ 'tetra' ][ 3 ] = [ 0.8164965809277260,0.4714045207910317,-0.3333333333333333 ];
Markov.arrays[ 'tetra' ][ 4 ] = [ -0.8164965809277260,0.4714045207910317,-0.3333333333333333 ];
Markov.arrays[ 'octa' ] = [];
Markov.arrays[ 'octa' ][ 1 ] = [ 0.0,0.0,1.0 ];
Markov.arrays[ 'octa' ][ 2 ] = [ 1.0,0.0,0.0 ];
Markov.arrays[ 'octa' ][ 3 ] = [ 0.0,1.0,0.0 ];
Markov.arrays[ 'octa' ][ 4 ] = [ -1.0,0.0,0.0 ];
Markov.arrays[ 'octa' ][ 5 ] = [ 0.0,-1.0,0.0 ];
Markov.arrays[ 'octa' ][ 6 ] = [ 0.0,0.0,-1.0 ];
Markov.arrays[ 'cube' ] = [];
Markov.arrays[ 'cube' ][ 1 ] = [ 0,0,1.0 ];
Markov.arrays[ 'cube' ][ 2 ] = [ 0,-0.9428090415820634,0.3333333333333333 ];
Markov.arrays[ 'cube' ][ 3 ] = [ 0.8164965809277260,0.4714045207910317,0.3333333333333333 ];
Markov.arrays[ 'cube' ][ 4 ] = [ -0.8164965809277260,0.4714045207910317,0.3333333333333333 ];
Markov.arrays[ 'cube' ][ 5 ] = [ 0.8164965809277260,-0.4714045207910317,-0.3333333333333333 ];
Markov.arrays[ 'cube' ][ 6 ] = [ -0.8164965809277260,-0.4714045207910317,-0.3333333333333333 ];
Markov.arrays[ 'cube' ][ 7 ] = [ 0,0.9428090415820634,-0.3333333333333333 ];
Markov.arrays[ 'cube' ][ 8 ] = [ 0,0,-1.0 ];
Markov.arrays[ 'icosa' ] = [];
Markov.arrays[ 'icosa' ][ 1 ] = [ 0,0,1.0 ];
Markov.arrays[ 'icosa' ][ 2 ] = [ 0,-0.8944271909999159,0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 3 ] = [ 0.8506508083520399,-0.2763932022500210,0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 4 ] = [ 0.5257311121191336,0.7236067977499790,0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 5 ] = [ -0.5257311121191336,0.7236067977499790,0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 6 ] = [ -0.8506508083520399,-0.2763932022500210,0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 7 ] = [ 0.5257311121191336,-0.7236067977499790,-0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 8 ] = [ -0.5257311121191336,-0.7236067977499790,-0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 9 ] = [ 0.8506508083520399,0.2763932022500210,-0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 10 ] = [ 0,0.8944271909999159,-0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 11 ] = [ -0.8506508083520399,0.2763932022500210,-0.4472135954999579 ];
Markov.arrays[ 'icosa' ][ 12 ] = [ 0,0,-1.0 ];
Markov.arrays[ 'dodeca' ] = [];
Markov.arrays[ 'dodeca' ][ 1 ] = [ 0,0,1.0 ];
Markov.arrays[ 'dodeca' ][ 2 ] = [ 0.0,-0.666667,0.745356 ];
Markov.arrays[ 'dodeca' ][ 3 ] = [ 0.57735,0.333333,0.745356 ];
Markov.arrays[ 'dodeca' ][ 4 ] = [ -0.57735,0.333333,0.745356 ];
Markov.arrays[ 'dodeca' ][ 5 ] = [ 0.57735,-0.745356,0.333333 ];
Markov.arrays[ 'dodeca' ][ 6 ] = [ -0.57735,-0.745356,0.333333 ];
Markov.arrays[ 'dodeca' ][ 7 ] = [ 0.356822,0.872678,0.333333 ];
Markov.arrays[ 'dodeca' ][ 8 ] = [ 0.934172,-0.127322,0.333333 ];
Markov.arrays[ 'dodeca' ][ 9 ] = [ -0.934172,-0.127322,0.333333 ];
Markov.arrays[ 'dodeca' ][ 10 ] = [ -0.356822,0.872678,0.333333 ];
Markov.arrays[ 'dodeca' ][ 11 ] = [ 0.356822,-0.872678,-0.333333 ];
Markov.arrays[ 'dodeca' ][ 12 ] = [ -0.356822,-0.872678,-0.333333 ];
Markov.arrays[ 'dodeca' ][ 13 ] = [ 0.57735,0.745356,-0.333333 ];
Markov.arrays[ 'dodeca' ][ 14 ] = [ 0.934172,0.127322,-0.333333 ];
Markov.arrays[ 'dodeca' ][ 15 ] = [ -0.934172,0.127322,-0.333333 ];
Markov.arrays[ 'dodeca' ][ 16 ] = [ -0.57735,0.745356,-0.333333 ];
Markov.arrays[ 'dodeca' ][ 17 ] = [ 0.57735,-0.333333,-0.745356 ];
Markov.arrays[ 'dodeca' ][ 18 ] = [ -0.57735,-0.333333,-0.745356 ];
Markov.arrays[ 'dodeca' ][ 19 ] = [ 0.0,0.666667,-0.745356 ];
Markov.arrays[ 'dodeca' ][ 20 ] = [ 0,0,-1.0 ];
function paraMatrix(alpha) {

Markov.arrays[ 'para' ] = [];
for ( var i = 1; i <= 24; i++ ) {
  Markov.arrays[ 'para' ][i] = [];
  for ( var j = 1; j <= 4; j++) {
    Markov.arrays[ 'para' ][i][j] = [];
  }
}
Markov.arrays[ 'para' ][1][1][1] = 1.0;
Markov.arrays[ 'para' ][1][1][2] = 0;
Markov.arrays[ 'para' ][1][1][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][1][1][4] =  alpha;
Markov.arrays[ 'para' ][1][2][1] = 0;
Markov.arrays[ 'para' ][1][2][2] = 1.0;
Markov.arrays[ 'para' ][1][2][3] = 0;
Markov.arrays[ 'para' ][1][2][4] = 0;
Markov.arrays[ 'para' ][1][3][1] =  alpha;
Markov.arrays[ 'para' ][1][3][2] = 0;
Markov.arrays[ 'para' ][1][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][1][3][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][1][4][1] =  alpha;
Markov.arrays[ 'para' ][1][4][2] = 0;
Markov.arrays[ 'para' ][1][4][3] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][1][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][2][1][1] = 1.0;
Markov.arrays[ 'para' ][2][1][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][2][1][3] = 0;
Markov.arrays[ 'para' ][2][1][4] =  alpha;
Markov.arrays[ 'para' ][2][2][1] =  alpha;
Markov.arrays[ 'para' ][2][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][2][2][3] = 0;
Markov.arrays[ 'para' ][2][2][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][2][3][1] = 0;
Markov.arrays[ 'para' ][2][3][2] = 0;
Markov.arrays[ 'para' ][2][3][3] = 1.0;
Markov.arrays[ 'para' ][2][3][4] = 0;
Markov.arrays[ 'para' ][2][4][1] =  alpha;
Markov.arrays[ 'para' ][2][4][2] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][2][4][3] = 0;
Markov.arrays[ 'para' ][2][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][3][1][1] = 1.0;
Markov.arrays[ 'para' ][3][1][2] =  alpha;
Markov.arrays[ 'para' ][3][1][3] = 0;
Markov.arrays[ 'para' ][3][1][4] =  alpha;
Markov.arrays[ 'para' ][3][2][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][3][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][3][2][3] = 0;
Markov.arrays[ 'para' ][3][2][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][3][3][1] = 0;
Markov.arrays[ 'para' ][3][3][2] = 0;
Markov.arrays[ 'para' ][3][3][3] = 1.0;
Markov.arrays[ 'para' ][3][3][4] = 0;
Markov.arrays[ 'para' ][3][4][1] =  alpha;
Markov.arrays[ 'para' ][3][4][2] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][3][4][3] = 0;
Markov.arrays[ 'para' ][3][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][4][1][1] = 1.0;
Markov.arrays[ 'para' ][4][1][2] = 0;
Markov.arrays[ 'para' ][4][1][3] =  alpha;
Markov.arrays[ 'para' ][4][1][4] =  alpha;
Markov.arrays[ 'para' ][4][2][1] = 0;
Markov.arrays[ 'para' ][4][2][2] = 1.0;
Markov.arrays[ 'para' ][4][2][3] = 0;
Markov.arrays[ 'para' ][4][2][4] = 0;
Markov.arrays[ 'para' ][4][3][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][4][3][2] = 0;
Markov.arrays[ 'para' ][4][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][4][3][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][4][4][1] =  alpha;
Markov.arrays[ 'para' ][4][4][2] = 0;
Markov.arrays[ 'para' ][4][4][3] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][4][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][5][1][1] = 1.0;
Markov.arrays[ 'para' ][5][1][2] = 0;
Markov.arrays[ 'para' ][5][1][3] = 0;
Markov.arrays[ 'para' ][5][1][4] = 0;
Markov.arrays[ 'para' ][5][2][1] = 0;
Markov.arrays[ 'para' ][5][2][2] = 1.0;
Markov.arrays[ 'para' ][5][2][3] =  alpha;
Markov.arrays[ 'para' ][5][2][4] =  alpha;
Markov.arrays[ 'para' ][5][3][1] = 0;
Markov.arrays[ 'para' ][5][3][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][5][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][5][3][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][5][4][1] = 0;
Markov.arrays[ 'para' ][5][4][2] =  alpha;
Markov.arrays[ 'para' ][5][4][3] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][5][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][6][1][1] = 1.0;
Markov.arrays[ 'para' ][6][1][2] = 0;
Markov.arrays[ 'para' ][6][1][3] = 0;
Markov.arrays[ 'para' ][6][1][4] = 0;
Markov.arrays[ 'para' ][6][2][1] = 0;
Markov.arrays[ 'para' ][6][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][6][2][3] =  alpha;
Markov.arrays[ 'para' ][6][2][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][6][3][1] = 0;
Markov.arrays[ 'para' ][6][3][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][6][3][3] = 1.0;
Markov.arrays[ 'para' ][6][3][4] =  alpha;
Markov.arrays[ 'para' ][6][4][1] = 0;
Markov.arrays[ 'para' ][6][4][2] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][6][4][3] =  alpha;
Markov.arrays[ 'para' ][6][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][7][1][1] = 1.0;
Markov.arrays[ 'para' ][7][1][2] = 0;
Markov.arrays[ 'para' ][7][1][3] = 0;
Markov.arrays[ 'para' ][7][1][4] = 0;
Markov.arrays[ 'para' ][7][2][1] = 0;
Markov.arrays[ 'para' ][7][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][7][2][3] =  alpha;
Markov.arrays[ 'para' ][7][2][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][7][3][1] = 0;
Markov.arrays[ 'para' ][7][3][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][7][3][3] = 1.0;
Markov.arrays[ 'para' ][7][3][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][7][4][1] = 0;
Markov.arrays[ 'para' ][7][4][2] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][7][4][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][7][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][8][1][1] = 1.0;
Markov.arrays[ 'para' ][8][1][2] = 0;
Markov.arrays[ 'para' ][8][1][3] = 0;
Markov.arrays[ 'para' ][8][1][4] = 0;
Markov.arrays[ 'para' ][8][2][1] = 0;
Markov.arrays[ 'para' ][8][2][2] = 1.0;
Markov.arrays[ 'para' ][8][2][3] =  alpha;
Markov.arrays[ 'para' ][8][2][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][8][3][1] = 0;
Markov.arrays[ 'para' ][8][3][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][8][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][8][3][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][8][4][1] = 0;
Markov.arrays[ 'para' ][8][4][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][8][4][3] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][8][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][9][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][9][1][2] =  alpha;
Markov.arrays[ 'para' ][9][1][3] = 0;
Markov.arrays[ 'para' ][9][1][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][9][2][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][9][2][2] = 1.0;
Markov.arrays[ 'para' ][9][2][3] = 0;
Markov.arrays[ 'para' ][9][2][4] =  alpha;
Markov.arrays[ 'para' ][9][3][1] = 0;
Markov.arrays[ 'para' ][9][3][2] = 0;
Markov.arrays[ 'para' ][9][3][3] = 1.0;
Markov.arrays[ 'para' ][9][3][4] = 0;
Markov.arrays[ 'para' ][9][4][1] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][9][4][2] =  alpha;
Markov.arrays[ 'para' ][9][4][3] = 0;
Markov.arrays[ 'para' ][9][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][10][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][10][1][2] = 0;
Markov.arrays[ 'para' ][10][1][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][10][1][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][10][2][1] = 0;
Markov.arrays[ 'para' ][10][2][2] = 1.0;
Markov.arrays[ 'para' ][10][2][3] = 0;
Markov.arrays[ 'para' ][10][2][4] = 0;
Markov.arrays[ 'para' ][10][3][1] =  alpha;
Markov.arrays[ 'para' ][10][3][2] = 0;
Markov.arrays[ 'para' ][10][3][3] = 1.0;
Markov.arrays[ 'para' ][10][3][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][10][4][1] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][10][4][2] = 0;
Markov.arrays[ 'para' ][10][4][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][10][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][11][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][11][1][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][11][1][3] = 0;
Markov.arrays[ 'para' ][11][1][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][11][2][1] =  alpha;
Markov.arrays[ 'para' ][11][2][2] = 1.0;
Markov.arrays[ 'para' ][11][2][3] = 0;
Markov.arrays[ 'para' ][11][2][4] =  alpha;
Markov.arrays[ 'para' ][11][3][1] = 0;
Markov.arrays[ 'para' ][11][3][2] = 0;
Markov.arrays[ 'para' ][11][3][3] = 1.0;
Markov.arrays[ 'para' ][11][3][4] = 0;
Markov.arrays[ 'para' ][11][4][1] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][11][4][2] =  alpha;
Markov.arrays[ 'para' ][11][4][3] = 0;
Markov.arrays[ 'para' ][11][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][12][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][12][1][2] = 0;
Markov.arrays[ 'para' ][12][1][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][12][1][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][12][2][1] = 0;
Markov.arrays[ 'para' ][12][2][2] = 1.0;
Markov.arrays[ 'para' ][12][2][3] = 0;
Markov.arrays[ 'para' ][12][2][4] = 0;
Markov.arrays[ 'para' ][12][3][1] =  alpha;
Markov.arrays[ 'para' ][12][3][2] = 0;
Markov.arrays[ 'para' ][12][3][3] = 1.0;
Markov.arrays[ 'para' ][12][3][4] =  alpha;
Markov.arrays[ 'para' ][12][4][1] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][12][4][2] = 0;
Markov.arrays[ 'para' ][12][4][3] =  alpha;
Markov.arrays[ 'para' ][12][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][13][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][13][1][2] = 0;
Markov.arrays[ 'para' ][13][1][3] =  alpha;
Markov.arrays[ 'para' ][13][1][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][13][2][1] = 0;
Markov.arrays[ 'para' ][13][2][2] = 1.0;
Markov.arrays[ 'para' ][13][2][3] = 0;
Markov.arrays[ 'para' ][13][2][4] = 0;
Markov.arrays[ 'para' ][13][3][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][13][3][2] = 0;
Markov.arrays[ 'para' ][13][3][3] = 1.0;
Markov.arrays[ 'para' ][13][3][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][13][4][1] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][13][4][2] = 0;
Markov.arrays[ 'para' ][13][4][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][13][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][14][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][14][1][2] =  alpha;
Markov.arrays[ 'para' ][14][1][3] = 0;
Markov.arrays[ 'para' ][14][1][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][14][2][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][14][2][2] = 1.0;
Markov.arrays[ 'para' ][14][2][3] = 0;
Markov.arrays[ 'para' ][14][2][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][14][3][1] = 0;
Markov.arrays[ 'para' ][14][3][2] = 0;
Markov.arrays[ 'para' ][14][3][3] = 1.0;
Markov.arrays[ 'para' ][14][3][4] = 0;
Markov.arrays[ 'para' ][14][4][1] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][14][4][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][14][4][3] = 0;
Markov.arrays[ 'para' ][14][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][15][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][15][1][2] = 0;
Markov.arrays[ 'para' ][15][1][3] =  alpha;
Markov.arrays[ 'para' ][15][1][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][15][2][1] = 0;
Markov.arrays[ 'para' ][15][2][2] = 1.0;
Markov.arrays[ 'para' ][15][2][3] = 0;
Markov.arrays[ 'para' ][15][2][4] = 0;
Markov.arrays[ 'para' ][15][3][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][15][3][2] = 0;
Markov.arrays[ 'para' ][15][3][3] = 1.0;
Markov.arrays[ 'para' ][15][3][4] =  alpha;
Markov.arrays[ 'para' ][15][4][1] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][15][4][2] = 0;
Markov.arrays[ 'para' ][15][4][3] =  alpha;
Markov.arrays[ 'para' ][15][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][16][1][1] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][16][1][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][16][1][3] = 0;
Markov.arrays[ 'para' ][16][1][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][16][2][1] =  alpha;
Markov.arrays[ 'para' ][16][2][2] = 1.0;
Markov.arrays[ 'para' ][16][2][3] = 0;
Markov.arrays[ 'para' ][16][2][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][16][3][1] = 0;
Markov.arrays[ 'para' ][16][3][2] = 0;
Markov.arrays[ 'para' ][16][3][3] = 1.0;
Markov.arrays[ 'para' ][16][3][4] = 0;
Markov.arrays[ 'para' ][16][4][1] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][16][4][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][16][4][3] = 0;
Markov.arrays[ 'para' ][16][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][17][1][1] = 1.0;
Markov.arrays[ 'para' ][17][1][2] = 0;
Markov.arrays[ 'para' ][17][1][3] = 0;
Markov.arrays[ 'para' ][17][1][4] = 0;
Markov.arrays[ 'para' ][17][2][1] = 0;
Markov.arrays[ 'para' ][17][2][2] = 1.0;
Markov.arrays[ 'para' ][17][2][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][17][2][4] =  alpha;
Markov.arrays[ 'para' ][17][3][1] = 0;
Markov.arrays[ 'para' ][17][3][2] =  alpha;
Markov.arrays[ 'para' ][17][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][17][3][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][17][4][1] = 0;
Markov.arrays[ 'para' ][17][4][2] =  alpha;
Markov.arrays[ 'para' ][17][4][3] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][17][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][18][1][1] = 1.0;
Markov.arrays[ 'para' ][18][1][2] = 0;
Markov.arrays[ 'para' ][18][1][3] = 0;
Markov.arrays[ 'para' ][18][1][4] = 0;
Markov.arrays[ 'para' ][18][2][1] = 0;
Markov.arrays[ 'para' ][18][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][18][2][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][18][2][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][18][3][1] = 0;
Markov.arrays[ 'para' ][18][3][2] =  alpha;
Markov.arrays[ 'para' ][18][3][3] = 1.0;
Markov.arrays[ 'para' ][18][3][4] =  alpha;
Markov.arrays[ 'para' ][18][4][1] = 0;
Markov.arrays[ 'para' ][18][4][2] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][18][4][3] =  alpha;
Markov.arrays[ 'para' ][18][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][19][1][1] = 1.0;
Markov.arrays[ 'para' ][19][1][2] = 0;
Markov.arrays[ 'para' ][19][1][3] = 0;
Markov.arrays[ 'para' ][19][1][4] = 0;
Markov.arrays[ 'para' ][19][2][1] = 0;
Markov.arrays[ 'para' ][19][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][19][2][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][19][2][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][19][3][1] = 0;
Markov.arrays[ 'para' ][19][3][2] =  alpha;
Markov.arrays[ 'para' ][19][3][3] = 1.0;
Markov.arrays[ 'para' ][19][3][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][19][4][1] = 0;
Markov.arrays[ 'para' ][19][4][2] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][19][4][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][19][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][20][1][1] = 1.0;
Markov.arrays[ 'para' ][20][1][2] = 0;
Markov.arrays[ 'para' ][20][1][3] = 0;
Markov.arrays[ 'para' ][20][1][4] = 0;
Markov.arrays[ 'para' ][20][2][1] = 0;
Markov.arrays[ 'para' ][20][2][2] = 1.0;
Markov.arrays[ 'para' ][20][2][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][20][2][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][20][3][1] = 0;
Markov.arrays[ 'para' ][20][3][2] =  alpha;
Markov.arrays[ 'para' ][20][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][20][3][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][20][4][1] = 0;
Markov.arrays[ 'para' ][20][4][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][20][4][3] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][20][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][21][1][1] = 1.0;
Markov.arrays[ 'para' ][21][1][2] = 0;
Markov.arrays[ 'para' ][21][1][3] = -1.0 * alpha;
Markov.arrays[ 'para' ][21][1][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][21][2][1] = 0;
Markov.arrays[ 'para' ][21][2][2] = 1.0;
Markov.arrays[ 'para' ][21][2][3] = 0;
Markov.arrays[ 'para' ][21][2][4] = 0;
Markov.arrays[ 'para' ][21][3][1] =  alpha;
Markov.arrays[ 'para' ][21][3][2] = 0;
Markov.arrays[ 'para' ][21][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][21][3][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][21][4][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][21][4][2] = 0;
Markov.arrays[ 'para' ][21][4][3] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][21][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][22][1][1] = 1.0;
Markov.arrays[ 'para' ][22][1][2] = -1.0 * alpha;
Markov.arrays[ 'para' ][22][1][3] = 0;
Markov.arrays[ 'para' ][22][1][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][22][2][1] =  alpha;
Markov.arrays[ 'para' ][22][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][22][2][3] = 0;
Markov.arrays[ 'para' ][22][2][4] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][22][3][1] = 0;
Markov.arrays[ 'para' ][22][3][2] = 0;
Markov.arrays[ 'para' ][22][3][3] = 1.0;
Markov.arrays[ 'para' ][22][3][4] = 0;
Markov.arrays[ 'para' ][22][4][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][22][4][2] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][22][4][3] = 0;
Markov.arrays[ 'para' ][22][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][23][1][1] = 1.0;
Markov.arrays[ 'para' ][23][1][2] =  alpha;
Markov.arrays[ 'para' ][23][1][3] = 0;
Markov.arrays[ 'para' ][23][1][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][23][2][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][23][2][2] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][23][2][3] = 0;
Markov.arrays[ 'para' ][23][2][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][23][3][1] = 0;
Markov.arrays[ 'para' ][23][3][2] = 0;
Markov.arrays[ 'para' ][23][3][3] = 1.0;
Markov.arrays[ 'para' ][23][3][4] = 0;
Markov.arrays[ 'para' ][23][4][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][23][4][2] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][23][4][3] = 0;
Markov.arrays[ 'para' ][23][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
Markov.arrays[ 'para' ][24][1][1] = 1.0;
Markov.arrays[ 'para' ][24][1][2] = 0;
Markov.arrays[ 'para' ][24][1][3] =  alpha;
Markov.arrays[ 'para' ][24][1][4] = -1.0 * alpha;
Markov.arrays[ 'para' ][24][2][1] = 0;
Markov.arrays[ 'para' ][24][2][2] = 1.0;
Markov.arrays[ 'para' ][24][2][3] = 0;
Markov.arrays[ 'para' ][24][2][4] = 0;
Markov.arrays[ 'para' ][24][3][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][24][3][2] = 0;
Markov.arrays[ 'para' ][24][3][3] = 1.0 - 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][24][3][4] = 0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][24][4][1] = -1.0 * alpha;
Markov.arrays[ 'para' ][24][4][2] = 0;
Markov.arrays[ 'para' ][24][4][3] = -0.5 * Math.pow(alpha,2);
Markov.arrays[ 'para' ][24][4][4] = 0.5 *(2.0 +  Math.pow(alpha,2));
return Markov.arrays[ 'para' ];
}

Markov.pixels = null;
Markov.settings = {
	markov_level: 1,
	markov_xymin: -5.0,
	markov_xymax: 5.0,
	markov_res: 100,
	fractal_type: 'PlatonicIcosa',
	starty: 1
}
self.addEventListener('message',function (e) {
		if ( e.data.text == "Settings") {
			Markov.settings = e.data.settings;
		} else if ( e.data.text == "Run" ) {
			Markov.generate();
		}
		self.postMessage("ACK " + e.data.text);
});
Markov.LOG10 = function( num ) {
	return Math.log( num ) / Math.LN10;
}
Markov.generate = function () {
	self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: 0});
	var V0;
	switch ( Markov.settings.fractal_type ) {
		case 'PlatonicCube':
			V0 = Markov.arrays[ 'cube' ];
			break;
		case 'PlatonicDodeca':
			V0 = Markov.arrays[ 'dodeca' ];
			break;
		case 'PlatonicIcosa':
			V0 = Markov.arrays[ 'icosa' ];
			break;
		case 'PlatonicOcta':
			V0 = Markov.arrays[ 'octa' ];
			break;
		case 'PlatonicTetra':
			V0 = Markov.arrays[ 'tetra' ];
			break;
		case 'Para':
			Markov.generatePara();
			return;
			break;
	}
	var eps 		= 0.6;
	var nn 			= V0.length;
	var level 		= parseInt( Markov.settings.markov_level );
	var xymin			= Markov.settings.markov_xymin;
	var xymax 		= Markov.settings.markov_xymax;
	if ( Markov.settings.display_type == 'Spherical') {
		xymin = -1.0;
		xymax = 1.0;
	}
	var res				= parseInt( Markov.settings.markov_res);
	if ( xymin < -5.0 ) {
		self.postMessage("ERROR: Markov XYmin must be BETWEEN -1.0 and -5.0 ");
		return;
	}
	if ( xymin > 5.0 ) {
		self.postMessage("ERROR Markov XYmin must be BETWEEN 1.0 and 5.0 ");
		return;
	}
    var eps1, 
    	eps3, 
    	eps4, 
    	fac, 
    	delta, 
    	delta2, 
    	xysize, 
    	zi, 
    	zr, 
    	z2, 
    	ip,
    	iq;
	var r 			= [];
	var maxm;
	var pic		= [];
	for ( i = 1; i <= res; i++ ) { pic[i] = []; }
		pic.fill( res, res, 0.0, 1, 1 );
	//self.postMessage({text: "Debug",id: Markov.settings.id, value: pic});
	var picl		= [];
	for ( i = 1; i <= res; i++ ) { picl[i] = []; }
		picl.fill( res, res, 0.0, 1, 1);
	//self.postMessage({text: "Debug",id: Markov.settings.id, value: picl});
	var Q = [];

	xysize 			= xymax - xymin;
	delta 			= xysize / res;
	delta2 			= delta /2.0;

	eps1 = 1.0 - eps * eps;
	eps3 = 1.0 + eps * eps;
	eps4 = 1.0 / ( nn * eps3 );
	self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: 10});

	fac = Math.pow(eps1,4) / ( nn * eps3 ); //nonuniform
	// Vertices multiplied by epsilon
	for ( var i = 1; i < V0.length; i++) {
		var na = [];
		var ca = V0[i];
		for (var j = 0; j < ca.length; j++ ) {
			na[j] = eps * ca[j];
		}
		Q[i] = na;
	}
	var percent = 15;
	self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: percent});
	var result;
	
	for ( ip = Markov.settings.starty; ip <= Markov.settings.endy; ip++ ) {
		zr = xymin + ( ip * delta - delta2 );
		if ( ip % Math.ceil( res / 95.0 ) == 0 ) {
			// Maybe do something?
			percent += 1;
			if (percent > 100) {
				percent = 15;
			}
			self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: percent});
		}
		for ( iq = 1; iq <= res; iq++ ) {
			zi = xymin + ( iq * delta - delta2 )
      z2 = zi * zi + zr * zr
      if (Markov.settings.display_type == 'Spherical') {
      	if (  z2 < 1.0 ) {
      		r[1] = zr;
		      r[2] = zi;
		      r[3] = Math.sqrt(1.0 - z2);
      	} else {
      		pic[ip][iq] = 0.0;
      		continue;
      	}
      	
      } else {
      	r[1] = 2 * zr / ( 1.0 + z2 );
      	r[2] = 2 * zi / ( 1.0 + z2 );
      	r[3] = (-1.0 + z2 ) / ( 1.0 + z2 );
      }
      
      //self.postMessage(r.join(","));

      result = Markov.fp( 
      								fac,
      								eps1,
      								eps3, 
      								Q, 
      								nn, 
      								level, 
      								r 
      							);
      pic[ip][iq] = result;
		}
	}
	self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: 50});
	
	// maxm = 0.0;
	// for ( ip = Markov.settings.starty; ip <= Markov.settings.endy; ip++ ) {
	// 	for ( iq = 1; iq <= res; iq++ ) {
	// 		picl[ip][iq] = Math.log10( pic[ip][iq] + 1.0 );
	// 		if ( picl[ip][iq] > maxm ) {
	// 			maxm = picl[ip][iq];
	// 		}
	// 	}
	// }
	 self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: 65});

	// // pick divided bt maxm
	// var point;
	// for ( var i = Markov.settings.starty; i <= Markov.settings.endy; i++) {
	// 	var na = [];
	// 	var ca = picl[i];
	// 	for (var j = 1; j <= res; j++ ) {
	// 		na[j] = ca[j] / maxm;
	// 	}
	// 	picl[i] = na;
	// }
	self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: 95});
	Markov.pixels = picl;
	self.postMessage({ text: 'Render', data: 
			{
				id: Markov.settings.id,
				pixels: pic,
				width: res+1,
				height: Markov.settings.endy,
				sx: 1,
				sy: Markov.settings.starty,
				endy: Markov.settings.endy,
			}
	 });
}
Markov.fp = function (fac, eps1, eps3, Q, nn, n, v) {
	var i,j,b,den,den3,dot;
	var w 		= [];
	var vq 		= [];
	if ( n == 0 ) {
		b = 1.0;
	} else {
		b = 0.0;
		for (i = 1; i < nn; i++) {
			//console.log("Q", Q);
			for ( j = 1; j <= 3; j++ ) {
				vq[j] = Q[i][j - 1];
			}
			//console.log("vq",vq);
			dot = vq[1] * v[1] + vq[2] * v[2] + vq[3] * v[3];
			den = 1.0 / ( eps3 - 2.0 * dot );
			den3 = Math.pow(den,3);
			//console.log("dot",dot,"den",den,"den3",den3);
			// v11[4] = 5;
			for ( var ti = 1; ti <= 3; ti++ ) {
				w[ti] = den * ( eps1 * v[ti] - 2.0 * ( 1.0 - dot ) * vq[ti] );
			}
			b = b + Markov.fp(fac, eps1, eps3, Q,nn, n - 1, w) * den3;
		}
		b = fac * b;
	}
	return b;
}
Markov.generatePara = function () {
	var alpha = Markov.settings.alpha;
	alpha = 5.0 * alpha;
	var level = parseInt(Markov.settings.markov_level);
	var xylimit = Markov.settings.markov_xymax;
	var res = parseInt(Markov.settings.markov_res);
	var fac,delta,delta2,zi,zr,z2,xysize,maxm;
	var r = [];
	var pic		= [];
	var nn = 24;
	var Q = paraMatrix(alpha);
	for ( i = 1; i <= res; i++ ) { pic[i] = []; }
		pic.fill( res, res, 0.0, 1, 1 );
	//self.postMessage({text: "Debug",id: Markov.settings.id, value: pic});
	var picl		= [];
	for ( i = 1; i <= res; i++ ) { picl[i] = []; }
		picl.fill( res, res, 0.0, 1, 1);
  if (Markov.settings.display_type == 'Spherical') {
  	xylimit = 1.0;
  }
  xysize = 2.0 * xylimit;
  delta = xysize / res;
  delta2 = delta / 2.0;
  fac = 1.0 / 24.0;
  var percent = 15;
  self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: percent});
  if ( Markov.settings.display_type == 'Stereographic' ) {
  	for ( var ip = Markov.settings.starty; ip <= Markov.settings.endy; ip++ ) {
  		if ( ip % Math.ceil( res / 95.0 ) == 0 ) {
				// Maybe do something?
				percent += 1;
				if (percent > 100) {
					percent = 15;
				}
				self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: percent});
			}
			zr = -xylimit + ( ip * delta - delta2 );
			if ( isNaN(zr) )
				throw "zr is nan( " + zr +','+ip+','+xylimit+','+delta+','+delta2+')';
			for ( var iq = 1; iq <= res; iq++ ) {
			 zi = -xylimit + ( iq*delta - delta2);
			 if ( isNaN(zi) )
			 	throw "zi is nan";
        z2 = zi*zi + zr*zr;
        if ( isNaN(z2) )
				 	throw "z2 is nan";
        r[1] = 2*zr/(1.0 + z2);
        r[2] = 2*zi/(1.0 + z2);
        r[3] = (-1.0 + z2) / (1.0 + z2);
        result = Markov.fp2( 
        											fac,
				      								Q, 
				      								level, 
				      								r 
				      							);
				  pic[ip][iq] = result;
			}
  	}
  } else {

  	for ( var ip = Markov.settings.starty; ip <= Markov.settings.endy; ip++ ) {
  		if ( ip % Math.ceil( res / 95.0 ) == 0 ) {
				// Maybe do something?
				percent += 1;
				if (percent > 100) {
					percent = 15;
				}
				self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: percent});
			}
			zr = -xylimit + ( ip * delta - delta2 );
			
			for ( var iq = 1; iq <= res; iq++ ) {
				zi = -xylimit + ( iq * delta - delta2);
        z2 = zi*zi + zr*zr;
        
        if ( z2 < 1 ) {
        	r[1] = zr;
	        r[2] = zi;
	        r[3] = Math.sqrt( 1.0 - z2);
        	result = Markov.fp2( 
        											fac,
				      								Q, 
				      								level, 
				      								r 
				      							);
				  pic[ip][iq] = result;
        }
        
			}
  	}
  }
  self.postMessage({text: "UpdateProgress",id: Markov.settings.id, value: 95});
	Markov.pixels = picl;
	self.postMessage({ text: 'Render', data: 
			{
				id: Markov.settings.id,
				pixels: pic,
				width: res+1,
				height: Markov.settings.endy,
				sx: 1,
				sy: Markov.settings.starty,
				endy: Markov.settings.endy,
			}
	 });
}
Markov.fp2 = function (fac,L,n,v) {
	var A,b,den;
	var u = [0,0,0,0];
  var i,j;
  var w = [0,0,0];
	if (n == 0) {
		b = 1.0;
		return b;
	} else {
    b = 0.0;
    for ( i = 1; i <= 24; i++ ) {
    	//self.postMessage({text: 'Debug', obj: L});
        for ( j = 1; j <= 4; j++ ) {
            u[j] = L[i][j][1] * v[1] + L[i][j][2] * v[2] + L[i][j][3] * v[3] + L[i][j][4];
            if ( isNaN(u[j]) ) {
              parts = [L[i][j][1],v[1] ,L[i][j][2],v[2] ,L[i][j][3] , v[3] , L[i][j][4]];
              throw "u["+j+"] is NaN (" + parts.join(',') + ") V is ";
            } 
        }
        A = Math.sqrt (u[1] *u[1] + u[2] * u[2] + u[3] * u[3] );
        for ( j = 1; j <= 3; j++ ) {
            w[j] = u[j] / A;
        }
        den = u[4];
        if ( isNaN(u[4]))
          throw 'u4 is NAN';
        //den = ( L[i][4][1] * v[1] + L[i][4][2] * v[2] + L[i][4][3] * v[3] + L[i][4][4] );
        den = den * den
        b = b + Markov.fp2(fac,L, n-1, w) / den	;
    }
    b = b / 24.0
  }
  return b;
}