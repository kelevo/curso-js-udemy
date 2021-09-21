


let juegos = [ 'Bomberman', 'The king of fighter', 'Plants vs Zombies', 'Crash' ];
console.log( 'Largo: ', juegos.length );

let primero = juegos[ 0 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log( 'Primero:', primero, ' Ultimo: ', ultimo );

juegos.forEach( ( elemento, indice, arr ) => {
    console.log( { elemento, indice, arr } )
} )

// Colocar elemeno al final del arreglo
juegos.push( 'Mario Kart' );

// Colocar elemto al final del arreglo
juegos.unshift( 'Mario Bros' );

console.log( juegos );

// Elimnar el ultimo elemento
juegos.pop();

// Eliminar un elemento eespecifico
let posicion = 1;
let juegosBorrados = juegos.splice( posicion, 1 );
console.log({ juegosBorrados, juegos });

// En que lugar se encuentra
let metroIndex = juegos.indexOf('Plants vs Zombies');
console.log(metroIndex);