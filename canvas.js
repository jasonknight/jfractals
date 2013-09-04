var Canvas = {};
var $pixel = null;
var $_id = null;
var $context = null;
var $canvas;
Canvas.wipeOut = function () {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	$context.save();
	$context.globalCompositeOperation = "destination-over";
	$context.fillStyle = '#000000';
	$context.fillRect(0,0, $('#canvas').width(),$('#canvas').height());
	$context.restore();
}
Canvas.saveImageData = function () {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	//console.log("Saving current data");
	$_id = $context.getImageData(0, 0, $('#canvas').width(), $('#canvas').height());
};
Canvas.restoreCurrentImageData = function () {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	//console.log("Restoring current data");
	$context.putImageData($_id, 0, 0);
};
Canvas.plot = function( x, y, color, alpha) {
	if ( ! $context ) {
		$context = $canvas.getContext("2d");
	}
	if ( ! $pixel ) {
		$pixel = $context.createImageData(1,1);
	}
	var rgb = color;
	//var existing_pixel = $pixel;
	//var epd = existing_pixel.data;
	var d = $pixel.data;
	// var nrgb = {
	// 	r: Math.floor( ( rgb.r * alpha) + (epd[0] * ( 1.0 - alpha) ) ),
	// 	g: Math.floor( ( rgb.g * alpha) + (epd[1] * ( 1.0 - alpha) ) ),
	// 	b: Math.floor( ( rgb.b * alpha) + (epd[2] * ( 1.0 - alpha) ) ),
	// }
	d[0] = Math.floor( $COLORS[color].r * 256 );
	d[1] = Math.floor( $COLORS[color].g * 256 );
	d[2] = Math.floor( $COLORS[color].b * 256 );
	d[3] = 255;
	//console.log(rgb.r, "/", rgb.g, "/",rgb.b,"  ",nrgb.r, ' - ', nrgb.g, ' - ', nrgb.b, ' | ', epd[0], '/', epd[1], '/', epd[2], ' || ',  alpha);
	$context.putImageData( $pixel, x, y );
}
