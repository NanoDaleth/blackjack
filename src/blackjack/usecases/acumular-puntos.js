import { valorCarta } from "./valor-carta";

export const acumularPuntos = (carta,turno,puntosJugadores,smalls) => {
    
    //if (!turno) throw new Error('el turno es un elemento obligatorio');
    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smalls[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}