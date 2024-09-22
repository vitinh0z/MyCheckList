function enviarTarefa() {
    // Captura a tarefa, a etiqueta e a data de validade
    const tarefa = document.getElementById('tarefaText').value;
    const data = document.getElementById('dataValidade').value;
    const etiqueta = document.querySelector('input[name="opcao"]:checked');

    // Verifica se todos os campos foram preenchidos
    if (!tarefa || !etiqueta || !data) {
        alert("Preencha todos os campos!");
        return;
    }

    // Cria um novo item da lista
    const li = document.createElement('li');

    // Adiciona a tarefa com a validade em nova linha usando \n
    const tarefaComData = `${tarefa}\nVálidade: ${data}\n\n`;
    li.innerText = tarefaComData; 

    // Cria o botão de excluir
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "&#x274C;"; 
    deleteBtn.classList.add('delete-btn');

    // Evento de exclusão da tarefa
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Adiciona o botão de exclusão ao item da lista
    li.appendChild(deleteBtn);

    // Adiciona o item na lista correspondente
    if (etiqueta.value === 'urgente') {
        document.getElementById('urgenteList').appendChild(li);
    } else if (etiqueta.value === 'moderada') {
        document.getElementById('moderadaList').appendChild(li);
    } else if (etiqueta.value === 'padrao') {
        document.getElementById('padraoList').appendChild(li);
    }

    // Limpa os campos após o envio
    document.getElementById('tarefaText').value = '';
    document.getElementById('dataValidade').value = '';
    document.querySelector('input[name="opcao"]:checked').checked = false;
}

// Ajuste o estilo das ULs para não ultrapassar o tamanho máximo e ter rolagem
const lists = document.querySelectorAll('ul');
lists.forEach((list) => {
    list.style.overflowY = 'auto'; 
    list.style.wordWrap = 'break-word'; 
});
