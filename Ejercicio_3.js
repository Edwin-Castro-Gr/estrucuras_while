/*3. Crea un programa que solicite al usuario números, 
si lo que este introduce es un número guardarlo en un arreglo. 
Para terminar el capturar el usuario debe ingresar el número 0. 
Finalmente mostrar la lista de números capturados en pantalla o en la consola.*/

let num = prompt('Ingrese un numero');
array=[];


while (num != 0){
    
    array.push(num);
    
    num = prompt('Ingrese otro numero o cero para finalizar');
}
console.log(array);
    