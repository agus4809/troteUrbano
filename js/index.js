// let juego = confirm("Hola, Vamos a jugar un juego. Yo voy a pensar un nro aleatorio entre 1 y 10 y vos tenes que adivinarlo. ¿Te animas?");
// let numero=Math.floor(Math.random() * 10);
// console.log(numero)       
// let respuesta;
// if (juego) {
//     do{
//         respuesta= parseInt(prompt("Ingrese un numero para jugar"));
//         if(numero === respuesta){
//             alert("usted ha ganado");
//          } else{
//                 respuesta = alert("ha fallado")
//             }
//     }while(respuesta !=numero);
//     alert("Gracias por jugar")
// }else{
//     alert("ok, gracias por nada");
// }

// class Remera {
//     constructor(talle, color, stock, precio, disponible, )
// }

let masaCorporal = confirm("Bienvenido al calcular de IMC, indice de masa corporal vamos a pedirle algunos datos para continuar. ¿Desea continuar?");
let seguimos = true;
if (masaCorporal === true){
    do{
        let peso = parseInt(prompt("Ingrese su peso por favor (no mienta)"));
        let altura = parseFloat(prompt("Ingrese su altura usando escala metrica por ejemplo : 1.80)"));    
        let imc = (peso / (altura*altura));
        if(imc >= 25 && imc < 30){
            alert("su indice de masa corporal es de " + imc.toFixed(2) +" se la considera una persona con sobrepeso ya que sus valores estan entre 25 y 30");
        }else if(imc >= 30){
            alert("su indice de masa corporal es de " + imc.toFixed(2) + " se la considera una persona obesa ya que sus valores estan por encima de 30");
        }
        seguimos= confirm("¿desea continuar?");
    } while (seguimos);
        alert("Gracias por participar")
    
}else{
    alert("GRACIAS POR NADA GIL...")
}

