let juego = confirm("Hola, Vamos a jugar un juego. Yo voy a pensar un nro aleatorio entre 1 y 10 y vos tenes que adivinarlo. ¿Te animas?");
let numero=Math.floor(Math.random() * 10);
console.log(numero)       
let respuesta;
if (juego) {
    do{
        respuesta= parseInt(prompt("Ingrese un numero para jugar"));
        if(numero === respuesta){
            alert("usted ha ganado");
         } else{
                respuesta = alert("ha fallado")
            }
    }while(respuesta !=numero);
    alert("Gracias por jugar")
}else{
    alert("ok, gracias por nada");
}