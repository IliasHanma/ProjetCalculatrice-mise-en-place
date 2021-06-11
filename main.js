let myBody = document.querySelector('body');
let divCalcu = document.createElement('div');
divCalcu.classList.add('calculatrice');
myBody.appendChild(divCalcu);

let divEcran = document.createElement('div');
divEcran.classList.add('ecran');
divCalcu.appendChild(divEcran);
let divTouches = document.createElement('div');
divTouches.classList.add('touches');
divCalcu.appendChild(divTouches);

let btn = document.createElement('button');



let myTab = ["C","(",")","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];
let i = 0;
myTab.forEach(element => {
    element=document.createElement("button");
    divTouches.appendChild(element);
    element.innerText = myTab[i];
    element.classList.add('bouton');
    i++
});



// for (let i = 0; i < 19; i++){
//     bouton = document.createElement('button')
//     bouton[0].textContent = "C";
//     bouton.classList.add('bouton');
//     divTouches.appendChild(bouton);



    
    // const xBoutons = divs[2].getElementsByTagName('button');
// }

