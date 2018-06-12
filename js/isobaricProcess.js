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

Isobaric_process.prototype.compute = function(){

  /* Input is decided by output */
  // if(this.input.determined_by.p == 'output' && this.input.computed.p == false){
  //   if(this.output.computed.p == true){
  //     this.input.p = this.output.p;
  //     this.input.computed.p = true;
  //   }
  // }
  if(this.input.determined_by.p == 'output'){
    assign_values_isobaric_process(this.output, this.input);
  }
  /* Input is decided by output */

  /* Output is decided by input */
  // if(this.output.determined_by.p == 'input' && this.output.computed.p == false){
  //   if(this.input.computed.p == true){
  //     this.output.p = this.input.p;
  //     this.output.computed.p = true;
  //   }
  // }
  if(this.output.determined_by.p == 'input'){
    assign_values_isobaric_process(this.input, this.output);
  }
  /* Output is decided by input */

}

/**************************************************************************************************/

function assign_values_isobaric_process(from, to){
  if(to.computed.p == false && from.computed.p == true){
    to.p = from.p;
    to.computed.p = true;
  }
}

/**************************************************************************************************/
