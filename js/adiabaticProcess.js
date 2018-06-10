/**************************************************************************************************/
// Defining Adiabatic Process

function Adiabatic_process(input, output){
  this.input = input; this.output = output;
  input.to = this; output.from = this;
}
