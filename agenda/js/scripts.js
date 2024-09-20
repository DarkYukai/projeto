// mostrar mensagem de boas vindas
// Uso para ver se esta funcionando
console.log("ola mundo")

// o codigo e executado quando o DOM estiver totalmente carregada.
// adicionar um escutador
document.addEventListener('DOMContentLoaded',
    () => {
        // Selecionar o formulario pelo id
        const tarefaForm = document.getElementById('tarefa-form');

        // Selecionar o input de entrada pelo id
        const tarefaInput = document.getElementById('tarefa-input');

        // Selecionar a nossa lista de tarefas pelo id
        const tarefasLista = document.getElementById('tarefas-lista');

        // eu vou criar um listener para monitorar o form quando eu clicar no botão submit
        tarefaForm.addEventListener('submit', (e) => {
            // mudar o comportamento do formulario
            // no previnir o comportamento padrão
            e.preventDefault();

            // pegar informação do input
            // let e const eu crio variaveis
            let tarefa = tarefaInput.value;
            console.log(tarefa);

            // função que adciona a tarefa na ul
            // addTarefa(tarefaInput.value);
            addTarefa(tarefa);

            // limpar o input
            tarefaInput.value = "";

            // termina o listener da tarefaForm
        });

        // funções e metodos, sao comportamentos de uma classe
        // podem receber ou não parametros
        // podem receber ou não tipos de dados
        // quando não retorna é conhecido por vazio (void)  

        function addTarefa(tarefa) {
            console.log(tarefa)
            // criar uma li
            const li = document.createElement('li');
            // criar um span
            const span = document.createElement('span');
            // definir o texto do span
            span.textContent = tarefa;
            //criar um botao de editar
            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = "Editar"
            // criar ação para o botao editar
            botaoEditar.onclick = () => editar(span);

            // criar botao remover
            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => remover(li);

            // adicionar span
            li.appendChild(span);
            li.appendChild(botaoEditar);
            li.appendChild(botaoRemover);
            // adicionar o Li
            tarefasLista.appendChild(li);
        }

        function editar(span) {
            const nova = prompt('Edite sua tarefa:', span.textContent);

            // teste logico ou condicional
            if (nova != null && nova.trim() !== '') {
                span.textContent = nova;
            }
        }

        function remover(li){
            tarefasLista.remove(li)
        }


        // so fecha na final do arquivo
    }
);
