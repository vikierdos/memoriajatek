import Kartya from "./Kartya.js";

export default class Jatek{

    #KEPLISTA=[];
    #kivalasztottak=[];

    constructor(KEPLISTA){

        this.#KEPLISTA = KEPLISTA

        this.jatekterOsszeallit();

        $(window).on("kapcsol", (event) =>{
            console.log(event.detail);
            this.#kivalasztottak.push(event.detail)
            this.#ellenoriz();
        });
        
    }

    #ellenoriz(){
        if(this.#kivalasztottak === 2){
            if(this.#kivalasztottak[0] === this.#kivalasztottak[1]){
                /* vissza kéne fordítani 
                és ki kell üríteni a listát */
                this.#kivalasztottak.pop();
                this.#kivalasztottak.pop();
            }
        }
    }

    jatekterOsszeallit(){
        this.#KEPLISTA.forEach((elem) => {
            new Kartya(elem,$(".jatekter"))
        });
    }
}