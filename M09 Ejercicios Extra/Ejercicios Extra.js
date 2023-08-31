/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   // var i=1;
   var arregloPadre = [];
   // for (const elemento in objeto) {
   //    var el = elemento;
   //    var arreglox = 'array' + i;
   //    arreglox = [el, objeto[elemento]];
   //    arregloPadre.push(arreglox) 
   //    i++;
   // }
   for (const elemento in objeto) {
      arregloPadre.push([elemento, objeto[elemento]]);
   }
   return arregloPadre;
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringNueva = string.split('');
   var objeto = {};
   stringNueva.sort();
   var contadores = [];
   var comparador = stringNueva[0];
   var contador = 0;
   var letras =[];
   for (let i = 0; i < stringNueva.length; i++) {
       if (stringNueva[i] === comparador){
           comparador = stringNueva[i];
           contador ++;
       }else if (stringNueva[i] !== comparador){
           letras.push(comparador);
           contadores.push(contador);
           contador = 1;
           comparador = stringNueva[i];   
       }
   }
   contadores.push(contador);
   letras.push(comparador);
   for (let i = 0; i < contadores.length; i++) {
      objeto[letras[i]] = contadores[i];
   }
   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var nuevoString = [];
   for (let i = 0; i < string.length; i++) {
       if (string[i] === string[i].toUpperCase()) {
           nuevoString.push(string[i]);
       } 
   }
   for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[i].toUpperCase()) {
          nuevoString.push(string[i]);
      } 
  }
   var stringFinal = nuevoString.join('');
   string = stringFinal;
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arreglo = frase.split(' ');
   var arrayNuevo = [];
   for (let i = 0; i < arreglo.length; i++) {
       let aux = arreglo[i].split('');
       let palabraInvertida = '';
       aux.forEach(element => {
           palabraInvertida = element + palabraInvertida;
       });
       arrayNuevo[i] = palabraInvertida;
   }
   var fraseNueva = arrayNuevo.join(' ');
   return fraseNueva;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();
   comparador = '';
   for (let i = 0; i < numeroString.length; i++) {
       comparador = numeroString[i] + comparador;
       
   }
   if (numeroString === comparador) {
       return 'Es capicua';
   } else {
       return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringNuevo = '';
   for (let i = 0; i < string.length; i++) {
       if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
           stringNuevo = stringNuevo + string[i];
       } 
   }
   return stringNuevo;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arregloLongitudes = arrayOfStrings.map(element => {
      return element.length;
  });
  var resultado = [];
  while (resultado.length < arrayOfStrings.length) {
      var vMinimo = Math.min(...arregloLongitudes);
      for (let i = 0; i < arregloLongitudes.length; i++){
          if (arregloLongitudes[i] === vMinimo) {
              arregloLongitudes[i] = 50;
              resultado.push(arrayOfStrings[i]);
          }   
      }; 
  }
   return resultado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];
   if (array1.length >= array2.length) {
       for (let i = 0; i < array1.length; i++) {
           if (array2.includes(array1[i])) {
               resultado.push(array1[i])
           }
       }
   }else{
       for (let i = 0; i < array2.length; i++) {
           if (array1.includes(array2[i])) {
               resultado.push(array2[i])
           }
       }
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
