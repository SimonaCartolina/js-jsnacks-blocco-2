const stringhe=['PaPErino', 'MinniE', 'pLUTo', 'Tigro', 'WINnie', 'PIPPo'];

let correctedStringhe=[];

stringhe.forEach((word)=>{
const newWord= word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
correctedStringhe.push(newWord);
});


    console.log(correctedStringhe);
