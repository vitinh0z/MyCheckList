document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

 
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmSenha = document.getElementById('confirmSenha').value;
  const erro = document.getElementById('erro');
  const sucesso = document.getElementById('sucesso');


  erro.textContent = '';
  sucesso.textContent = '';

  
  if (senha !== confirmSenha) {
    erro.textContent = 'As senhas não são iguais';
    return;
  }
  localStorage.setItem('email', email);
  localStorage.setItem('senha', senha);

 
  sucesso.textContent = 'Cadastro feito com sucesso';

  setTimeout(function(){
    window.location.href = 'login.html';
  }, 1000);
});