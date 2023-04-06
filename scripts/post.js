function sendData(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const data ={
    name: name,
    email: email,
  }
  // fetc(url,{ argunto })
  // metodos
  // POST envia os dados
  // GET recebe os dados
  // DELETE deleta os dados
  // PUT substitui todo o objeto
  // PATCH substui só os argumentos recebidos
  fetch("https://crud-javascript-vanilla-default-rtdb.firebaseio.com/pessoas.json",{
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(resposta => resposta.json())
    .then(data=>console.log(data))
    .catch(erro=>console.error(erro))
}