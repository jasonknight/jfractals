(function ($) {
window.Canvas = {};
window.$pixel = null;
window.$_id = null;
window.$context = null;
window.$canvas;
window.$scheme;
window.Canvas.data = {
	pixels: [],
	width: 0,
	height: 0,
	sx: 0,
	sy: 0,
};
window.Canvas.wipeOut = function () {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	$context.save();
	$context.clearRect(0,0, $('#fractalCanvas').width(),$('#fractalCanvas').height());
	$context.restore();
}
window.Canvas.center = function () {
	return { x: Math.floor($canvas.width / 2), y: Math.floor($canvas.width / 2) };
}
window.Canvas.centerOffset = function (x,y) {
	var w = $canvas.width;
	var h = $canvas.height;
	var cp = window.Canvas.center();

	var mw = Canvas.data.width;
	var mh = Canvas.data.height;

	var moffx = Math.floor(mw / 2)
	var moffy = Math.floor(mh / 2);

	var base_x = cp.x - moffx;
	var base_y = cp.y - moffy;

	var new_x = x + base_x;
	var new_y = y + base_y;

	return {x: new_x, y: new_y};

}
window.Canvas.saveImageData = function () {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	//console.log("Saving current data");
	$_id = $context.getImageData(0, 0, $('#fractalCanvas').width(), $('#fractalCanvas').height());
};
window.Canvas.restoreCurrentImageData = function () {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	//console.log("Restoring current data");
	$context.putImageData($_id, 0, 0);
};
var common = {};
window.Canvas.draw = function () {
	var i,j;
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	$scheme = $('#fractal_colors').val();
	// We expect that the width/height will be +1, because Ark is always starting from 1 due
	// to a Fortran convention. instead of messing with it, we just compensate here.
	$_id = $context.createImageData(Canvas.data.width-1, Canvas.data.height-1);
	
	var index = 0;
	var d;
	var displayed_errors = 0;
	for ( i = Canvas.data.sy; i < Canvas.data.height; i++ ) {
		for ( j = Canvas.data.sx; j < Canvas.data.width; j++) {
			color = Math.floor( Canvas.data.pixels[i][j] * 255 );
			if ( ! common[color + ""])
				common[color+""] = 0;
			common[ color + ""] += 1;
			d = $_id.data;
			try {
				if ( $scheme != "grayscale" ) {
					d[index + 0] = Math.floor( $COLORS[$scheme][color].r * 256 );
					d[index + 1] = Math.floor( $COLORS[$scheme][color].g * 256 );
					d[index + 2] = Math.floor( $COLORS[$scheme][color].b * 256 );
				} else {
					d[index + 0] = color;
					d[index + 1] = color;
					d[index + 2] = color;
				}
				d[index + 3] = 255;
			} catch( err ) {
				if ( displayed_errors < 50 ) {
					console.log($scheme, color, err);
					displayed_errors += 1;
				}
				continue;
			}
			index += 4;
		}
	}
	var cp = window.Canvas.center();
	var moffx = Math.floor(Canvas.data.width / 2)
	var moffy = Math.floor(Canvas.data.height / 2);
	var base_x = cp.x - moffx;
	var base_y = cp.y - moffy;
	//$context.putImageData($_id,base_x,base_y + (Canvas.data.sy - 1));
	$context.putImageData($_id,0,Canvas.data.sy - 1);
	window.updateProgress(100);
	//console.log("Common Colors: ", common);
}
window.Canvas.plot = function( x, y, color, alpha) {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	if ( ! $pixel ) {
		$pixel = $context.createImageData(1,1);
	}
	$scheme = $('#fractal_colors').val();

	var rgb = color;
	//var existing_pixel = $pixel;
	//var epd = existing_pixel.data;
	var d = $pixel.data;
	// var nrgb = {
	// 	r: Math.floor( ( rgb.r * alpha) + (epd[0] * ( 1.0 - alpha) ) ),
	// 	g: Math.floor( ( rgb.g * alpha) + (epd[1] * ( 1.0 - alpha) ) ),
	// 	b: Math.floor( ( rgb.b * alpha) + (epd[2] * ( 1.0 - alpha) ) ),
	// }
	
	// console.log($scheme, color);
	// v10[9] = 888;
	//console.log($scheme, color, $COLORS[$scheme][color]);
	try {
		if ( $scheme != "grayscale" ) {
			d[0] = Math.floor( $COLORS[$scheme][color].r * 256 );
			d[1] = Math.floor( $COLORS[$scheme][color].g * 256 );
			d[2] = Math.floor( $COLORS[$scheme][color].b * 256 );
		} else {
			d[0] = color ;
			d[1] = color;
			d[2] = color;
		}
		d[3] = 255;
	} catch ( err ) {
		console.log( $scheme, color, err);
	}
	//console.log(rgb.r, "/", rgb.g, "/",rgb.b,"  ",nrgb.r, ' - ', nrgb.g, ' - ', nrgb.b, ' | ', epd[0], '/', epd[1], '/', epd[2], ' || ',  alpha);
	$context.putImageData( $pixel, x, y );
}
	
})(jQuery);