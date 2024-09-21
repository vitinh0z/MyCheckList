document.getElementById('loginForm').addEventListener('submit', function(event){
  event.preventDefault(); // Prevenir o envio do formulário

  // Pegando os valores dos campos de email e senha
  const emailInserido = document.getElementById('loginEmail').value;
  const senhaInserida = document.getElementById('loginSenha').value;
  
  // Pegando a div para exibir erro
  const erro = document.getElementById('erro');

  // Recuperando os dados armazenados no localStorage
  const emailSalvo = localStorage.getItem('email');
  const senhaSalva = localStorage.getItem('senha');

  // Limpando a mensagem de erro
  erro.textContent = '';

  // Verificando se o email e a senha inseridos correspondem aos armazenados
  if (emailInserido === emailSalvo && senhaInserida === senhaSalva) {
      // Se estiverem corretos, redireciona para a página de tarefas
      window.location.href = 'tarefas.html';
  } else {
      // Se estiverem incorretos, exibe a mensagem de erro
      erro.textContent = 'Email ou senha incorretos';
  }
});
