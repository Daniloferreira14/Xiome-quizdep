
    // Função para ativar o botão quando todos os campos estiverem preenchidos
    document.getElementById("formulario").addEventListener("input", function() {
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const cpf = document.getElementById("cpf").value.trim();
      const endereco = document.getElementById("endereco").value.trim();

      // Verificar se todos os campos estão preenchidos
      if (nome && email && telefone && cpf && endereco) {
        document.getElementById("btnEnviar").disabled = false; // Habilitar o botão
      } else {
        document.getElementById("btnEnviar").disabled = true; // Desabilitar o botão
      }
    });

    // Função de redirecionamento quando o formulário for enviado
    document.getElementById("formulario").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio do formulário
      
      // Redirecionar para outra página
      window.location.href = "https://wa.me/559896099309?text=olá+tudo+bem+tenho+interesse+de+levantar+um+caixa+na+loja+quizz"; // Substitua "outra_pagina.html" pelo endereço desejado