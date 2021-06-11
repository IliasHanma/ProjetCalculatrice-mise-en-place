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


let input = document.createElement('input');
divEcran.appendChild(input);
input.classList.add('input');






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

divTouches.addEventListener('click', (e) =>{
    
        if(e.target.innerText == "0"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "1"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "2"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "3"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "4"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "5"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "6"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "7"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "8"){
            input.value += parseInt(e.target.innerText);
        }else if(e.target.innerText == "9"){
            input.value += e.target.innerText;
        }else if(e.target.innerText == "*") {
            input.value += e.target.innerText;
        }else if(e.target.innerText == "/"){
            input.value += e.target.innerText;
        }else if(e.target.innerText == "+"){
            input.value += e.target.innerText;
        }else if(e.target.innerText == "-"){
            input.value += e.target.innerText;
        }else if(e.target.innerText == "="){
            input.value = Math.round(eval(input.value));
        }else if(e.target.innerText == "("){
            input.value += e.target.innerText;
        }else if(e.target.innerText == ")"){
            input.value += e.target.innerText;
        }else{
            input.value = "";
        }
    
    });



   





