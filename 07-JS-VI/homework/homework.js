// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  function noNecesitaCb(a,b){
    return a+b;
  }
  let suma = numeros.reduce(noNecesitaCb)
  cb(suma);
  //entiendo que es para acostumbrar a utilizar mas los callbacks para escribir menos
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  function iterar(item){
    cb(item);
  }
 array.forEach(iterar);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
let resultado =[];
function iterar(item){
  cb(item);
  resultado.push(cb(item));
}
array.map(iterar);
return resultado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
