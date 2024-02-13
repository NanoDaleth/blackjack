


export const crearCarta=(carta, turno,divCartasJugadores)=>{

    if (!carta) throw new Error('La carta es un elemento obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta'); 
    divCartasJugadores[turno].append(imgCarta);
}