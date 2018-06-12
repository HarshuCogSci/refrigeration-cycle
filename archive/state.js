var R_air = 287, γ_air = 1.4, Cp_air = 1000, Cv_air = 713;

var ambient = { p: 100, T: 300 };
ambient.v = getVolume(ambient.p, ambient.T);

/**************************************************************************************************/
// Units
// R_air, Cp_air, Cv_air : J/kgK
// Pressure: kPa, Volume: meter_cube/kg, Temperature: K

/**************************************************************************************************/
// Defining a state

function State(){
  this.pressure = null;
  this.temperature = null;
  this.volume = null;

  this.pressure_known = false;
  this.temperature_known = false;
  this.volume_known = false;

  this.pressure_active = false;
  this.temperature_active = false;
  this.volume_active = false;

  this.pressure_checked = false;
  this.temperature_checked = false;
  this.volume_checked = false;

  this.update_check_box = function(){
    
  }
}

function createState(){
  return( new State() );
}

/*******************************************************************************************/
// State functions

function calculateState(d){
  if(d.pressure == null && d.temperature != null && d.volume != null){ d.pressure = getPressure(d.volume, d.temperature); }
  if(d.pressure != null && d.temperature == null && d.volume != null){ d.temperature = getTemperature(d.pressure, d.volume); }
  if(d.pressure != null && d.temperature != null && d.volume == null){ d.volume = getVolume(d.pressure, d.temperature); }
}

function isCompletelyDefined(d){
  if(d.pressure != null && d.temperature != null && d.volume != null){ return true } else { return false }
}

/*******************************************************************************************/
// Gas law relations for arrays

function getTemperatureArray(p,v){
  return numeric.mul( numeric.mul(p, v), (1000/R_air) )
}

function getPressureArray(v, T){
  return numeric.mul( numeric.div(T, v), (R_air/1000) )
}

function getVolumeArray(p, T){
  return numeric.mul( numeric.div(T, v), (R_air/1000) )
}

/*******************************************************************************************/
// Gas law relations

function getVolume(p, T){
  return R_air*T/(p*1000)
}

function getPressure(v, T){
  return (R_air*T/v)/1000
}

function getTemperature(p, v){
  return (p*1000)*v/R_air
}
