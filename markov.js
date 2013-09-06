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
Markov.V0 = [];
Markov.V0[ 1 ] = [ 0,0,1.0 ];
Markov.V0[ 2 ] = [ 0.6666666666666667,0,0.7453559924999299 ];
Markov.V0[ 3 ] = [ -0.3333333333333333,0.5773502691896258,0.7453559924999299 ];
Markov.V0[ 4 ] = [ -0.3333333333333333,-0.5773502691896258,0.7453559924999299 ];
Markov.V0[ 5 ] = [ 0.7453559924999299,0.5773502691896258,0.3333333333333333 ];
Markov.V0[ 6 ] = [ 0.7453559924999299,-0.5773502691896258,0.3333333333333333 ];
Markov.V0[ 7 ] = [ -0.8726779962499649,0.3568220897730899,0.3333333333333333 ];
Markov.V0[ 8 ] = [ 0.1273220037500351,0.9341723589627157,0.3333333333333333 ];
Markov.V0[ 9 ] = [ 0.1273220037500351,-0.9341723589627157,0.3333333333333333 ];
Markov.V0[ 10 ] = [ -0.8726779962499649,-0.3568220897730899,0.3333333333333333 ];
Markov.V0[ 11 ] = [ 0.8726779962499649,0.3568220897730899,-0.3333333333333333 ];
Markov.V0[ 12 ] = [ 0.8726779962499649,-0.3568220897730899,-0.3333333333333333 ];
Markov.V0[ 13 ] = [ -0.7453559924999299,0.5773502691896258,-0.3333333333333333 ];
Markov.V0[ 14 ] = [ -0.1273220037500351,0.9341723589627157,-0.3333333333333333 ];
Markov.V0[ 15 ] = [ -0.1273220037500351,-0.9341723589627157,-0.3333333333333333 ];
Markov.V0[ 16 ] = [ -0.7453559924999299,-0.5773502691896258,-0.3333333333333333 ];
Markov.V0[ 17 ] = [ 0.3333333333333333,0.5773502691896258,-0.7453559924999299 ];
Markov.V0[ 18 ] = [ 0.3333333333333333,-0.5773502691896258,-0.7453559924999299 ];
Markov.V0[ 19 ] = [ -0.6666666666666667,0,-0.7453559924999299 ];
Markov.V0[ 20 ] = [ 0,0,-1.0 ];
Markov.pixels = null;
Markov.settings = {
	markov_level: 1,
	markov_xymin: -5.0,
	markov_xymax: 5.0,
	markov_res: 100
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
	var V0 			= Markov.V0;
	var eps 		= 0.6;
	var nn 			= 20;
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
	for ( var i = 1; i < V0.length; i++) {
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
