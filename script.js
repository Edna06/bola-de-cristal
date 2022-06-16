// variáveis?
//dados de entrada?
//dados de saída?



const elementoResposta = document.querySelector("#resposta") 
//pesquise pelo seletor dentro do meu html 
const inputPergunta = document.querySelector("#inputPergunta")


// array
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta 
function fazerPergunta () {

  if(inputPergunta.value == ""){
    alert("Digite a sua pergunta")
    return //a função irá parar
  } 

  const pergunta = "<div>" + inputPergunta.value + "</div>"


  //gerar número aleatório 
  const totalResposta = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)

 
  elementoResposta.innerHTML = pergunta + respostas [numeroAleatorio]

//sumir a resposta depois de 3s
setTimeout(function() {

  elementoResposta.style.opacity = 0;
}, 3000 //ms
)

}