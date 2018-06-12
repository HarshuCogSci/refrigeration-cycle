var graph_var = {};
graph_var.x = 'v';
graph_var.y = 'p';

function createGraph(){
  var state_points = {
    x: [],
    y: [],
    mode: 'markers+text', name: 'states',
    text: ['State 1', 'State 2', 'State 3', 'State 4'],
    textposition: 'top right',
    textfont: { family: 'serif, sans-serif' },
  }
  var data = [state_points];

  var processes_data_arry = processes_array.map(process => { return { x: [], y: [], mode: 'lines', name: process.id } })
  processes_data_arry.forEach(process => { data.push(process) });

  var layout = { xaxis: { title: graph_var.x+' →' }, yaxis: { title: graph_var.y+' →' } };
  Plotly.newPlot('graph_panel', data, layout, { staticPlot: true });
}

function updateGraph(){
  var data = document.getElementById('graph_panel').data;

  data[0].x = states_array.map(state => { return state[graph_var.x] });
  data[0].y = states_array.map(state => { return state[graph_var.y] });

  processes_array.forEach((process,i) => {
    data[i+1].x = process.trajectory[graph_var.x];
    data[i+1].y = process.trajectory[graph_var.y];
  })

  Plotly.redraw('graph_panel');
}
