(function ($) {
window.Canvas = {};
window.$pixel = null;
window.$_id = null;
window.$context = null;
window.$canvas;
window.$scheme;
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
window.Canvas.centerOffset = function (mw,mh,x,y) {
	var w = $canvas.width;
	var h = $canvas.height;
	var cp = window.Canvas.center();

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
	//console.log(rgb.r, "/", rgb.g, "/",rgb.b,"  ",nrgb.r, ' - ', nrgb.g, ' - ', nrgb.b, ' | ', epd[0], '/', epd[1], '/', epd[2], ' || ',  alpha);
	$context.putImageData( $pixel, x, y );
}
	
})(jQuery);