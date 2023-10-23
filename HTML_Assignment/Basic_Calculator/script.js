var display= document.getElementById('result');

function calculate(val){
    var x= document.getElementsByClassName('display');
    if(display.value==undefined){
        display.value='';
    }
    display.value+= val;
}

function operator(){
    var n1= display.value;
    n2=eval(n1);
    if (n2 == 0.30000000000000004) {
        n2 = 0.3
    }
    display.value=n2;
}

function clr(){
    display.value='';
}