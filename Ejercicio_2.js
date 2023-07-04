/*2. Crea un programa que solicite al usuario 2 números entre 1 y 50. 
Posteriormente mostrar en consola los números del 1 hasta el 50, 
pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.*/

let num1 = prompt('Ingrese un numero');
let num2 = prompt('Ingrese otro numero');
let i = 0;
while (i<50){
    i++;
    
    if(num1 ==i || num2 ==i){
        console.log(i +" ¡Lotería!");
    }else{
        console.log(i);
    }

}
    