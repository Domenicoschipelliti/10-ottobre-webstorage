
// const counter='numero'

// const contare=document.getElementById('contatore')



// const saveSession= () =>{
//   const numero=contare.value
//  sessionStorage.setItem(counter,numero)
  
   
// }

// saveSession()
let timer=0
const timerElements = document.querySelectorAll('#contatore');

let intervalId

function startTimer(durationInSeconds,display) {
     timer = durationInSeconds;

     intervalId = setInterval(function () {
        // console.log(timer);
        display.textContent = timer;

        if (timer <= 0) {
            clearInterval(intervalId);
            
            
        }
       

        timer++;
    }, 1000); 
}



timerElements.forEach(function (element) {
    startTimer(1, element); // Imposta il tempo iniziale in secondi qui
})



const tim='time'

const save=()=>{
    const numero=timerElements.value
    sessionStorage.setItem(tim , numero)
    
   
}



