var Canvas = {};
var $pixel = null;
Canvas.plot = function( context, x, y, color, alpha) {
	var rgb = color;
	//var existing_pixel = $pixel;
	//var epd = existing_pixel.data;
	var d = $pixel.data;
	// var nrgb = {
	// 	r: Math.floor( ( rgb.r * alpha) + (epd[0] * ( 1.0 - alpha) ) ),
	// 	g: Math.floor( ( rgb.g * alpha) + (epd[1] * ( 1.0 - alpha) ) ),
	// 	b: Math.floor( ( rgb.b * alpha) + (epd[2] * ( 1.0 - alpha) ) ),
	// }
	d[0] = color;
	d[1] = color;
	d[2] = color;
	d[3] = 255;
	//console.log(rgb.r, "/", rgb.g, "/",rgb.b,"  ",nrgb.r, ' - ', nrgb.g, ' - ', nrgb.b, ' | ', epd[0], '/', epd[1], '/', epd[2], ' || ',  alpha);
	context.putImageData( $pixel, x, y );
}
