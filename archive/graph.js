/*******************************************************************************************/
// Initialiing some variables

var lineGen = d3.line().x(function(d){ return d.x }).y(function(d){ return d.y });
var xScale = d3.scaleLinear(), yScale = d3.scaleLinear(),
    xVar = null, yVar = null;
var graph = {};

/*******************************************************************************************/
// Create Graph

graph.create = function(){
  d3.select('#origin').remove();

  var graph = d3.select('#graph');
  var width = parseInt(graph.style('width'));
  var height = parseInt(graph.style('height'));

  yVar = document.getElementById('yAxis_var').value;
  xVar = document.getElementById('xAxis_var').value;

  xScale.range([0, width-100]);
  yScale.range([0, -(height-100)]);

  var origin = graph.append('g').attrs({ id: 'origin', transform: 'translate(' +50+ ',' +(height-50)+ ')' });
  origin.append('g').attrs({ id: 'xAxis' });
  origin.append('g').attrs({ id: 'yAxis' });

  origin.append('text').attrs({ id: 'xLabel', class: 'axes_label', 'transform': 'translate(' +(0.8*(width-100))+ ',' +40+ ')' });
  origin.append('g').attrs({ class: 'axes_label', 'transform': 'translate(' +-40+ ',' +(-0.8*(height-100))+ ') rotate(-90)' })
                      .append('text').attrs({ id: 'yLabel' });

  for(var i = 0; i < trajectory.length; i++){
    origin.append('path').attrs({ id: 'p'+(i+1)+'_path' }).styles({ 'stroke-width': 2, 'fill': 'none' });
  }

  for(var i = 0; i < states.length; i++){
    origin.append('circle').attrs({ id: 's' +(i+1)+ '_circle', r: 4 }).styles({ 'cursor': 'hand', 'opacity': 0.8 });
    origin.append('text').attrs({ class: 'axes_label', id: 's' +(i+1)+ '_text' }).styles({ 'text-anchor': 'middle', 'dominant-baseline': 'middle' }).text(i+1);
  }

}

/*******************************************************************************************/
// Setup Graph

graph.setup = function(){
  this.yVar = document.getElementById('yAxis_var').value;
  this.xVar = document.getElementById('xAxis_var').value;

  xScale.domain([params[this.xVar].min, params[this.xVar].max]);
  yScale.domain([params[this.yVar].min, params[this.yVar].max]);

  d3.select('#xAxis').call( d3.axisBottom(xScale) );
  d3.select('#yAxis').call( d3.axisLeft(yScale) );

  d3.select('#xLabel').text(params[this.xVar].name + ' →');
  d3.select('#yLabel').text(params[this.yVar].name + ' →');

  // Different colours for different processes

  for(var i = 0; i < trajectory.length; i++){
    d3.select('#p'+(i+1)+'_path').styles({ 'stroke': 'steelblue' });
  }

  for(var i = 0; i < states.length; i++){
    d3.select('#s'+(i+1)+'_circle').styles({ 'stroke': 'steelblue' });
  }
}

/*******************************************************************************************/
// Update Graph

graph.update = function(){
  for(var i = 0; i < states.length; i++){

    if( isCompletelyDefined(states[i]) == false ){
      d3.select('#s'+(i+1)+'_circle').styles({ 'display': 'none' });
      d3.select('#s'+(i+1)+'_text').styles({ 'display': 'none' });
    } else {
      var tempX = xScale(states[i][ params[this.xVar].variable ]);
      var tempY = yScale(states[i][ params[this.yVar].variable ]);
      d3.select('#s'+(i+1)+'_circle').styles({ 'display': null }).attrs({ cx: tempX, cy: tempY });
      d3.select('#s'+(i+1)+'_text').styles({ 'display': null }).attrs({ x: tempX+10, y: tempY-10 });
    }

  }
}
