export default class Kartya{
    /* megjeleníti a képet, ha aképre kattintunk, akkor megfordul, vissza is tud fordulni, el tud rejtozni */
    #kep = "";
    #allapot=true; //true - látható a kép, false - a háttér látható
    #szuloElem;
    #kepElem;

    constructor(kep, szuloElem){
        this.#kep = kep;
        this.#szuloElem = szuloElem;
        this.#allapot = false;
        this.#kepElem = this.#szuloElem.children("div:last-child").children("img");
        console.log(this.#kepElem);
        

        this.#megjelenit();

        this.#kepElem.on("click",() =>{
            this.setAllapot(true);
            this.#triger("kapcsol");
        });
    }

    #megjelenit(){
        let txt = `
            <div class="card col-sm-3">
                <img src="kepek/hatter.jpg" alt="kép">
            </div>
        `;
        this.#szuloElem.append(txt);
    }

    setAllapot(ertek){
        if (ertek == true || ertek == false) {
            this.#allapot = ertek;
            this.#felfordit();
        }
    }

    #felfordit(){
        /* állapottól függően vagy a háttérképet vagy a képet tölti be a kép src-jébe */
        /*  */
        if (this.#allapot) {
            this.#kepElem.attr("src", this.#kep);
        }
        else{
            this.#kepElem.attr("src", "kepek/hatter.jpg");
        }
    }

    #triger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail: this.#kep});
        window.dispatchEvent(e);
    }
}