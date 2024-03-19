let w, h, bmi;

function read(id){
  return document.getElementById(id).value;
}

function bmi(){
  w = parseFloat(read('t1'));
  h = parseFloat(read('t2'));

  bmi = w/(h*h);

  document.getElementById('bmi').innerHTML = bmi;
}