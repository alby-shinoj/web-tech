function read(id){
    return document.getElementById(id).value;
}

function change_bg(){
    var bg = read('t1');
    document.getElementById('b1').style.backgroundColor = bg;
}

function change_c(){
    var c = read('t2');
    document.getElementById('tb1').style.color = c;
}

function change_s(){
    var s = parseInt(read('t3'));
    document.getElementById('tb1').style.fontSize = s + 'px';
}

function change_w(){
    var w = parseInt(read('t4'));
    document.getElementById('b1').style.width = w + 'px';
}

function change_h(){
    var h = parseInt(read('t5'));
    document.getElementById('b1').style.height = h + 'px';
}

function change_br(){
    var br = parseInt(read('t6'));
    document.getElementById('b1').style.borderRadius = br + 'px';
}