var states = [], trajectory = [];
var params = {
  p: {min: 0, max: 300, step: 1, name: 'Pressure', variable: 'pressure'},
  v: {min: 0, max: 4, step: 0.01, name: 'Specific Volume', variable: 'volume'},
  T: {min: 0, max: 500, step: 1, name: 'Temperaure', variable: 'temperature'}
};

/*******************************************************************************************/
// Set Initial Values

// One way of doing it could be to assign ambient to every component initially and then changing the values which are known

function set_initial_values(){
  states[0].pressure_known = true; states[0].pressure = 10;
  states[0].temperature_known = true; states[0].temperature = 100;

  states[1].pressure_known = true; states[1].pressure = 15;

  states[2].temperature_known = true; states[2].temperature = 200;
}

/*******************************************************************************************/
// Setup

function setup(){
  for(var i = 0; i < 4; i++){ states[i] = createState(); }

  compressor = new adiabaticProcess(states[0], states[1]);
  condenser = new isobaricProcess(states[1], states[2]);
  throttle = new adiabaticProcess(states[2], states[3]);
  evaporator = new isobaricProcess(states[3], states[0]);

  trajectory = [compressor, condenser, throttle, evaporator];

  set_initial_values();
  graph.create(); graph.setup();

  createEvents();
  update();
}

/*******************************************************************************************/
// Create Events

function createEvents(){
  d3.selectAll('.s_check').on('change', function(){
    var state_index = parseInt( d3.select(this).attr('state') ) - 1;
    var d = d3.select(this).attr('data');
    var variable = params[d].variable;
    states[state_index][variable+'_checked'] = !states[state_index][variable+'_checked'];

    states[state_index].update_check_box();

    update();
  })
}

/*******************************************************************************************/
// Update

// Try to cache a copy of trajectory when starting and see if it changes. If it doesn't then stop the loop

// When a parameter is made know, that should make its counter-variable not available to be made known

function update(){



  for(var i = 0; i < 3; i++){
    for(var j = 0; j < trajectory.length; j++){
      trajectory[j].calculate();
    }
  }

  graph.update();
}

/*******************************************************************************************/
// Document Ready

$(document).ready(function(){
  setup();

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})
