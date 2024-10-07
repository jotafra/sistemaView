// Acessa o objeto "document" que representa a página html

const { application } = require("express");

// Seleciona o elemento com o id indicado do formulário
document
    .getElementById("formulario-registro")
    // Adiciona o ouvinte de evento (submit) para capturar o envio do formulário
    .addEventListener("submit", function(event){
// Previne o comportamento padrão do formulário, ou seja, impede que ele seja enviado e recarregue a página
        event.preventDefault();

        // Captura os valores dos campos do formulário 
        const nome = document.getElementById("nome");
        const cpf = document.getElementById("cpf");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");

        // Requisição HTTP para o endpoint de cadastro de usuário 

        fetch("http://localhost:5000/api/v1/user", {
            // Realiza uma chamada http para o servidor (a rota definida)
            method:"POST",
            headers: {
                // A requisição será em formato json
                "Content-Type": application/json
            },
            // Transforma os dados do formulário em uma string json para serem enviados no corpoda requisição 
            body: JSON.stringify({name, cpf, password, email}),
        })
    }
;