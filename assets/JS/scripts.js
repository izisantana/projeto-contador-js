var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    if(currentNumber < 10){
    currentNumber= currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement(){
    if(currentNumber > -10){
    currentNumber= currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
function zeraContador() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
   
}