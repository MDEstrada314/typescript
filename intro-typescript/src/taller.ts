import * as readlineSync from 'readline-sync';

class Centro{
    constructor(
       public id: number,
       public nombre: string,
       public cantidad:number,
       public campers:Array<any>
    ){}
}


class Rutas{
    constructor(
        public id:number,
        public nombre:string

    ){}
}

class Nivel{
    constructor(
        public id:number,
        public nombre: string
    ){}
}

class Campers{ 
    constructor(
        public id:number,
        public nombre: string,
        public estado: boolean,
        public contrato:string

    ){}
}



const campus = new Centro (1,'Campus',0,[])
const trimer = new Centro (2,'Trimer',0,[])
const fertor = new Centro (3,'fertor',0,[])
const artemis = new Centro (4,'Artemis',0,[])
const apolo = new Centro (5,'Apolo',0,[])


const java = new Rutas (1,'java')
const pyton = new Rutas (2,'pyton')
const javaScript = new Rutas (3,'javaScript')
const Cchart = new Rutas (4,'Cchart')
const net = new Rutas (5,'net')


const html = new Nivel(1,'HTML')
const css = new Nivel(1,'CSS')
const JS = new Nivel(1,'JS')
const Boostrap = new Nivel(1,'Boostrap')


let idcamper=1
let opcion = -1
let arrayCampers = []
let arraytrimer = []
let arrayfertor =[]
let arrayArtemis =[]
let arrayAPOLO = []

while (opcion !== 0) {
    const reset = "\x1b[0m";
    const blanco = "\x1b[37m";
    const rojo = "\x1b[31m";
    const bold = "\x1b[1m";
    const backgroundmagenta = "\x1b[45m";
    const backgroundverde = "\x1b[42m"
    const backgroundRojo = "\x1b[31m"
    

    console.log(`
        ${ bold + backgroundmagenta} SISTEMA DE INFORMACION ${reset}
        
        1. Registrar Camper
        2. Estado Camper
        3. Contrato
        4. Resultados
        ${rojo}0.SALIR${reset}
    `);
    opcion = Number(readlineSync.question('Ingrese su opcion: '))

    switch (opcion) {
        case 1:
            console.log( backgroundverde + `----------REGISTRO CAMPERS-----------${reset}\n`);
            
           let nombre = (readlineSync.question(`Ingrese el nombre: \n`))
        
           console.log(`\n selecione el numero del centro que desea asignar`);
            
           console.log(`\n1. ${campus.nombre}\n2. ${trimer.nombre} \n3. ${fertor.nombre}\n4. ${artemis.nombre}\n5. ${apolo.nombre}\n`);


           let centro = Number(readlineSync.question('Ingrese el centro: '))
            let nombreCentro
            switch (centro){
                case 1:
                    nombreCentro = campus.nombre
                    const camper1 = new Campers (idcamper,'',false,'')
                    camper1.nombre = nombre
                    arrayCampers.push(camper1)
                    let tamañoArray = arrayCampers.length
                    campus.cantidad=tamañoArray
                    campus.campers = arrayCampers
                    console.log(campus);
                    idcamper++
                    
                    break
                case 2:
                    nombreCentro = trimer.nombre
                    const camper2 = new Campers (idcamper,'',false,'')
                    camper2.nombre = nombre
                    arraytrimer.push(camper2)
                    let tamañoTrimer = arraytrimer.length
                    trimer.cantidad=tamañoTrimer
                    trimer.campers = arraytrimer
                    console.log(trimer);
                    idcamper++
                    break
                case 3:
                    nombreCentro = artemis.nombre
                    const camper3 = new Campers (idcamper,'',false,'')
                    camper3.nombre = nombre
                    arrayfertor.push(camper3)
                    let tamañofertor = arrayfertor.length
                    fertor.cantidad=tamañofertor
                    fertor.campers = arrayfertor
                    console.log(fertor);
                    idcamper++
                    break
                case 4:
                    nombreCentro = artemis.nombre
                    const camper4 = new Campers (idcamper,'',false,'')
                    camper4.nombre = nombre
                    arrayArtemis.push(camper4)
                    let tamañoartemis = arrayArtemis.length
                    artemis.cantidad=tamañoartemis
                    artemis.campers = arrayArtemis
                    console.log(fertor);
                    idcamper++
                    break
                case 5:
                    nombreCentro = apolo.nombre
                    const camper5 = new Campers (idcamper,'',false,'')
                    camper5.nombre = nombre
                    arrayAPOLO.push(camper5)
                    let tamañoapolo = arrayAPOLO.length
                    artemis.cantidad=tamañoapolo
                    artemis.campers = arrayAPOLO
                    console.log(apolo);
                    idcamper++

            }
                break;

            case 2:
                console.log(`${ bold + backgroundmagenta} selecione el centro ${reset}`);
                console.log(`\n1. ${campus.nombre}\n2. ${trimer.nombre} \n3. ${fertor.nombre}\n4. ${artemis.nombre}\n5. ${apolo.nombre}\n`);
                let opcionCentro =Number(readlineSync.question('=>'))
                switch (opcionCentro) {
                    case 1:
                        console.log("-------------------CAMPUS-----------");
                        console.log(campus.campers);
                        let opcionCentro=Number(readlineSync.question('digite la id del camper que termino el curso: '))
                        for (let index = 0; index < campus.campers.length; index++) {
                            if(opcionCentro===campus.campers[index].id){
                                campus.campers[index].estado = true
                            }else{
                                console.log(`${ bold + backgroundRojo} CAMPER NO ENCONTRADO ${reset}`)                                 
                            }
                            console.log(campus); 
                        }
                        
                        
                        break;
                    case 2:
                        console.log("-------------------TRIMER-----------\n");
                        console.log(trimer.campers);
                        let opcionCentro2=Number(readlineSync.question('digite la id del camper que termino el curso: '))
                        for (let index = 0; index < trimer.campers.length; index++) {
                            if(opcionCentro2===trimer.campers[index].id){
                                trimer.campers[index].estado = true
                            }else{
                                console.log(`\n ${ bold + backgroundRojo} CAMPER NO ENCONTRADO ${reset} \n`)                             
                            }
                            console.log(trimer); 
                        }
                        

                        break
                }



            
            break;


            case 3:
            
            break;



            case 4:
            
            break;




    }
}

