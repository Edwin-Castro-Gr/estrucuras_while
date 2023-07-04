/* 4. Crea un programa que solicite al usuario letras o palabras, 
si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno.
Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.*/

let str = prompt('Ingrese letras o palabras');
array=[];

while (str.length != 0){
    
    array.push(str);
    
    str = prompt('Ingrese letras o palabras');
}
console.log(array);
    