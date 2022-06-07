let inicio = prompt("Bienvenidx a nuestro emprendimiento TransmutArte ; para iniciar te pedimos que ingreses tu partido/localidad para decirte cual es el costo de envio que te queda");


if(inicio == "palermo"){
    alert("El costo de envio seria " + 880);
    console.log("si se cumple la condicion y tu partido/localidad es palermo se va a mostrar este mensaje");
}  

else if(inicio == "recoleta"){
    alert("El costo de envio seria " + 1050 + ", bienvenidx a nuestra tienda");
    console.log("si se cumple esta condicion y tu partido/localidad recoleta se va a mostrar este mensaje");
    
}

else{
    alert("Lo lamento, hay un error con el partido/localidad ingresado");
    console.log("si no se cumple ninguna de las condiciones, se va a mostrar este mensaje")
}

let Edad = prompt("Perfecto; otra cosa que necesitamos verificar es tu edad, asi que por favor ingresa tu edad");

if(Edad >= "18"){
    alert("Excelente, bienvenidx");
    console.log("si se cumple la condicion y la fecha ingresa es mayor o igual, vas a ver este mensaje");
}

else if (Edad < "18"){
    alert("ups me parece que no contas con la mayoria de edad, lo siento");
    console.log("si no se cumple la condicion anterior y se cumple esta, la edad es menor; vas a ver este mensaje");
}

else{
    console.log("si no se cumple absolutamente ninguna de las funciones, vas a ver este mensaje");
}