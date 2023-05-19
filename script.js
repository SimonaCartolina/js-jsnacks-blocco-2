/*Generare numero casuale tra 1 e 100 COMPRESI.*/

let casualNumber= Math.floor(Math.random()*100) +1;

console.log(casualNumber);

let i=prompt('Guess number from 0 to 100');


/*Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.*/

while(i!= casualNumber){
    i=prompt('Try again!');
    console.log(i);

    if(i<casualNumber){

        console.log('Your number is lower');
        console.log(i);
        i++;
    }
    else if(i>casualNumber){

        console.log('Your number is higher');
        console.log(i);
        i++;
    }
}

if(i=casualNumber){
    console.log(i);
    console.log('Congrats!');
    alert("Congratulation! You won the game");
}





/*Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.*/