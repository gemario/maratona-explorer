const elementResponse = document.querySelector('#response')

const buttonAsk = document.querySelector('#buttonAsk')

const responses = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definidamente!',
  'Minha resposta é não',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possivel prever agora',
  'Perspectiva boa',
  'As perspectivas não são tão boas.',
  'Sim',
  'Concentre-se e pergunte novamente',
  'Sinais apontam que sim'
]

const inputQuestion = document.querySelector('#inputQuestion')

// clicar em fazer pergunta
function askQuestion() {
  if (inputQuestion.value == '') {
    alert('Digite sua pergunta!')
    return
  }

  buttonAsk.setAttribute('disabled', true)

  const question = '<div>' + inputQuestion.value + '</div>'

  // gerar número aleatório
  const totalResponses = responses.length
  const numberRandom = Math.floor(Math.random() * totalResponses)

  elementResponse.innerHTML = question + responses[numberRandom]

  elementResponse.style.opacity = 1
  // sumir resposta depois de 3s
  setTimeout(function () {
    elementResponse.style.opacity = 0
    buttonAsk.removeAttribute('disabled')
  }, 3000)
}
