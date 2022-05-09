let globalVariable1 = 12; //global scope
//console.log(funVar);

let globalVariable2 = function(){
    let funVar1 = "hello"
    console.log("inside the function", globalVariable1);
    
    let funVar2 = function(){
        console.log("funVar2 belseje");
        console.log(globalVariable1);
        console.log(funVar1);
        
        let funInFunVar1 = true;
        let funInFunVar2 = function(){
            console.log(funInFunVar1);
        }
        funInFunVar2();// meg kell mindig hívni a függvényt, csak akkor működik a console.log()
    }
    funVar2();
    //funInFunVar2();
    
    if(funVar1 === "hello"){
        var blockVariable1 = "bye"
    }//block scope
    else {
        /* console.log(blockVariable1);//itt hiba mert a block scope-on kívül van */
    }
    console.log(blockVariable1); //itt hiba mert a block scope-on kívül van
} //local scope

globalVariable2(); //meghívom a globalVariable2 függvényt

//Hoisting példák:

var varVariable = 1;
console.log(varVariable);

let letVariable1; //nem adunk hozzá értéket, így nem inicializálódik
console.log(letVariable1);
let letVariable2 = "variable 2";
console.log(letVariable2);

const constVariable = "Ciao";
//constVariable = "Hello";
console.log(constVariable);

const obj1 = {};
obj1.key = "value"; //ez működik, mert hozzáad értéket
//obj1 = {key: "value"}; //hibát dob, egy üres objektumot rendeltünk hozzá először majd megpróbáltuk felülírni egy másik objektummal, ami nem üres
console.log(obj1);


const globalVariable3 = function(parameter1, parameter2, parameter3){
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3); //így lefut és kiírja a teljes függvény szövegét
    console.log(parameter3());//így maga a return-ölt adat jelenik meg

}
const globalVariable4 = "apple";

const globalVariable5 = function(){
    return "pear"
}

const globalVariable6 = function (){
    return "peach"
}

globalVariable3(globalVariable5(), globalVariable4, globalVariable6);



const loadEvent = function(parameter1) {
    const rootElement = document.getElementById("root")
    console.log(rootElement)
    console.log(parameter1);

    rootElement.addEventListener("click", function(event){
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", "Clicked, ")
        event.currentTarget.classList.toggle("Clicked")
    })
    //console.log(globalVariable1);
}

window.addEventListener("load", loadEvent);

