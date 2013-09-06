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

Markov.pixels = null;
Markov.settings = {
	markov_level: 1,
	markov_xymin: -5.0,
	markov_xymax: 5.0,
	markov_res: 100,
	fractal_type: 'PlatonicIcosa'
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
	self.postMessage({text: "UpdateProgress", value: 0});
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
			self.postMessage("ERROR: Para not supported ");
			return;
			break;
	}
	var eps 		= 0.6;
	var nn 			= V0.length;
	var level 		= parseInt( Markov.settings.markov_level );
	var xymin			= parseFloat( Markov.settings.markov_xymin );
	var xymax 		= parseFloat( Markov.settings.markov_xymax );
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
	var picl		= [];
	for ( i = 1; i <= res; i++ ) { picl[i] = []; }
		picl.fill( res, res, 0.0, 1, 1);
	var Q = [];

	xysize 			= xymax - xymin;
	delta 			= xysize / res;
	delta2 			= delta /2.0;

	eps1 = 1.0 - eps * eps;
	eps3 = 1.0 + eps * eps;
	eps4 = 1.0 / ( nn * eps3 );
	self.postMessage({text: "UpdateProgress", value: 10});

	fac = Math.pow(eps1,4) / ( nn * eps3 ); //nonuniform
	// Vertices multiplied by epsilon
	console.log(V0.length);
	for ( var i = 1; i <= V0.length; i++) {
		var na = [];
		var ca = V0[i];
		for (var j = 0; j < ca.length; j++ ) {
			na[j] = eps * ca[j];
		}
		Q[i] = na;
	}
	var percent = 15;
	self.postMessage({text: "UpdateProgress", value: percent});
	for ( ip = 1; ip <= res; ip++ ) {
		zr = xymin + ( ip * delta - delta2 );
		if ( ip % Math.ceil( res / 95.0 ) == 0 ) {
			// Maybe do something?
			percent += 1;
			if (percent > 100) {
				percent = 15;
			}
			self.postMessage({text: "UpdateProgress", value: percent});
		}
		for ( iq = 1; iq <= res; iq++ ) {
			zi = xymin + ( iq * delta - delta2 )
	        z2 = zi * zi + zr * zr
	        r[1] = 2 * zr / ( 1.0 + z2 );
	        r[2] = 2 * zi / ( 1.0 + z2 );
	        r[3] = (-1.0 + z2 ) / ( 1.0 + z2 )

	        var result = Markov.fp( 
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
	self.postMessage({text: "UpdateProgress", value: 25});
	
	maxm = 0.0;
	for ( ip = 1; ip <= res; ip++ ) {
		for ( iq = 1; iq <= res; iq++ ) {
			picl[ip][iq] = Math.log10( pic[ip][iq] + 1.0 );
			if ( picl[ip][iq] > maxm ) {
				maxm = picl[ip][iq];
			}
		}
	}
	self.postMessage({text: "UpdateProgress", value: 50});

	// pick divided bt maxm
	var point;
	for ( var i = 1; i <= res; i++) {
		var na = [];
		var ca = picl[i];
		for (var j = 1; j <= res; j++ ) {
			na[j] = ca[j] / maxm;
		}
		picl[i] = na;
	}
	self.postMessage({text: "UpdateProgress", value: 80});
	Markov.pixels = picl;
	self.postMessage({ text: 'Render', data: 
			{
				pixels: picl,
				width: res+1,
				height: res+1,
				sx: 1,
				sy: 1,
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
		for (i = 1; i <= nn; i++) {
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
