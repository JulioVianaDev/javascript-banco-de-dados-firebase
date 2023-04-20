// DIFERENÇA DE PATCH VS PUT
// PATCH MODIFICA APENAS OS ATRIBUTOS ENVIADOS
// PUT MODIFICA O OBJETO INTEIRO

var editMode = document.getElementById("submit").innerHTML === "Edit Aqui!";

function EnviandoDadosAtuais(id,nameItem,emailItem){
    document.getElementById('email').value = emailItem;
    document.getElementById('name').value = nameItem;

    document.getElementById('submit').setAttribute("data-id",id);
    document.getElementById('submit').innerHTML = "Edit Aqui!";
    editMode = document.getElementById("submit").innerHTML === "Edit Aqui!";
    // console.log(editMode)
}