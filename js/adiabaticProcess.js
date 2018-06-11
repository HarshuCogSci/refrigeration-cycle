/**************************************************************************************************/
// Defining Adiabatic Process

function Adiabatic_process(id, input, output){
  this.id = id;
  this.input = input; this.output = output;
  input.to = this; output.from = this;
}

/**************************************************************************************************/

Adiabatic_process.prototype.assignKnowns = function(){
  if((this.input.getKnownCount() == 2 || this.input.getKnownCount() == 3) && this.output.getKnownCount() == 1){
    this.output.params.forEach(param => {
      if(this.output.known[param] == false){ this.output.known[param] = true; this.output.determined_by[param] = 'input'; }
    });
  }

  if((this.output.getKnownCount() == 2 || this.output.getKnownCount() == 3) && this.input.getKnownCount() == 1){
    this.input.params.forEach(param => {
      if(this.input.known[param] == false){ this.input.known[param] = true; this.input.determined_by[param] = 'output'; }
    });
  }
}

/**************************************************************************************************/

Adiabatic_process.prototype.compute = function(){}
