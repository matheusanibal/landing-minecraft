const formulario = document.getElementById("formulario");
const pessoa = []
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
        mensagem: mensagem
    }
    pessoa.push(dados);
    console.log(dados, pessoa)
    alert(`Ok, ${nome}! Enviamos em seu e-mail mais sobre o jogo!`)
};