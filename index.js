// let number= parseInt(prompt('Escribe un numero'));

// if(number%2==0){
//     console.log('Es par')
// }else{
//     console.log('no es par')
// }

// let number1=parseInt(prompt('escribe numero1'));
// let number2=parseInt(prompt('escribe numero2'));
// let number3=parseInt(prompt('escribe numero3'));

// if( number1===number2 && number1===number3){
//     console.log('los numeros son iguales')
// }else if(number1> number2 && number1>number3){
//     console.log('numero 1 es mayor')


// }else if(number2>number1 && number2>number3 ){
//     console.log('numero 2 es mayor2')
// }
// else{
//     console.log('numero 3 es mayor')
// }

// let año=parseInt(prompt('digite año'));

// if((año%2===0 && año%100!==0) || año%400===0){
//     console.log('es una año bisiesto')
// }

// let number= parseFloat(prompt('digite numero'));

// if(number>0){
//     console.log('positivo')

// }else if(number===0){
//     console.log('es cero');
// }else{
//     console.log('negativo')
// }


// let montoTotal=parseFloat(prompt('digite el monto de la compra'));
// let edad=parseInt(prompt('digite edad'));

// if(edad< 18){
//     let descuento=montoTotal*0.1;
//     let resultado= montoTotal-descuento;
//     console.log(`el resultado es ${resultado}`);
    
// }else if(18>=edad && edad<=65){
//     let descuento=montoTotal*0;
//     let resultado= montoTotal-descuento;
//     console.log(`el resultado es ${resultado}`)
    

// }else{
//     let descuento= montoTotal*0.15;
//     console.log(descuento)
//     let resultado= montoTotal-descuento;
//     console.log(`el resultado es ${resultado}`)

// }


//Capitalizar una palabra

// let word= prompt('dime una palabra')

// function capitalize() {
//     let resultado=word.toUpperCase();
//     return resultado;
    
// }

// console.log(capitalize())

//Contador de Caracteres

// let palabra=prompt('dame una palabra');

// function contadorDeCaracteres(){
//     return palabra.length;
// }

// console.log(contadorDeCaracteres())

//Concatenar dos palabras

// let word1=prompt('dame la primera palabra');
// let word2=prompt('dame la segunda palabra');

// function concatenar(){
//     return word1+word2;
// }

// console.log(concatenar());

//Posicion del caracter

// let word=prompt('dame una palabra');

// function posicionDeCaracter(){
//     let posicion=parseInt(prompt('dame la posicion de la letra que quieres ver'));
//     console.log(posicion);
//     return word.charAt(posicion);
// }

// console.log(posicionDeCaracter());


//Verificar numero entero

// let number=parseFloat(prompt('dame un numero'));

// function numeroEntero(){
//     let resultado= Number.isInteger(number);
//     return resultado;
// }

// console.log(numeroEntero())

//Validacion de la edad minima

// let edad=parseInt(prompt('escribe tu edad'));

// function verificacionEdad(){
//     if(edad>=18){
//         alert(`Felicidades! tienes ${edad} años de edad, eres mayor de edad`);
//     }else{
//         let fechaActual= new Date();
//         let añoActual= fechaActual.getFullYear();
//         let faltante= 18 - edad;
//         let añosFaltantes= añoActual + faltante;
//         alert(`Lo Siento :( Tienes ${edad} años de edad, pero solo te faltan ${faltante} año, en el año ${añosFaltantes} los cumplirás`);
//     }
// }

// console.log(verificacionEdad());

//Verificacion de un numero par o impar

// let numero= parseInt(prompt('Dame un numero'));

// function verficacionDeParOImpar(){
//     if(numero%2===0){
//         alert('el numero es par')
//     }else{
//         alert('el numero es impar')
//     }
// }

// console.log(verficacionDeParOImpar());

//Convertidor de Texto a mayuscular o minusculas

// let word=prompt('escribe la palabra a convertir');
// let opcion=prompt('escribe mayuscula o minuscula')
// function convertidor(){
//     if(opcion==='mayuscula'){
//         return word.toUpperCase();
//     }
//     if(opcion==='minuscula'){
//         return word.toLowerCase();
//     }

// }

// console.log(convertidor());

//Validacion de contraseña Numerica

// let password=prompt('escribe una contraseña de 4 digitos');

// function validatePassword(){
//     if(password.length===4){
//         alert('se registro su contraseña')

//     }else{
//         alert('su contraseña no tiene cuatro digitos')
//     }
// }

// console.log(validatePassword())

//Verificar numero entero positivo

// let number= parseFloat(prompt('escriba numero'));

// function validate(){
//     if(number>=0 && Number.isInteger(number)){
//         alert('el numero es un entero positivo')
//     }else{
//         alert('el numero no es entero positivo')
//     }
// }

// console.log(validate());


//Obtencion del primer caracter de una cadena

// let word=prompt('escriba una palabra');

// function primerCaracter(){
//     return word.charAt(0);
// }

// console.log(primerCaracter())

//Suma de dos numeros

// let numero1=parseFloat(prompt('Digite el primer numero'));

// let numero2=parseFloat(prompt('digite el segundo numero'));

// function suma(){
//     return numero1+numero2;
// }

// console.log(suma());





function comparar(){
   

    let numero1=parseFloat(prompt('digite el  numero 1'));
    let numero2=parseFloat(prompt('digite el numero 2'));
    let numero3=parseFloat(prompt('digite el numero 3'));
    const lista=[numero1, numero2, numero3];
    const lista2=lista;
    if(!(numero1===numero2 && numero1===numero3)){

        function ordenarMayor(){
            console.log(lista)
            let arrOrdenadoMayor=lista.sort((a,b)=>b -a);
            return arrOrdenadoMayor;
        }

        function ordenarMenor(){
            console.log(lista2)
            let arrOrdenadoMenor=lista2.sort((a,b)=>a-b);
            console.log(`el numero mayor es ${arrOrdenadoMenor[arrOrdenadoMenor.length-1]}`);
            console.log(`el numero mayor es ${arrOrdenadoMenor[0]}`);


            return arrOrdenadoMenor
        }
        

        
    }else{
        alert('los numeros son iguales');
    }
    
    return {
        ordenarMayor,
        ordenarMenor,
        
    };
    
}

const resultado=comparar();

console.log(resultado.ordenarMayor());
console.log(resultado.ordenarMenor());