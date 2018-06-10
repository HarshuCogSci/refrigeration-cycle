/**************************************************************************************************/
// Defining a state

function State(){
  this.p = null; this.v = null; this.T = null;
  this.known = { p: false, v: false, T: false };
  this.active = { p: false, v: false, T: false };
  this.checked = { p: false, v: false, T: false };
}
