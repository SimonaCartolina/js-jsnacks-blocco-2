/**

Crea un array composto da 15 automobili.

Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */

let carList=[
    car={
    marca:'',
    modello:'',
    alimentazione:'benzina',
    },

    car={
        marca:'',
        modello:'',
        alimentazione:'diesel',
        },

        car={
            marca:'',
            modello:'',
            alimentazione:'benzina',
            },

            car={
                marca:'',
                modello:'',
                alimentazione:'diesel',
                },

                car={
                    marca:'',
                    modello:'',
                    alimentazione:'metano',
                    },

                    car={
                        marca:'',
                        modello:'',
                        alimentazione:'gas',
                        },

                        car={
                            marca:'',
                            modello:'',
                            alimentazione:'diesel',
                            },

                            car={
                                marca:'',
                                modello:'',
                                alimentazione:'gas',
                                },

                                car={
                                    marca:'',
                                    modello:'',
                                    alimentazione:'elettrica',
                                    },

                                    car={
                                        marca:'',
                                        modello:'',
                                        alimentazione:'metano',
                                        },

                                        car={
                                            marca:'',
                                            modello:'',
                                            alimentazione:'gas',
                                            },

                                            car={
                                                marca:'',
                                                modello:'',
                                                alimentazione:'benzina',
                                                },

                                                car={
                                                    marca:'',
                                                    modello:'',
                                                    alimentazione:'gpl',
                                                    },

                                                    car={
                                                        marca:'',
                                                        modello:'',
                                                        alimentazione:'gas',
                                                        },
]

for(let i=0; i<carList.length; i++){

    if(carList[i].contains='benzina'){
        const oilCars=[];
        oilCars.push(carList[i]);
        console.log(oilCars);

    }
    
}