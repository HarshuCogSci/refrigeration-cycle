var graph_var = {};
graph_var.x = 'v';
graph_var.y = 'p';

function createGraph(){
  var state_points = {
    x: [],
    y: [],
    mode: 'markers', name: 'states'
  }

  var processes = {
    x: [],
    y: [],
    mode: 'lines', name: 'processes'
  }

  var data = [state_points, processes];
  var layout = { xaxis: { title: graph_var.x+' →' }, yaxis: { title: graph_var.y+' →' } };
  Plotly.newPlot('graph_panel', data, layout, { staticPlot: true });
}

function updateGraph(){
  var data = document.getElementById('graph_panel').data;

  data[0].x = states_array.map(state => { return state[graph_var.x] });
  data[0].y = states_array.map(state => { return state[graph_var.y] });

  console.log(data);
  Plotly.redraw('graph_panel');
}
