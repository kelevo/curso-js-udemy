


let personaje = {
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

console.log( personaje );
console.log( 'Nombre: ', personaje.nombre );
console.log( 'Nombre: ', personaje[ 'nombre' ] );

console.log( 'Numero de trajes', personaje.trajes.length );


// Mas detalles

// Borrar una propiedad
delete personaje.edad;
console.log( personaje );

// Pares de valores
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// Añadiendo un elemento al objeto
personaje.casado = true;

// Bloquear el objeto para qu sea inmutable
Object.freeze( personaje );
// Ya no nos dejara añadir ni cambiar
personaje.gordo = false;

// Saber todas las propiedades
const propidades = Object.getOwnPropertyNames( personaje );
console.log( 'Propiedades: ', propidades );
const valores = Object.values( personaje );
console.log( 'Valores: ', valores );