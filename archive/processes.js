/*******************************************************************************************/
// Isobaric Process

function isobaricProcess(input, output){
  this.input_state = input;
  this.output_state = output;

  input.to = this;
  output.from = this;

  this.mass_flow_rate = 1;

  this.heat_transfer = null;
  this.work_done = 0;

  this.calculate = function(){

    if(this.input_state.pressure_known == true){}

    // if(this.input_state.pressure != null && this.output_state.pressure == null){ this.output_state.pressure = this.input_state.pressure; }
    // else if(this.output_state.pressure != null && this.input_state.pressure == null){ this.input_state.pressure = this.output_state.pressure; }
    //
    // if(this.heat_transfer != null && this.output_state.temperature == null ){
    //   this.output_state.temperature = this.heat_transfer/(this.mass_flow_rate*Cp_air) - this.input_state.temperature;
    // }
    //
    // if(this.heat_transfer != null && this.input_state.temperature == null ){
    //   this.input_state.temperature = this.output_state.temperature - this.heat_transfer/(this.mass_flow_rate*Cp_air);
    // }

    calculateState(this.input_state);
    calculateState(this.output_state);
  }
}

/*******************************************************************************************/
// Adiabatic Process

function adiabaticProcess(input, output){
  this.input_state = input;
  this.output_state = output;

  input.to = this;
  output.from = this;

  this.mass_flow_rate = 1;

  this.heat_transfer = null;
  this.work_done = null;

  this.calculate = function(){
    // var known = null, unknown = null;
    // if( isCompletelyDefined(this.input_state) && !isCompletelyDefined(this.output_state) ){ known = this.input_state; unknown = this.output_state; }
    // else if( isCompletelyDefined(this.output_state) && !isCompletelyDefined(this.input_state) ){ known = this.output_state; unknown = this.input_state; }
    //
    // if(known == null){ return }
    //
    // if(unknown.pressure != null){
    //   var temp_const = known.pressure*Math.pow(known.volume, γ_air);
    //   unknown.volume = Math.pow( temp_const/unknown.pressure, 1/γ_air );
    // }
    // else if(unknown.volume != null){
    //   var temp_const = known.pressure*Math.pow(known.volume, γ_air);
    //   unknown.pressure = temp_const/Math.pow(unknown.volume, γ_air);
    // }
    // else if(unknown.temperature != null){
    //   var temp_const = known.temperature*Math.pow(known.volume, γ_air-1);
    //   unknown.temperature = temp_const/Math.pow(known.volume, γ_air-1);
    // }

    calculateState(this.input_state);
    calculateState(this.output_state);
  }
}
