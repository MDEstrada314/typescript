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

while (opcion !== 0) {
    const reset = "\x1b[0m";
    const blanco = "\x1b[37m";
    const rojo = "\x1b[31m";
    const bold = "\x1b[1m";
    const backgroundmagenta = "\x1b[45m";
    const backgroundverde = "\x1b[42m"
    

    console.log(`
        ${ bold + backgroundmagenta} SISTEMA DE INFORMACION ${reset}
        
        1. Registrar Camper
        2. Actualizar Camper
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
                    campus.campers = arrayCampers
                    console.log(campus);
                    idcamper++
                    
                    break
                case 2:
                    nombreCentro = trimer.nombre
                    const camper2 = new Campers (idcamper,'',false,'')
                    camper2.nombre = nombre
                    arraytrimer.push(camper2)
                    trimer.campers = arraytrimer
                    console.log(trimer);
                    idcamper++
                    break
                case 3:
                    nombreCentro = fertor.nombre
                    break
                case 4:
                    nombreCentro = artemis.nombre
                    break
                case 5:
                    nombreCentro = apolo.nombre

            }


            
            
            




                break;

            case 2:
            
            break;


            case 3:
            
            break;



            case 4:
            
            break;




    }
}

