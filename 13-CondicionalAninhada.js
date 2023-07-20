const media = 5
console.log(`Sua média é de ${media} pontos`);

if(media < 2)
{
    console.log("Você foi reprovado!")
}

else if(media < 6)
{
    console.log("Você está de recuperação")
}
else{
    console.log("Aprovado")
}