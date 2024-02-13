import { pedirCarta } from "./";
import { acumularPuntos } from "./";
import { determinarGanador } from "./";
import { crearCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos  punto minimos para que gane la computadora
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos,deck,puntosJugadores,smalls,divCartasJugadores) => {
      
    

    if(!puntosMinimos) throw new Error('Puntos minimos necesarios');
    if(!deck) throw new Error('Deck necesario');

    let puntosComputador = 0;

    do{

        
        const carta = pedirCarta(deck);

        puntosComputador=acumularPuntos(carta,puntosJugadores.length-1,puntosJugadores,smalls);

    //div Append
        crearCarta(carta,puntosJugadores.length-1,divCartasJugadores);

        if(puntosMinimos>21){
            break;
        }

    }while( (puntosComputador<puntosMinimos) && (puntosMinimos<21) );


    determinarGanador(puntosJugadores);

}