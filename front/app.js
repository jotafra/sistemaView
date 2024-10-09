// Acessa o objeto "document" que representa a página html

//const { application, response } = require("express");

// Seleciona o elemento com o id indicado do formulário
document
    .getElementById("formulario-registro")

    // Adiciona o ouvinte de evento (submit) para capturar o envio do formulário
    .addEventListener("submit", function(event){
// Previne o comportamento padrão do formulário, ou seja, impede que ele seja enviado e recarregue a página
        event.preventDefault("");

        // Captura os valores dos campos do formulário 
        const name = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("senha").value;

        // Requisição HTTP para o endpoint de cadastro de usuário 

        fetch("http://localhost:5000/api/v1/user", {
            // Realiza uma chamada http para o servidor (a rota definida)
            method:"POST",
            headers: {
                // A requisição será em formato json
                "Content-Type": "application/json",
            },
            // Transforma os dados do formulário em uma string json para serem enviados no corpoda requisição 
            body: JSON.stringify({name, cpf, email, password}),
        })
        .then((response) => {
                //tratamento da resposta do servidor 
                if(response.ok){
                    // Verifica se a resposta foi bem sucedida (status 2xx)
                    return response.json();
                }
                // Convertendo o erro em formato json
                return response.json().then((err) => {
                    // Mensagem retornada do servidor, acessada pela chave "error"
                    throw new Error(err.error);
                });
            }) // fechamento da then (response)
            .then((data) => {
                // Executa a resposta de sucesso - retorna ao usuario final 
                // Exibe um alerta cpara o usuário om o nome do usuário que acabou de ser cadastrado 
                alert("Usuário cadastrado com sucesso! " + data.user.nome);
                // Exibe o log no temrinal 
                console.log("Usuário criado: ", data.user);
                // Reseta os campos do formulário após o sucesso do cadastro
                document.getElementById("formulario-registro").reset();
            })
            .catch((error) => {
                // Captura qualquer erro que ocorra durante o processo de requisição/resposta 

                // Exibe alerta (front) com o erro processado
                alert("Erro do cadastro: " + error.message);

                console.error("Erro:", error.message)
            });
    });