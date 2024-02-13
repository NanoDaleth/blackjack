

export const determinarGanador = (puntosJugadores) =>{

    const [puntosMinimos,puntosComputador]=puntosJugadores;

    setTimeout(() => {        
        if(puntosComputador===puntosMinimos){
            alert('Todos Perdieron');
        }else if(puntosMinimos>21){
            alert('Gana el computador');
        }else if(puntosComputador>21){
            alert('Jugador gana');
        }else{
            alert('Computadora gana');
        }
    }, 100);
}
