//request → Representa a requisição feita pelo cliente (ex: navegador, Postman).
//response → Permite enviar uma resposta ao cliente.

function status(request, response) {
  response.status(200).json({
    chave: "São acima da média",
  });
}

export default status;
