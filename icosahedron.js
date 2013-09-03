(function ($) {
	/*
	 * Hyperbolic Icosahedron Fractal
	 * Makes my beloved Icosahedron 
	 */
	function fillMatrix( matrix, x, y, v ) {
		for ( var i = 1; i <= x; i++ ) {
			for ( var j = 1; j <= y; j++ ) {
				matrix[i][j] = v;
			}
		}
	}
	function RANDOM() {
		return Math.random();
	}
	function LOG10( num ) {
		return Math.log( num ) / Math.LN10;
	}
	function updateProgress( percent ) {
		$('#progress_bar').show();
		$('#progress_bar').css({ width:  percent + "%"});
	}
	var NN 			= 600;
	var NIT 		= 10000000;
	var ALPHA	 	= 0.80;
	var DENSITY		= []
		for ( i = 1; i <= NN; i++ ) { DENSITY[i] = []; }
	var DENSITYL	= [];
		for ( i = 1; i <= NN; i++ ) { DENSITYL[i] = []; }
	var MAXL;
	var X = [];
	var X1 = [];
	var A;
	var RR;
	var R;
	var I,J,K,M,N;
	var contrast = 0;
	var a1 = 10.0/255.0;
	var a2 = 17.0/255.0;
	var a3 = 108.0/255.0;
	var a4 = 159.0/255.0;
	var b1 = 0.0;
	var b2 = 72.0/255.0;
	var b3 = 198.0/255.0;
	var b4 = 1.0;

	window.generateFractal = function( canvas ) {
		NIT 	= parseInt(document.getElementById('iterations').value);
		ALPHA 	= parseFloat(document.getElementById('alpha').value);
		if ( ALPHA >= 1) {
			alert("Alpha must be BETWEEN 0 and 1, but be neither.");
			return;
		}
		var ctx = canvas.getContext("2d");
		$pixel = ctx.createImageData(1,1);
		


		fillMatrix(  DENSITY, NN, NN, 1.0 );
		fillMatrix( DENSITYL, NN, NN, 0.0 );
		updateProgress(0);
		for ( var i = 1; i <= 3; i++ ) {
			RR = RANDOM();
			X[i] = 2 * RR - 1;
		}

		A = X.reduce(function (pv, cv) { 
			pv + Math.pow(cv,2); 
		},0);

		X.map(function ( cv ) { return cv / A; });
		X[4] = 1.0;
		var type_select = document.getElementById('fractal_type');
		var text = type_select.options[type_select.selectedIndex].text;
		var fractal_length = 12;
		if ( text == "Icosa") {
			populateMatrices( ALPHA );	
		} else if ( text == "Octa" ) {
			populateMatricesOcta( ALPHA );
			fractal_length = 6;
		} else if ( text == "Para" ) {
			populateMatricesPara( ALPHA );
			fractal_length = 24;
		} else {
			alert("Don't know: " + text );
			return;
		}
		updateProgress(10);
		

		// Main Loop

		for ( var i = 1; i <= NIT; i++ ) {
			RR = RANDOM();
			if ( i % Math.ceil( NIT / 100.0 ) == 0 ) {
				// Maybe do something?
			}
			R = Math.ceil( fractal_length * RR );
			// Apply the selected matrix;
			X1[1] = L[R][1][1] * X[1] + L[R][1][2] * X[2] + L[R][1][3] * X[3] + L[R][1][4];
		    X1[2] = L[R][2][1] * X[1] + L[R][2][2] * X[2] + L[R][2][3] * X[3] + L[R][2][4];
		    X1[3] = L[R][3][1] * X[1] + L[R][3][2] * X[2] + L[R][3][3] * X[3] + L[R][3][4];
		    A = 1.0 / Math.sqrt( X1[1]*X1[1] + X1[2] * X1[2]+ X1[3] * X1[3] );
		    // Normaliz the first three components
		    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		    X[1] = X1[1] * A;
		    X[2] = X1[2] * A;
		    X[3] = X1[3] * A;
		    X[4] = 1.0;
		    M = Math.max( Math.ceil((X[1] + 1.0) * NN / 2), 1 );
		    N = Math.max( Math.ceil((X[2] + 1.0) * NN / 2), 1 );
		   	DENSITY[M][N] = DENSITY[M][N] + 1;
		} // End Main Loop
		updateProgress(20);
		MAXL = 0;
		for ( var i = 1; i <= NN; i++ ) {
			for ( var j = 1; j <= NN; j++ ) {
				DENSITYL[i][j] = LOG10( DENSITY[i][j] );
				if ( DENSITYL[i][j] > MAXL ) {
					MAXL = DENSITYL[i][j];
				}
			}
		}
		updateProgress(60);
		for ( var i = 1; i <= NN; i++ ) {
			for ( var j = 1; j <= NN; j++ ) {
				DENSITYL[i][j] = DENSITYL[i][j] / MAXL;
				Canvas.plot( ctx, i, j, Math.floor( DENSITYL[i][j] * 256 ) );
			}
		}	
		updateProgress(100);
	}


})(jQuery);