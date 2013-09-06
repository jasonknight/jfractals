var MarkovWorker = new Worker(window.js_location + 'markov.js');
    MarkovWorker.onmessage = function (e) {
      //console.log(e.data);
      if ( typeof e.data == 'string' && e.data.indexOf("ERROR") != -1 ) {
        alert(e.data);
      } else if ( e.data instanceof Object ) {
        if ( e.data.text == "Render" ) {
          Canvas.data = e.data.data;
          Canvas.draw();
        }
        if ( e.data.text == "UpdateProgress" ) {
          window.updateProgress( e.data.value );
        }
      }
    };

    var IcosaWorker = new Worker(window.js_location +'icosahedron.js');
    IcosaWorker.onmessage = function (e) {
      if ( typeof e.data == 'string' && e.data.indexOf("ERROR") != -1 ) {
        alert(e.data);
      }  else if ( e.data instanceof Object ) {
        if ( e.data.text == "Render" ) {
          Canvas.data = e.data.data;
          Canvas.draw();
        }
        if ( e.data.text == "UpdateProgress" ) {
          window.updateProgress( e.data.value );
        }
      }
    };

    (function ($) {
      window.updateProgress = function( percent ) {
        if ( percent > 100) {
          percent = 100;
        }
        $('#progress_bar').show();
        $('#progress_bar').css({ width:  percent + "%"});
        $('#progress_bar').html(percent + "%");
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
        window.Canvas.wipeOut();
        var t = $('#fractal_algorithm').val();
        if (t == "icosa") {
          IcosaWorker.postMessage({
            text:'Settings',
            settings: {
              iterations: $('#iterations').val(),
              alpha: $('#alpha').val(),
              fractal_type: $('#fractal_type').val(),
              nn: $canvas.width
            }
          });
          IcosaWorker.postMessage({
            text:'Run'
          });
        } else if ( t == "markov" ) {
          MarkovWorker.postMessage({
            text:'Settings',
            settings: {
              markov_level: $('#markov_level').val(),
              markov_xymin: $('#markov_xymin').val(),
              markov_xymax: $('#markov_xymax').val(),
              markov_res: $('#markov_res').val(),
              fractal_type: $('#fractal_type').val(),
            }
          });
          MarkovWorker.postMessage({
            text:'Run'
          });
        }
      }
      function chooseFractalRedraw() {
        window.Canvas.wipeOut();
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

      });
    })(jQuery);