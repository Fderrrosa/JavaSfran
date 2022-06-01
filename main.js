let nombre = prompt("Bienvenidos a nuestro local, ¿Podrias ingresar tu nombre?");

   alert("Que tal" + " " + nombre + "," + "es un placer tenerte en nuestro local!");
   const cantidadPersonas = parseInt(prompt("Cuantas personas van a ser?"));
   if (cantidadPersonas <=10 ){
       alert ("Perfecto, puedes hacer una reserva");


       for (let i = 1; i <= cantidadPersonas; i++){
           let nombreDePersonas = prompt("Ingresa por favor el nombre de cada persona");

           console.log(nombreDePersonas);
       }

   } else {
       alert("Lo lamento, son demasiadas personas para reservar en este momento");
   }
