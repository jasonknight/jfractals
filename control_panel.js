var cp = jQuery('#control_panel').control_panel(); 
var control_panel = cp[0];
(function ($) {
control_panel.cp.add_attribute({
  id: 'canvas_width',
  label: 'Canvas Width',
  order: 0,
  type: 'string',
  size: 6,
  default_value: 800,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'canvas_height',
  label: 'Canvas Height',
  order: 1,
  type: 'string',
  size: 6,
  default_value: 800,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'alpha',
  label: 'Alpha',
  order: 2,
  type: 'string',
  size: 4,
  min_value: 0.1,
  max_value: 0.99999,
  default_value: 0.77,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'velocity',
  label: 'Velocity',
  order: 3,
  type: 'string',
  size: 20,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'xylimit',
  label: 'X,Y Limit',
  order: 4,
  type: 'string',
  default_value: 1,
  hidden: true,
  size: 4,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'iterations',
  label: 'Iterations',
  order: 5,
  size: 10,
  default_value: 1000000,
  type: 'string',
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'fractal_algorithm',
  label: 'Fractal Algorithm',
  order: 6,
  type: 'select',
  options: ['icosa:Chaos Game:selected','markov:Forbenius-Perron'],
  callbacks: {
    change: function () {
      var e = $(this);
      if ( e.val() == 'markov' ) {
        $('#control_panel_div_for_markov_level').show().effect("bounce","slow");
        $('#control_panel_div_for_markov_res').show().effect("bounce","slow");
        $('#control_panel_div_for_markov_threads').show().effect("bounce","slow");
        $('#markov_level').effect( "highlight",2000 );
        $('#markov_res').effect( "highlight",2000 );
        $('#markov_threads').effect( "highlight",2000 );
      } else {
        $('#control_panel_div_for_markov_level').hide();
        $('#control_panel_div_for_markov_res').hide();
        $('#control_panel_div_for_markov_threads').hide();
      }
    },
  }
 });

control_panel.cp.add_attribute({
  id: 'fractal_type',
  label: 'Fractal Type',
  order: 7,
  type: 'select',
  options: ['PlatonicIcosa:selected','PlatonicCube','PlatonicDodeca','PlatonicOcta','PlatonicTetra', 'Para'],
  callbacks: {
    change: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'fractal_colors',
  label: 'Color Scheme',
  order: 8,
  type: 'select',
  options: ['temp:Temperature:selected','rain:Rain','spec:Spectrum','gray:Grayscale','glass:Glass','volcano:Volcano'],
  callbacks: {
    change: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'display_type',
  label: 'Display Type',
  order: 9,
  type: 'select',
  options: ['Spherical:selected','Stereographic'],
  callbacks: {
    change: function () {
      var e = $(this);
      if ( e.val() == 'Stereographic' ) {
        $('#control_panel_div_for_xylimit').show().effect("bounce","slow");
        $('#xylimit').effect( "highlight",2000 );
      } else {
        $('#control_panel_div_for_xylimit').hide();
      }
    },
  }
 });

control_panel.cp.add_attribute({
  id: 'markov_level',
  label: 'Frobenius-Perron Level',
  order: 10,
  min_value: 0,
  max_value: 5,
  step_value: 1,
  default_value: 1,
  size: 4,
  type: 'string',
  hidden: true,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'markov_res',
  label: 'Frobenius-Perron Resolution',
  order: 11,
  type: 'string',
  size: 10,
  hidden: true,
  default_value: 200,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_attribute({
  id: 'markov_threads',
  label: 'Frobenius-Perron Threads',
  order: 11,
  type: 'string',
  size: 4,
  hidden: true,
  default_value: 3,
  callbacks: {
    keyup: function () {},
  }
 });

control_panel.cp.add_control({
  id: 'generate',
  label: 'Generate',
  order: 0,
  callbacks: {
    click: function () {},
  }
 });
control_panel.cp.add_control({
  id: 'redraw_button',
  label: 'Redraw',
  order: 1,
  callbacks: {
    click: function () {},
  }
 });
control_panel.cp.add_control({
  id: 'save_button',
  label: 'Save Image',
  order: 2,
  callbacks: {
    click: function () {},
  }
 });

// control_panel.cp.display_debug_info();
// control_panel.cp.display_attribute_template();

control_panel.cp.draw();
})(jQuery);