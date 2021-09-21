// function crearPersona( nombre, apellido ) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }

// ECMAScript 6
const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });


const persona = crearPersona( 'Patrick', 'Hernandez' );
console.log( persona );

// -------------------------------------------------------------------------

// function imprimeArgumentos() {
//     console.log( arguments );
// }

const imprimeArgumentos = ( ...args ) => console.log( args );
const imprimeArgumentos2 = ( edad, ...args ) => console.log({ edad, args });
const imprimeArgumentos3 = ( ...args ) => args;

imprimeArgumentos( 10, true, false, 'Patrick', 'Hola' );
imprimeArgumentos2( 10, true, false, 'Patrick', 'Hola' );

const argumentos =  imprimeArgumentos3( 10, true, false, 'Patrick', 'Hola' );
console.log( argumentos[0], argumentos[1] );

const [ edad, casado, vivo, nombre, saludo ] =  imprimeArgumentos3( 10, true, true, 'Patrick', 'Hola' );
console.log( { edad, casado, vivo, nombre, saludo } )

console.log( '--------------------------------------------' )

const { nombre: nuevoNombre, apellido: apellidoNuevo } = crearPersona( 'Patrick', 'Hernandez' );
console.log({ nuevoNombre, apellidoNuevo });

console.log('---------------- Objetos literales ----------------');
let patrick = {
    nombre: 'Patrick Hernandez',
    codeName: 'Desconocido',
    vivo: true,
    edad: 23,
    coords: {
        lat: 34.034,
        lng: -11.70
    },
    trajes: [ 'Gala', 'Casa', 'Calle' ],
    direccion: {
        zip: '10800, 90265',
        ubicaciones: 'Malibu, California'
    }
}

const imprimePropiedades = ( personaje ) => {
    console.log( personaje.nombre );
    console.log( personaje.codeName );
    console.log( personaje.vivo );
    console.log( personaje.edad );
    console.log( personaje.coords );
    console.log( personaje.trajes );
    console.log( personaje.direccion );
}

// Desestructuracion
const imprimePropiedades2 = ( { nombre, codeName, vivo, edad, coords, trajes, direccion } ) => {
    console.log(nombre)
    console.log(codeName)
    console.log(vivo)
    console.log(edad)
    console.log(coords)
    console.log(trajes)
    console.log(direccion) 
}

imprimePropiedades( patrick );
