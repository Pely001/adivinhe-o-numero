// Gera um número aleatório entre 0 e 10
let randomNumber = Math.floor(Math.random() * 11); // Torna randomNumber mutável

// Seleciona os elementos da página
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');
const restartButton = document.getElementById('restartGame');

// Define o número máximo de tentativas
let attemptsLeft = 3;

// Adiciona o evento de clique ao botão
submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value, 10);

    // Verifica se o valor digitado é válido
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
        messageElement.textContent = 'Por favor, insira um número válido entre 0 e 10.';
        return;
    }

    // Lógica do jogo com switch case
    switch (true) {
        case userGuess === randomNumber:
            messageElement.textContent = 'Parabéns! Você acertou o número!';
            submitButton.disabled = true; // Desativa o botão após acertar
            break;

        default:
            attemptsLeft--; // Reduz o número de tentativas restantes
            if (attemptsLeft > 0) {
                messageElement.textContent = `Errado! Restam ${attemptsLeft} tentativas.`;
            } else {
                messageElement.textContent = `Você perdeu! O número correto era ${randomNumber}.`;
                submitButton.disabled = true; // Desativa o botão após esgotar as tentativas
            }
            break;
    }

    // Limpa o campo de entrada
    guessInput.value = '';
});

// Adiciona o evento de teclado para ativar o botão com Enter
guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitButton.click(); // Dispara o clique do botão
    }
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 11); // Novo número aleatório
    attemptsLeft = 3; // Reseta tentativas
    messageElement.textContent = 'Tente adivinhar o número de 1 a 10 ';
    guessInput.value = '';
    submitButton.disabled = false;
});