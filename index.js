





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