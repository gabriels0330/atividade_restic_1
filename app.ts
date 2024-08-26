// Lista de palavras em português
const palavras: string[] = [
    'amor', 'felicidade', 'computador', 'livro', 'sol', 'lua', 'árvore', 'cachorro', 'cidade', 'praia',
    'música', 'jogo', 'estudo', 'escola', 'relógio', 'carro', 'coração', 'café', 'viagem', 'pessoa',
    'paisagem', 'fruta', 'tigre', 'internet', 'televisão', 'pá', 'caneta', 'teto', 'janela', 'porta'
];

// Função para gerar e exibir uma palavra aleatória
document.getElementById('generate-btn')?.addEventListener('click', () => {
    const palavra = palavras[Math.floor(Math.random() * palavras.length)];
    const wordDisplay = document.getElementById('word-display') as HTMLHeadingElement;
    if (wordDisplay) {
        wordDisplay.textContent = palavra;
    }
});
