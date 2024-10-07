//Importa a instância do Express configurada em index.js
const app = require("./index");
//Inicia o servidor na porta 5000, tornando a API acessível em http://localhost:5000

app.listen(5000);

const corsOptions = {
    origin: '*', // Substitua pela origem permitida
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',// Métodos permitidos 
    credentials: true, // Permite o uso de cookies e credenciais 
    optionsSucessStatus: 204 // Define o status de resposta para o método OPTIONS 
};

// Aplicando o middleware CORS no app
app.use(cors(corsOptions));
app.listen(5000);