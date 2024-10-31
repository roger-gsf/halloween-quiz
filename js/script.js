document.getElementById("form-quiz").addEventListener("submit", function (e) {
  e.preventDefault(); // impede o envio padrão do formulário

  const correctAnswers = {
    // respostas corretas do quiz
    Question_1: "Pamela Vorhess",
    Question_2: "All work and no play makes Jack a dull boy.",
    Question_3: "The Conjuring",
    Question_4: "Poltergeists",
    Question_5: "Freddy Krueger",
    Question_6: "A forest",
    Question_7: "The Ghostface mask",
    Question_8: "The Ring",
    Question_9: "Clowns",
    Question_10: "Hypnosis",
  };

  const userAnswers = {}; // objeto para armazenar as respostas do usuário
  const selectedAnswers = document.querySelectorAll(
    'input[type="radio"]:checked'
  ); // seleciona todas as respostas marcadas

  selectedAnswers.forEach((radio) => {
    // percorre cada resposta marcada
    userAnswers[radio.name] = radio.value; // armazena a resposta do usuário no objeto userAnswers
  });

  let totalScore = 0; // inicializa a pontuação total
  let resultMessage = ""; // inicializa a mensagem de resultado

  for (let question in correctAnswers) {
    // percorre cada pergunta
    if (correctAnswers[question] === userAnswers[question]) {
      // verifica se a resposta do usuário está correta
      totalScore++; // incrementa a pontuação se a resposta estiver correta
      resultMessage += `${question}: Correct!\n ${userAnswers[question]}\n`; // adiciona mensagem de resposta correta
    } else {
      resultMessage += `${question}: Wrong! \nYour answer: ${userAnswers[question]}, \nCorrect answer: ${correctAnswers[question]}\n`; // adiciona mensagem de resposta incorreta
    }
  }
  alert(`Score: ${totalScore}/10\n\n${resultMessage}`); // exibe a pontuação total e as mensagens de resultado
});
