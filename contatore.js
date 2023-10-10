
// const counter='numero'

// const contare=document.getElementById('contatore')



// const saveSession= () =>{
//   const numero=contare.value
//  sessionStorage.setItem(counter,numero)
  
   
// }

// saveSession()

const timerElements = document.querySelectorAll('#contatore');



function startTimer(durationInSeconds,display) {
     const timer = durationInSeconds;

    const intervalId = setInterval(function () {
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



