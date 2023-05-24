/*Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi*/
function randomNumber(){
    array=[1, 2, 3, 4, 5];
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}
for(i=0; i<3; i++){
    let consoleNumber= randomNumber(i);
    console.log(consoleNumber);
}