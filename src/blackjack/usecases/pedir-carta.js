/**
 * 
 * @param {Array<String>} deck 
 * @returns {Array<string,Array<string>>}
 */

export const pedirCarta = (deck) =>{
    
    //let deck=deckCreado;

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    
    return deck.pop();
}
