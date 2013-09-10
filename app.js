var markov_workers = [];
var markov_workers_results = [];
var $raw_pixels = [];
var $canvas;
var markov_onmessage = function (e) {
  //console.log(e.data);
  if ( typeof e.data == 'string' && e.data.indexOf("ERROR") != -1 ) {
    alert(e.data);
  } else if ( e.data instanceof Object ) {
    if ( e.data.text == "Render" ) {
      markov_workers_results[e.data.data.id] = e.data.data;
      window.updateProgress( 100, e.data.data.id);
      if ( markov_workers_results.length == markov_workers.length ) {
        var pixels = [];
        for ( var i = 0; i < markov_workers_results.length; i++) {
          var result = markov_workers_results[i];
          if ( ! result ) {
            return;
          }
          //console.log("SY: ",result.sy, "EndY: ", result.endy);
          for ( var j = result.sy; j <= result.endy; j++) {
            pixels[j] = result.pixels[j];
            $raw_pixels[j] = jQuery.extend([],result.pixels[j]);
          }
        }

        pixels.max2d(1,pixels.length-1, 1, pixels.length-1,function (n) {
          return n;Math.log10( n + 1.0 );
        }, function (maxm, n) {
          return n / maxm;
        } );
        var data = e.data.data;
        data.sy = 1;
        data.height = pixels.length;
        data.pixels = pixels;
        Canvas.data = data;
        Canvas.draw();
      }
      //console.log("Render From: ",e.data.data.id);
      //Canvas.data = e.data.data;
      //Canvas.draw();
    }
    if ( e.data.text == "UpdateProgress" ) {
      window.updateProgress( e.data.value, e.data.id);
    }
  }
};
var icosa_onmessage = function (e) {
  //console.log(e.data);
  if ( typeof e.data == 'string' && e.data.indexOf("ERROR") != -1 ) {
    alert(e.data);
  }  else if ( e.data instanceof Object ) {
    if ( e.data.text == "Render" ) {
      var pixels = [];
      //console.log("SY: ",result.sy, "EndY: ", result.endy);
      var result = e.data.data;
      for ( var j = 1; j < result.height; j++) {
        pixels[j] = result.pixels[j];
        $raw_pixels[j] = jQuery.extend([],result.pixels[j]);
      }
      pixels.max2d(1,pixels.length-1, 1, pixels.length-1,function (n) {
        return n;Math.log10( n + 1.0 );
      }, function (maxm, n) {
        return n / maxm;
      } );
      var data = e.data.data;
      data.sy = 1;
      data.height = pixels.length;
      data.pixels = pixels;
      Canvas.data = data;
      Canvas.draw();
    }
    if ( e.data.text == "UpdateProgress" ) {
      window.updateProgress( e.data.value );
    }
  }
};
var MarkovWorker = new Worker(window.js_location + 'markov.js');
MarkovWorker.onmessage = markov_onmessage;



