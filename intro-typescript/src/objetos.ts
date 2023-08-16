//Object (array)
let goleadores:string[] = ['joel','phidoly','akio']
let goles:number[]=[0,-1,6]

console.log(`goleadores ${goleadores}`);
console.log(`goles ${goles}`);

let corners:number[]=[]

//metodo alternativo  para definir array en typescrip
let penalties:Array<boolean> = [true]
console.log(`joel boto 2 penaltis: ${penalties}`);


//asutocompletar con metodos aplicables segun tiupos de arrays

console.log(goleadores.map(ele=>ele.toString()) );

//objec 
let goleadoresId = [7,10,17,9,11]
goleadoresId.push(+'1')
console.log(goleadoresId);



//objetos 

const songs = {
    id:1,
    name:'Exceeding joy'
}

console.log(songs);



const singer:{
    readonly id:number,
    name:string,
    edad?:number
}={
    id:1,
    name:'Joel',
    
}

singer.edad = +"30"
/* singer.id = 2 */ //error no se puede actualizar los datos devido al 'reandonly'

console.log(singer,singer.id);


