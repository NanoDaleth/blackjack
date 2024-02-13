import _ from "underscore";

//export const miNombre = 'Daleth';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>}
 */

export const crearDeck = (tiposDeCarta,tiposEspeciales) =>{

    if(!tiposDeCarta || tiposDeCarta.length===0){
        throw new Error('Tipo de carta obligatorio como un arreglo de string');
    }
    if(!tiposEspeciales || tiposEspeciales.length===0){
        throw new Error('Tipo de carta obligatorio como un arreglo de string');
    }

    let deck=[];

    for(let i = 2; i<=10; i++){
        //deck.push(i+'C');
        for(let tipo of tiposDeCarta){
            deck.push(i+tipo);
        }
    }

    for(let tipo of tiposDeCarta){
        for(let especial of tiposEspeciales){
            deck.push(especial+tipo);
        }
    }        
    deck=_.shuffle(deck)
    return deck;
}

// default export crearDeck;