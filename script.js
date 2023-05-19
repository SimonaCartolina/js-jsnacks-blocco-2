/*snack 1*/

/*1.Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. */

let numberArray=[];

let sum=0;

let minore=false;
let input=document.querySelector('input');
let button=document.querySelector('button');


/*2. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.*/

while(sum < 50) {

    let i=parseInt(prompt('Insert a number'));
    sum= parseInt(sum + i);
    numberArray.push(i);
    console.log(numberArray);

    if(sum>50){
        minore=true;
        i++;
    };

};


