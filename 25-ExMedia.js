//Utilizar a função com argumentos e com retorno para calcular a média de 4 notas.
const n1 = 9;
const n2 = 7;
const n3 = 6;
const n4 = 3;

console.log(calcularMedia(n1,n2,n3,n4));

function calcularMedia(n1, n2, n3, n4){
     try{

       
    const media = (n1+n2+n3+n4)/4;
    return media.toFixed(2);
     }
     catch(e)
     {
        console.log("Erro ao calcular a média. Avise o menino do TI");
        console.log(e);
     }
}