// Project 01
let screen = document.getElementById('screen')
button = document.querySelectorAll('button')
let screenValue =  '';
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText)
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if(buttonText == 'c'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){

            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText
            screen.value = screenValue;  
        }
    })
}

// Project 02
let seconds = 00;
let tens = 00;
let appendTens = document.getElementById('tens')
let appendSeconds = document.getElementById('seconds')
let buttonStart = document.getElementById('button-start')
let buttonStop = document.getElementById('button-stop')
let buttonReset = document.getElementById('button-reset')
let interval; // to store time value

const  startTime=()=>{
    tens++
    if(tens<9){
        appendTens.innerHTML = "0"+tens;

    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++
        appendSeconds.innerHTML = "0"+seconds;
        tens =0;
        appendTens.innerHTML = "0"+0;
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds
    }
}

buttonStart.onclick =function(){
    interval = setInterval(startTime)
}
buttonStop.onclick = function(){
    clearInterval(interval)
}
buttonReset.onclick = function(){
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

// Project 03

const tip = document.getElementById('range')
const tit = document.querySelector('.ran')
const tipamt = document.querySelector('.tipamt')
const amt = document.querySelector('.bill')

tip.addEventListener('input',(e)=>{
 let inp = document.getElementById('num').value;
 let tipam = e.target.value

 if(inp ===""){
    alert("Amount Required")
 }else{
    tit.textContent = `${tipam}%`;
    tipamt.textContent = `${tipam}%`;
    amt.textContent = tipCalc(parseFloat(inp),parseFloat(tipam))
 }
})

function tipCalc(amt ,tip){
    let tipc = (amt*tip/100);
    return tipc+amt;
}