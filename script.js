
const outputTopTextElement = document.getElementById('output-top');
const outputBottomTextElement = document.getElementById('output-bottom');
const numbersButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.querySelector('.clear');
const clearAllButton = document.querySelector('.clear-all');

let bottomOutPut = '';
let topOutPut = '';
let hasDot = false;
let result = null;
let lastOperation = '';

numbersButton.forEach(number =>{
    number.addEventListener('click', (e)=> {
        if (e.target.innerText === "." && !hasDot){
            hasDot = true;
        }else if (e.target.innerText === "." && hasDot){
            return;
        }
        bottomOutPut += e.target.innerText
        outputBottomTextElement.innerText = bottomOutPut;
    })
});

operatorButton.forEach(operator =>{
    operator.addEventListener('click', (e)=>{
        if (!bottomOutPut) result;
        hasDot = false;
        const operatorName = e.target.innerText;
        if( topOutPut && bottomOutPut && lastOperation){
            mathOperation();
        }else {
            result = parseFloat(bottomOutPut)
        }
        clearVar(operatorName);
        console.log(result)
    })
});

function clearVar(name = ' '){
    topOutPut += bottomOutPut + name + ' '
    outputTopTextElement.innerText = topOutPut;
    outputBottomTextElement.innerText= '';
    bottomOutPut = '';
}

function mathOperation(){
    if(lastOperation === 'x'){
        result = parseFloat(topOutPut) * parseFloat(bottomOutPut);
    } else if (lastOperation === "+"){
        result = parseFloat(topOutPut) + parseFloat(bottomOutPut);
    }
    else if (lastOperation === "-"){
        result = parseFloat(topOutPut) - parseFloat(bottomOutPut);
    }
    else if (lastOperation === "/"){
        result = parseFloat(topOutPut) / parseFloat(bottomOutPut);
    }
}

equalsButton.addEventListener('click', (e)=>{
    if (!topOutPut || !bottomOutPut) return;
    hasDot = false;
    mathOperation();
    clearVar();
    outputBottomTextElement.innerText = result;
    topOutPut = '';
})