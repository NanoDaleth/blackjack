
import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from "./usecases/crear-deck";
import { crearDeck,pedirCarta,valorCarta, acumularPuntos,crearCarta,turnoComputadora } from './usecases';

//funciones anonimas autoinvocadas
//modulo de patron
const miModulo=(() => {

  'use strict'


  let deck=[];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

  // let puntosJugador = 0,
  //     puntosComputador=0;
  let puntosJugadores = [];
  //Referencias del html

  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const smalls = document.querySelectorAll('small');

  const divCartasJugadores = document.querySelectorAll('.divCartas');

  const inicializarJuego = ( numJugadores = 2 ) =>{
      deck = crearDeck(tipos,especiales);
      puntosJugadores = [];
      for(let i=0;i<numJugadores;i++){
          puntosJugadores.push(0);
      }
      smalls.forEach(elem => elem.innerText=0);
      divCartasJugadores.forEach(elem=> elem.innerHTML='');

      btnPedir.disabled=false;
      btnDetener.disabled=false;
  }
  
  deck = crearDeck(tipos,especiales);
 

  //esta funcion me permite tomar una carta

//   const pedirCarta = () =>{

//       if(deck.length === 0){
//           throw 'No hay cartas en el deck';
//       }
      
//       return deck.pop();
//   }

//   const valorCarta = (carta) =>{

//       const valor = carta.substring(0, carta.length-1);
      
//       //
//       return (!isNaN(valor))? valor*1:
//                               (valor==='A')? 11:
//                               10;        
//   }

  //Turno: 0 jugador y el ultimo sera la computadora
//   const acumularPuntos = (carta,turno) => {
//       puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
//       smalls[turno].innerText = puntosJugadores[turno];
//       return puntosJugadores[turno];
//   }
  //turno de la computadora

  

//   const determinarGanador = () =>{

//       const [puntosMinimos,puntosComputador]=puntosJugadores;

//       setTimeout(() => {        
//           if(puntosComputador===puntosMinimos){
//               alert('Todos Perdieron');
//           }else if(puntosMinimos>21){
//               alert('Gana el computador');
//           }else if(puntosComputador>21){
//               alert('Jugador gana');
//           }else{
//               alert('Computadora gana');
//           }
//       }, 100);
//   }

  

  //Callback

  //Eventos

  btnPedir.addEventListener('click',() => {
      
      
      const carta= pedirCarta(deck);
      const puntosJugador=acumularPuntos(carta,0,puntosJugadores,smalls);

      crearCarta(carta,0,divCartasJugadores);

      //div Append        

      if (puntosJugador>21){
          console.warn('You lose');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,deck,puntosJugadores,smalls,divCartasJugadores);       

      }else if(puntosJugador===21){
          console.warn('21, Genial');
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,deck,puntosJugadores,smalls,divCartasJugadores);
          alert('Gana el jugador');
      }

  });

  btnDetener.addEventListener('click',() => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0],deck,puntosJugadores,smalls,divCartasJugadores);
  });

  btnNuevo.addEventListener('click', ()=>{

      inicializarJuego();

  })

  return {
      nuevoJuego: inicializarJuego
  };

})();