(function ($) {
  window.updateProgress = function( percent,id ) {
    if ( percent > 100) {
      percent = 100;
    }
    if ( id ) {
      var pb = $('#progress_bar_' + id);
      if ( pb.length == 0 ) {
        pb = $('#progress_bar_0').clone();
        pb.attr('id','progress_bar_' + id);
        $('.progress-bar-container').append(pb);

      }
      if ( percent == 100) {
        pb.remove();
        return;
      }
      pb.show();
      pb.css({ width:  percent + "%"});
      pb.html(percent + "%");
      return;
    }
    $('#progress_bar_0').show();
    $('#progress_bar_0').css({ width:  percent + "%"});
    $('#progress_bar_0').html(percent + "%");
  }
  function updateVelocity() {
    var alpha = parseFloat( $('#alpha').val() );
    if ( $('#fractal_type').val() == "Para" ) {
      $('#velocity').val( 5 * alpha * Math.sqrt( 4 + 25 * Math.pow(alpha,2) ) / ( 2 + 25 * Math.pow(alpha,2) ) );
    } else {
      $('#velocity').val( 2 * alpha / (1 + Math.pow(alpha,2) ) );
    }
    
  }
  function chooseFractalType() {
    Canvas.wipeOut();
    var t = $('#fractal_algorithm').val();
    if (t == "icosa") {
      
      var iw = new Worker(window.js_location +'icosahedron.js');
      iw.onmessage = icosa_onmessage;
        iw.postMessage({
          text:'Settings',
          settings: {
            id: 1,
            iterations: $('#iterations').val(),
            alpha: $('#alpha').val(),
            fractal_type: $('#fractal_type').val(),
            nn: $canvas.width,
            xymin: (parseFloat($('#xymin').val())),
            xylimit: parseFloat($('#xylimit').val()),
            display_type: $('#display_type').val(),
            starty: 1,
            endy: $canvas.height,
          }
        });
        iw.postMessage({
          text:'Run'
        });
      
    } else if ( t == "markov" ) {
      var workers = parseInt($('#markov_threads').val());
      var res = parseInt($('#markov_res').val());
      var per_worker = Math.floor( res / workers );
      var the_workers_chunks = [];
      markov_workers_results = [];
      markov_workers = [];
      for ( var i = 0; i < workers; i++ ) {
        the_workers_chunks.push(per_worker);
      }
      while ( the_workers_chunks.sum() < res) {
        the_workers_chunks[ the_workers_chunks.length -1] += 1;
      }
      var starty = 1;
      var endy = 0;
      markov_workers_results = [];
      for ( var i = 0; i < workers; i++ ) {
        markov_workers[i] = new Worker(window.js_location + 'markov.js');
        markov_workers[i].onmessage = markov_onmessage;
        endy =  starty + the_workers_chunks[i] - 1;
       // console.log("Starty", starty, "Endy", endy);
        markov_workers[i].postMessage({
          text:'Settings',
          settings: {
            id: i,
            alpha: parseFloat($('#alpha').val()),
            markov_level: $('#markov_level').val(),
            markov_xymin: (parseFloat($('#xymin').val())),
            markov_xymax: parseFloat($('#xylimit').val()),
            markov_res: $('#markov_res').val(),
            fractal_type: $('#fractal_type').val(),
            display_type: $('#display_type').val(),
            starty: starty,
            endy: endy,
          }
        });
        
        starty += the_workers_chunks[i];
      }
      for ( i = 0; i < markov_workers.length; i++ ) {
        markov_workers[i].postMessage({
          text:'Run'
        });
      }
      // MarkovWorker.postMessage({
      //   text:'Settings',
      //   settings: {
      //     markov_level: $('#markov_level').val(),
      //     markov_xymin: (parseFloat($('#xylimit').val()) * -1 ),
      //     markov_xymax: parseFloat($('#xylimit').val()),
      //     markov_res: $('#markov_res').val(),
      //     fractal_type: $('#fractal_type').val(),
      //     display_type: $('#display_type').val(),
      //     starty: 50,
      //     endy: 70,
      //   }
      // });
      // MarkovWorker.postMessage({
      //   text:'Run'
      // });
    }
  }
  function chooseFractalRedraw() {
    window.Canvas.wipeOut();
    var pixels = [];
    for (var i = 1; i < $raw_pixels.length; i++) {
      pixels[i] = jQuery.extend([],$raw_pixels[i]);
    }
    pixels.max2d(1,pixels.length-1, 1, pixels.length-1,function (n) {
      return n;Math.log10( n + 1.0 );
    }, function (maxm, n) {
      return n / maxm;
    } );
    Canvas.data.pixels = pixels;
    Canvas.draw();
    Canvas.draw();
  }
  $(function () {
    $canvas = document.getElementById("fractalCanvas");
    document.getElementById('generate').addEventListener( 'click', function () {
      chooseFractalType();
    }, false );
    $('#alpha').keyup(function () {
      updateVelocity();
    });
    updateVelocity();
    //chooseFractalType();
    $('#redraw_button').click(function () {
      chooseFractalRedraw();
    });
    $('#save_button').click(function () {
      var div = $('#saveable');
      var img = div.find('img');
      var cnvs = document.getElementById('fractalCanvas');
      var ctx = cnvs.getContext("2d");
      var myImage = cnvs.toDataURL("image/png");
      img.attr('src',myImage);
      div.show();
    });
    $('#close-saveable').click(function () {
      $('#saveable').hide();
    });

    $('#fractal_algorithm').change(function () {
      var t = $('#fractal_algorithm').val();
      if (t == 'markov') {
        $('#markov_options').show();
      } else {
        $('#markov_options').hide();
      }
    } );

    $('#canvas_height').keyup(function () {
      $('#fractalCanvas')[0].height = $('#canvas_height').val();
      $('#fractalCanvas')[0].width = $('#canvas_height').val();
      $('#canvas_width').val( $('#canvas_height').val() )
    });
     $('#canvas_width').keyup(function () {
      $('#fractalCanvas')[0].width = $('#canvas_width').val();
      $('#fractalCanvas')[0].height = $('#canvas_width').val();
      $('#canvas_height').val( $('#canvas_width').val() );
    });

     $('#fractal_type').change(function () {
        var t = $(this).val();
        if ( t == "Para") {
          $('#alpha').val(0.8);
        }
     });

     $('#display_type').change(function () {
        if ( $(this).val() == 'Stereographic' ) {
          $('#xylimit').val('1.0');
        } else {
          $('#xylimit').val('5.0');
        }
     });
     window.surfacePlot = null;
      window.webGLSetup = function () {
        var canvas_height = $canvas.height;
        var canvas_width = $canvas.width;
        var surfacePlot2;
        var data, options, basicPlotOptions, glOptions, animated, plot1, values;
        var numRows = $raw_pixels.length - 1;
        var numCols = $raw_pixels.length - 1;
        var tooltipStrings = new Array();
          values = new Array();

          data = {
              nRows: numRows,
              nCols: numCols,
              formattedValues: values
          };
          if (! surfacePlot ) {
            surfacePlot = new SurfacePlot(document.getElementById("surfacePlotDiv"));
          }
          

          // Don't fill polygons in IE < v9. It's too slow.
          var fillPly = true;

          // Define a colour gradient.
          var colour1 = {
              red: 0,
              green: 0,
              blue: 255
          };
          var colour2 = {
              red: 0,
              green: 255,
              blue: 255
          };
          var colour3 = {
              red: 0,
              green: 255,
              blue: 0
          };
          var colour4 = {
              red: 255,
              green: 255,
              blue: 0
          };
          var colour5 = {
              red: 255,
              green: 0,
              blue: 0
          };

          var colours = [colour1, colour2, colour3, colour4, colour5];

          // Axis labels.
          var xAxisHeader = "";
          var yAxisHeader = "";
          var zAxisHeader = "";
          var renderDataPoints = false;
          var background = '#000000';
          var axisForeColour = '#ffffff';
          var hideFloorPolygons = false;

          var chartOrigin = {
              x: 0,
              y: 0
          };

          // Options for the basic canvas plot.
          basicPlotOptions = {
              fillPolygons: fillPly,
              tooltips: tooltipStrings,
              renderPoints: renderDataPoints
          }

          // Options for the webGL plot.
          var xLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          var yLabels = [0, 1, 2, 3, 4, 5];
          var zLabels = [0, 1, 2, 3, 4, 5, 6];

          // These labels are used when autoCalcZScale is false;
          glOptions = {
              xLabels: xLabels,
              yLabels: yLabels,
              zLabels: zLabels,
              autoCalcZScale: true
          };

          // Options common to both types of plot.
          options = {
              xPos: 0,
              yPos: 0,
              width: canvas_width,
              height: canvas_height,
              colourGradient: colours,
              xTitle: xAxisHeader,
              yTitle: yAxisHeader,
              zTitle: zAxisHeader,
              backColour: background,
              axisTextColour: axisForeColour,
              hideFlatMinPolygons: hideFloorPolygons,
              origin: chartOrigin
          };

          // Create some data.
          var d = 360 / numRows;
          var idx = 0;
          var maxm = 0;
          for (var i = 1; i < $raw_pixels.length; i++) {
            for ( var j = 1; j < $raw_pixels[i].length; j++ ) {
              if ( $raw_pixels[i][j] > maxm ) {
                maxm = $raw_pixels[i][j];
              }
            }
          }
          //console.log("maxm is: ", maxm);
          for (var i = 0; i < numRows; i++) {
              values[i] = new Array();

              for (var j = 0; j < numCols; j++) {
                  var value = $raw_pixels[i+1][j+1];
                  // if ( value > 0.75 * maxm)
                  //   value = 0.75 * maxm;

                  values[i][j] = (value / 4.0 + 0.25) * 0.5;

                  tooltipStrings[idx] = "x:" + i + ", y:" + j + " = " + value;
                  idx++;
              }
          }

          //surfacePlot = new SurfacePlot(document.getElementById("surfacePlotDiv"));
          surfacePlot.draw(data, options, basicPlotOptions, glOptions);
      }
  });

})(jQuery);