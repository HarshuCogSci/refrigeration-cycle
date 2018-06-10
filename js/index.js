/*******************************************************************************************/
// Document Ready

var states_array = [], trajectory = [];
var params = {
  p: {min: 0, max: 300, step: 1, name: 'Pressure', variable: 'pressure'},
  v: {min: 0, max: 4, step: 0.01, name: 'Specific Volume', variable: 'volume'},
  T: {min: 0, max: 500, step: 1, name: 'Temperaure', variable: 'temperature'}
};

/*******************************************************************************************/
// Document Ready

$(document).ready(function(){
  setup();
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

/*******************************************************************************************/
// Setup

var num_states = 4;

function setup(){
  for(var i = 0; i < num_states; i++){ states_array.push(new State()); }
  createHTMLElements();
}

/*******************************************************************************************/
// Create HTML Elements

function createHTMLElements(){
  states_array.forEach((state,i) => {
    var card = d3.select('#right_panel').append('div').attrs({ class: 'card' });
    card.append('div').attrs({ class: 'card-header' }).html('State ' + (i+1));

    var card_body = card.append('div').attrs({ class: 'card-body text-justify' });

    var obj = {};
    [{ param: 'p', unit: 'kPa' }, { param: 'v', unit: 'm^3/kg' }, { param: 'T', unit: 'K' }].map(d => {
      obj[d.param] = {};
      obj[d.param].div = card_body.append('div').attrs({ class: 'pb-2' });
      obj[d.param].checkbox = obj[d.param].div.append('input').attrs({ type: 'checkbox', class: 'checkbox', param: d.param }).data([state]);
      obj[d.param].div.append('span').attrs({ class: 'px-2' }).html('(' +d.param+ ':)');
      obj[d.param].slider = obj[d.param].div.append('input').attrs({ type: 'range', class: 'slider', param: d.param }).data([state]);
      obj[d.param].input = obj[d.param].div.append('input').attrs({ type: 'number', class: 'input mx-2', param: d.param }).data([state]);
      obj[d.param].div.append('span').html('(' +d.unit+ ')');
    })

    state.dom = obj;

    // var p_div = card_body.append('div');
    // p_div.append('input').attrs({ id: 's'+(i+1)+'_p_checkbox', class: 's'+(i+1)+'_checkbox s_checkbox', type: 'checkbox', data: 'p', state: (i+1) });
    // p_div.append('span').attrs({ class: 'px-2' }).html('(p:)')
    // p_div.append('input').attrs({ id: 's'+(i+1)+'_p_slider', class: 's'+(i+1)+'_slider s_slider', type: 'range', data: 'p', state: (i+1) });
    // p_div.append('input').attrs({ id: 's'+(i+1)+'_p_input', class: 's'+(i+1)+'_input s_input mx-2', type: 'number', data: 'p', state: (i+1) });
    // p_div.append('span').html('(kPa)')
    //
    // var v_div = card_body.append('div').attrs({ class: 'pt-2' });
    // v_div.append('input').attrs({ id: 's'+(i+1)+'_v_checkbox', class: 's'+(i+1)+'_checkbox s_checkbox', type: 'checkbox', data: 'v', state: (i+1) });
    // v_div.append('span').attrs({ class: 'px-2' }).html('(v:)')
    // v_div.append('input').attrs({ id: 's'+(i+1)+'_v_slider', class: 's'+(i+1)+'_slider s_slider', type: 'range', data: 'v', state: (i+1) });
    // v_div.append('input').attrs({ id: 's'+(i+1)+'_v_input', class: 's'+(i+1)+'_input s_input mx-2', type: 'number', data: 'v', state: (i+1) });
    // v_div.append('span').html('(m^3/kg)')
    //
    // var T_div = card_body.append('div').attrs({ class: 'pt-2' });
    // T_div.append('input').attrs({ id: 's'+(i+1)+'_T_checkbox', class: 's'+(i+1)+'_checkbox s_checkbox', type: 'checkbox', data: 'T', state: (i+1) });
    // T_div.append('span').attrs({ class: 'px-2' }).html('(v:)')
    // T_div.append('input').attrs({ id: 's'+(i+1)+'_T_slider', class: 's'+(i+1)+'_slider s_slider', type: 'range', data: 'T', state: (i+1) });
    // T_div.append('input').attrs({ id: 's'+(i+1)+'_T_input', class: 's'+(i+1)+'_input s_input mx-2', type: 'number', data: 'T', state: (i+1) });
    // T_div.append('span').html('(K)')
  })
}
