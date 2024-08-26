var _a;
// Lista de palavras em português
var palavras = [
    'amor', 'felicidade', 'computador', 'livro', 'sol', 'lua', 'árvore', 'cachorro', 'cidade', 'praia',
    'música', 'jogo', 'estudo', 'escola', 'relógio', 'carro', 'coração', 'café', 'viagem', 'pessoa',
    'paisagem', 'fruta', 'tigre', 'internet', 'televisão', 'pá', 'caneta', 'teto', 'janela', 'porta'
];
// Função para gerar e exibir uma palavra aleatória
(_a = document.getElementById('generate-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var palavra = palavras[Math.floor(Math.random() * palavras.length)];
    var wordDisplay = document.getElementById('word-display');
    if (wordDisplay) {
        wordDisplay.textContent = palavra;
    }
});
