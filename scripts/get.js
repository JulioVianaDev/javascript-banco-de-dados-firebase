const url ="https://crud-javascript-vanilla-default-rtdb.firebaseio.com/pessoas.json"

async function PegarDados(){
  const resultado = await fetch(url);
  const resultadoConvertido =  await resultado.json();
  // const array = Object.values(resultadoConvertido)
  const arr = Object.entries(resultadoConvertido).map(([id,values])=>({id,...values}));
  // console.log(resultadoConvertido);
  // console.log(array);
  // console.log(arr);
  function gerarTableRows(array){
    return array.map((item,index)=> `
      <tr>
        <td>${index}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.id}</td>
        <td><button onclick="EnviandoDadosAtuais('${item.id}', '${item.name}', '${item.email}')">Editar</button></td>
        <td><button onclick="deleteData('${item.id}')">Deletar</button></td>
      </tr>
    `).join('');
  }
  const tableBody = document.getElementById("tbody");
  // console.log(tableBody)
  tableBody.innerHTML = gerarTableRows(arr);
  // tableBody.innerHTML = "<p>vim html</p>" 
}
PegarDados();