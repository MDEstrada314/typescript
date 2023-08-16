class Astronautas {
    constructor(
        public id:number, 
        public nombre:string,
        private _record:string,
        public recompesa:string
            
        
        )
        {}

        obtenerRecompensa(record:string){
            if(record === 'Artemis'){
                this.recompesa = 'has ganado por rompere el record'
                return this.recompesa
            }
        }

        set record(record:string){
            this._record=record
        }


        get record():string{
            return this._record
        }

       
}
//via constructor
const atronautaPhodoli = new Astronautas(1,'phidoli','santa Marte','')
//ganador
atronautaPhodoli.obtenerRecompensa('Artemis')

console.log(atronautaPhodoli);


//setterf

atronautaPhodoli.record = 'sincelejo galaxi'
console.log(`record via setter de phisoddy ${atronautaPhodoli.record}`);
