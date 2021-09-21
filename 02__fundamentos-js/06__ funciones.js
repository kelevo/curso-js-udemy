

// Multiples return
const saludar = () => {
    console.log( 'Hola Mundo' );

    return [ 1, 2 ]
}

const retornoDeSaludar = saludar();
console.log( retornoDeSaludar[0], retornoDeSaludar[1] );

// Funcion de flecha de math
const getAleatorio = () => Math.random();

console.log( getAleatorio() );