const formulario = document.getElementById("formulario");
const pessoa = [];
let minecraftEscolhido = '';
const catalogo = document.getElementById("catalogo");

formulario.onsubmit = function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('message').value;
    
    let dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        minecraft: minecraftEscolhido
    }
    pessoa.push(dados);
    console.log(dados, pessoa)
    alert(`Ok, ${nome}! Enviamos em seu e-mail mais sobre o jogo!`)
};

function escolheMine (nomeJogo) {
    alert(`${nomeJogo} é uma boa escolha!`)
    minecraftEscolhido = nomeJogo;
    console.log(minecraftEscolhido)
    console.log(dados)
}