/* Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc).
 El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
 Y seguirá pidiendo al usuario introducir otro día. 
 En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.*/

let dia = prompt('Registre un dia de la semana');

while (dia.toLowerCase() != "domingo"){
    
    switch (dia.toLowerCase()) {
        case "lunes":
            console.log("Comienza la semana con toda la actitud");
            break;
        case "martes":
            console.log("Hoy es un dia grandioso");
            break;    
        case "miercoles":
            console.log("Hoy todo es posible solo si crees");
            break;
        case "jueves":
            console.log("El mañana es incierto vive el hoy y el ahora");
            break;
        case "viernes":
            console.log("Finaliza la semana pero incian los mejores momentos");
            break;
        case "sabado":
            console.log("Vive y gosa cada momento como si fuera el ultimo");
            break;  
        default:
            console.log("No ingresaste un dia de la semana");
            break;
    }
    dia = prompt('Registre un dia de la semana');
}
console.log("Ve a descansar");