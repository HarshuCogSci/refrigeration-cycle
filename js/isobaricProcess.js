/**************************************************************************************************/
// Defining Isobaric Process

function Isobaric_process(input, output){
  this.input = input; this.output = output;
  input.to = this; output.from = this;
}
