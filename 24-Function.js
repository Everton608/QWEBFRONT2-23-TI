const n1 = 10;
const n2 = 20;
const n3 = 30;
const n4 = 40;

// const resultadoSoma1 = n1 + n2;
// console.log(resultadoSoma1);

// const resultadoSoma2 = n1 + n3;
// console.log(resultadoSoma2);

// const resultadoSoma3 = n1 + n4;
// console.log(resultadoSoma3);

// const resultadoSoma4 = n1 + n1;
// console.log(resultadoSoma4);
//Função sem retorno: onde não há uma devolutiva de valor nenhum.
//Função com retorno: onde há uma devolutiva de algum cálculo, ou valor.
somar(n1,n1);
somar(n1,n2);
somar(n1,n3);
somar(n1,n4);
function somar(numero1, numero2) {
   const resultado = numero1 + numero2 
 console.log(`O resultado da soma é: ${resultado}`);
}
console.log("==================================");
multiplicar(n1,n1);
multiplicar(n1,n2);
multiplicar(n1,n3);
multiplicar(n1,n4);

function multiplicar(numero1,numero2) {
    const resultado = numero1 * numero2
    console.log(`O resultado da multiplicação é: ${resultado}`);
}

console.log("Hoje é dia "  + exibirDataAtual ());

function exibirDataAtual() {
    const data = new Date();
    const hoje = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const dataCompleta = hoje + "/" + mes + "/" + ano;
    
    
    
    
    
    return dataCompleta;
}