let n1, n2, n3;
n1 = 25;    
n2 = 29;
n3 = 3;

let maiorNumero;

// Operadores lógicos
//&& -  AND (E)
//|| - OR (OU)
//! - NOT (Não)


//Verificação condicional se os três números são repetidos
if(n1 == n2 && n1 == n3)
{
    console.log("Os Três números são iguais!");
}

if (n1 >= n2 && n1 >= n3)
{
    maiorNumero = n1;
}
else if (n2 >= n1 && n2 >= n3)
{
    maiorNumero = n2;
}
else if (n3 >= n1 && n3 >= n2)
{
    maiorNumero = n3;
}
else
{
    console.log ("Números inválidos!")
}











//Verificação condicional do maior número


if(n1 > n2)
{
    maiorNumero = n1;
}

if (n2 > n3)
{
    maiorNumero = n2;
}
else
{
    maiorNumero = n3;
}

console.log(maiorNumero);