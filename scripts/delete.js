const urlDelete = "https://crud-javascript-vanilla-default-rtdb.firebaseio.com/pessoas/"

function deleteData(id){
  fetch(`${urlDelete}${id}.json`,{
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then(res=>{
      PegarDados();
    })
    .catch(err=>console.error("Erro ao deletar dado",err))
}