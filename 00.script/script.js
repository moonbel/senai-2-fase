function materiaS() {
    document.getElementById("resposta").innerHTML = `
        <table border="1">
            <tr>
                <th>Dia</th>
                <th>1ª Aula</th>
                <th>2ª Aula</th>
                <th>3ª Aula</th>
                <th>4ª Aula</th>
                <th>5ª Aula</th>
                <th>6ª Aula</th>
            </tr>

            <tr>
                <td>Segunda-feira</td>
                <td>Química</td>
                <td>Sociologia</td>
                <td>Fisíca</td>
                <td>Biologia</td>
                <th>Geografia</th>
                <th>Física</th>
            </tr>

            <tr>
                <td>Terça-feira</td>
                <td>Física</td>
                <td>Inglês</td>
                <td>História</td>
                <td>Portugues</td>
                <th>Matemática</th>
                <th>Geografia</th>

            </tr>

            <tr>
                <td>Quarta-feira</td>
                <td>Portugues</td>
                <td>Matemática</td>
                <td>Filosofia</td>
                <td>Matemática</td>
                <td>Educação física</td>
                <td>Biologia</td>
                
            </tr>
               <td>Quinta-feira</td>
                <td>Matemática</td>
                <td>Português</td>
                <td>Português</td>
                <td>Inglês</td>
                <td>Espanhol</td>
                <td>Biologia</td>
                
                
            </tr>
               <tr>
                <td>Sexta-feira</td>
                <td>História</td>
                <td>Química</td>
                <td>Português</td>
                <td>Matemática</td>
                <td>Matemática</td>
                <td>Matemática</td>
                
            </tr>
        </table>
    `;
}
let atividades = [];
carregarDados()
mostrarNaTabela();

function adicionarAtividade() {
    carregarDados()

    const tipo = document.getElementById("tipo").value;
    const materia = document.getElementById("materia").value;
    const data = document.getElementById("data").value;
    const descricao = document.getElementById("descricao").value;

    if (materia === "" || data === "") {
        alert("Preencha a matéria e a data!");
        return;
    }

    const atividade = {
        tipo: tipo,
        materia: materia,
        data: data,
        descricao: descricao
    };

    atividades.push(atividade);

    mostrarNaTabela();

    limparFormulario();
    salvarDados()
}

function mostrarNaTabela() {
    const tabela = document.getElementById("tabelaAtividades");

    tabela.innerHTML = "";

    atividades.forEach((atividade, indice) => {

        tabela.innerHTML += `
            <tr>
                <td>${atividade.materia}</td>
                <td>${atividade.data}</td>
                <td>${atividade.descricao}</td>
                <td>
                    <button onclick="excluir(${indice})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function limparFormulario() {

    document.getElementById("materia").value = "";
    document.getElementById("data").value = "";
    document.getElementById("descricao").value = "";
}

function excluir(indice) {

    atividades.splice(indice, 1);

    mostrarNaTabela();
}
function enviarEmail() {

    const email = document.getElementById("emailUsuario").value;

    let mensagem = "Minhas atividades escolares:\n\n";

    atividades.forEach((atividade) => {
        mensagem +=
            "Tipo: " + atividade.tipo + "\n" +
            "Matéria: " + atividade.materia + "\n" +
            "Data: " + atividade.data + "\n" +
            "Descrição: " + atividade.descricao + "\n\n";
    });

    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
        email: email,
        mensagem: mensagem
    })
    .then(function() {
        alert("Atividades enviadas com sucesso!");
    })
    .catch(function(error) {
        console.log(error);
        alert("Erro ao enviar o e-mail.");
    });
}

function salvarDados(){
    localStorage.setItem("atividades", JSON.stringify(atividades))
}

function carregarDados(){
    atividades = JSON.parse(localStorage.getItem("atividades")) || []
}