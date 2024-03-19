let a = 0, b = 0;

function sum(){
    a =  document.getElementById('t1').value;
  b =  document.getElementById('t2').value;
    document.getElementById('res').innerHTML = (a + b);
  }

  function sub(){
    a =  document.getElementById('t1').value;
    b =  document.getElementById('t2').value;
    document.getElementById('res').innerHTML = a - b;
  }

  function mul(){
    a =  document.getElementById('t1').value;
    b =  document.getElementById('t2').value;
    document.getElementById('res').innerHTML = a * b;
  }

  function div(){
    a =  document.getElementById('t1').value;
  b =  document.getElementById('t2').value;
    document.getElementById('res').innerHTML = a / b;
  }