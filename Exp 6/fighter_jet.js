var e1 = document.getElementById('i1'), pos = 30;
var e2 = document.getElementById('i3');
var id = null;

function start(){
    id = setInterval(move, 1);
    function move(){
        if(pos == 730){
            clearInterval(id);
            e2.style.opacity = 1;
        }

        else{
            pos++;
            e1.style.left = pos + 'px';
        }
    }
}

function stop(){
    clearInterval(id);
}

function reset(){
    clearInterval(id);
    pos = 30;
    e1.style.left = pos + 'px';
    e2.style.opacity = 0;
}