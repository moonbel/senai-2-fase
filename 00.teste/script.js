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
const atividades = [];

function adicionarAtividade() {

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

    let mensagem = "Minhas atividades escolares:%0D%0A%0D%0A";

    atividades.forEach((atividade) => {
        mensagem +=
            "Tipo: " + atividade.tipo + "%0D%0A" +
            "Matéria: " + atividade.materia + "%0D%0A" +
            "Data: " + atividade.data + "%0D%0A" +
            "Descrição: " + atividade.descricao + "%0D%0A%0D%0A";
    });

    window.location.href =
        "mailto:?subject=Minhas atividades escolares&body=" + mensagem;
}