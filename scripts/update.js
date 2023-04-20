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
const urlEdit = "https://crud-javascript-vanilla-default-rtdb.firebaseio.com/pessoas/"

async function editData(id){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const data ={
        name: name,
        email: email,
    }
    response = await fetch(`${urlEdit}${id}.json`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })  
      .then(res=>{
        PegarDados();
        document.getElementById("submit").removeAttribute("data-id");
        document.getElementById('email').value='';
        document.getElementById('name').value='';
        document.getElementById('submit').innerHTML="Cadastrar!";
        editMode= document.getElementById("submit").innerHTML === "Edit Aqui!";
      })
        .catch(err=>console.log("erro ao editar",err));

}