/*******************************************************************************************/
// Document Ready

var states_array = [], processes_array = [], trajectory = [];
var params = {
  p: {min: 0, max: 300, step: 1, name: 'Pressure', variable: 'pressure'},
  v: {min: 0, max: 4, step: 0.01, name: 'Specific Volume', variable: 'volume'},
  T: {min: 0, max: 500, step: 1, name: 'Temperaure', variable: 'temperature'}
};

var R_air = 287, γ_air = 1.4;
var ambient = { p: 100, T: 300 };
ambient.v = getVolume(ambient.p, ambient.T);

/*******************************************************************************************/
// Document Ready

$(document).ready(function(){
  setup();
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  assignKnowns();
  compute();
})
