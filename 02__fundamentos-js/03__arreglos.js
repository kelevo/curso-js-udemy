

// const arr = new Array(10);
// console.log( arr );

let videojuegos = [ 'Elizabeth', 'Patrick', 'Chabe', 'Taz' ];
console.log({ videojuegos });
console.log( videojuegos[1] );

let arregloCosas = [
    true,
    123,
    'Patrick',
    1 + 2,
    function(){},
    () => {},
    { a: 1 },
    [ 'Z', 'Megaman', 'Zero', 'DR', 'Chabe' ]
];

console.log('Elemento1: ', { arregloCosas });
console.log('Elemento2: ', arregloCosas[2]);
console.log('Elemento3: ', arregloCosas[7][4]);