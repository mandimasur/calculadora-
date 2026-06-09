let contador = 0;
/*
soma receber dois numeros. retorna a soma dos dois numeros
subtração 
criar uma funcao que vai executar a operacao, precisa receber o "a", operação, b e 
deve retornar o resultado.



*/
function somar (a,b){
    let resultado = a + b;
    return resultado;
}
function subtração (a,b){
    let resultado = a - b;
    return resultado ;

}
function calcular(a,operacao, b){
    if(operacao =="+"){
        return somar(a,b);
    }

    return -1;
}