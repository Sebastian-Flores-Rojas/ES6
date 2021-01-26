// METODOS 

let cadena = 'Hola Raccoon';

// length => Devuelve el largo

console.log(cadena.length);

// toUpperCase() => Devuelve todo en mayusculas

console.log(cadena.toUpperCase());

// toLowerCase() => Devuelve todo en miniscula

console.log(cadena.toLowerCase());

// indexOf() => Devuelve la posicion en la que se encuentre el string

console.log(cadena.indexOf('R'));

// replace() => Reemplaza el fragmento de la cadena por un valor nuevo

console.log(cadena.replace('Raccoon', 'Mapache'));

// substring() => Extrae los caracteres desde donde se indica

console.log(cadena.substring(6));
console.log(cadena.substring(6, 9));

// slice() => Extrae los caracteres desde donde se indica y tambien numero negativos

console.log(cadena.slice(6, 9));
console.log(cadena.slice(-6));

// trim() => Elimina los espacios al principio y al final de la cadena

console.log(cadena.trim());

// startWith() => Genera un boolean para saber si el inicio de la cadena parte con el valor indicado

console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('R', 5));

// endsWith() => Genera un boolean para saber si el final de la cadena parte con el valor indicado

console.log(cadena.endsWith('n'));
console.log(cadena.endsWith('N'));
console.log(cadena.endsWith('Raccoon'));

// includes() => 

console.log(cadena.includes('n'));
console.log(cadena.includes('l', 5));
console.log(cadena.includes('l', 2));