/**************************************************************************************************/
// Defining Isobaric Process

function Isobaric_process(id, input, output){
  this.id = id;
  this.input = input; this.output = output;
  input.to = this; output.from = this;
}

/**************************************************************************************************/

Isobaric_process.prototype.assignKnowns = function(){
  if(this.input.known.p == false && this.output.known.p == true){
    this.input.known.p = true;
    this.input.determined_by.p = 'output';
  }

  if(this.input.known.p == true && this.output.known.p == false){
    this.output.known.p = true;
    this.output.determined_by.p = 'input';
  }
}

/**************************************************************************************************/

Isobaric_process.prototype.compute = function(){}
