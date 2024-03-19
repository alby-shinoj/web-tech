let amt, rate, tenure;

function read(id){
  var hre;
  return document.getElementById(id).value;
}

function emi_c(){
  amt = parseInt(read('t1'));
  rate = read('t2')/12/100;
  tenure = read('t3') * 12;

  var emi = parseInt(amt*rate*(1 + rate)*tenure / ((1+rate)*tenure - 1));
  document.getElementById('emi').innerHTML = 'Rs. ' + emi;

  var interest = parseInt(amt*rate*(tenure/12));
  document.getElementById('interest').innerHTML = 'Rs. ' + interest;

  var total = amt + interest;
  document.getElementById('total').innerHTML = 'Rs. ' + total;
}