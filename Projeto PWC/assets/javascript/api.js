// Ver se a API esta a ser chamada corretamente
fetch('https://restcountries.com/v3.1/all')
    .then(response => {
        //Usasse o .then para fazer encadeamento de operações para além fazer com o o código espere até a Promisse(Objeto que representa um event, normalmente um request) 
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.statusText}`);
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        console.log(data); // Dados recebidos da API
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });