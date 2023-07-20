//Senha do usuário recebida do Banco de Dados
const Bdsenha = 23456;

const senhaInformada = 12345
let usuarioLogado;


if (senhaInformada == Bdsenha)
{
    usuarioLogado = true;

}

else{


    usuarioLogado = false;
}
console.log((usuarioLogado ?  "Usuário logado " : "Senha Incorreta"))