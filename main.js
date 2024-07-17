let nombreUsuario = prompt("Ingresa tu nombre.");
console.log( "El nombre del usuario es " + nombreUsuario);

alert("Bienvenidos/as!");

let clima = prompt("Como esta el clima en tu ciudad?");
if (clima == "Soleado") {
     console.log("☀");
}  
else if (clima =="Nublado") {
    console.log("⛅");
}
let dia = parseInt(prompt("Ingrese día de la semana"));

let botonDestapado = 0;
let boton1 = null;
let boton2 = null;
let resultado1 = null;
let resultado2 = null;
let movimientos = 0;
let aciertos = 0;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById(`aciertos`);

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; 
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

function destapar(id){
    botonDestapado++;
    console.log(botonDestapado);

    if(botonDestapado == 1){
        boton1 = document.getElementById(id);
        boton1.innerHTML = numeros[id];
        resultado1 = numeros[id];
        boton1.innerHTML = resultado1;

        boton1.disabled = true;
    }else if(botonDestapado ==2){
        boton2 = document.getElementById(id);
        resultado2 = numeros[id];
        boton2.innerHTML = resultado2;

        boton2.disabled = true;

        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
        if(resultado1 == resultado2){
            botonDestapado = 0;

            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
        if(aciertos == 8){
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}👌👏`
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}🎉😎`
        }
        }else{
            setTimeout(()=>{
                boton1.innerHTML = '';
                boton2.innerHTML = '';
                boton1.disabled = false;
                boton2.disabled = false;
                botonDestapado = 0;
            },1000);
        }
    }
}